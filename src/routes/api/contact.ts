import { createFileRoute } from '@tanstack/react-router'
import { Resend } from 'resend'

// Contact form endpoint: verify Turnstile, then email the message through Resend.
// The email is sent from our own verified address; the visitor goes in replyTo so SPF/DMARC pass.

type ContactBody = {
  name?: unknown
  email?: unknown
  message?: unknown
  token?: unknown
}

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing environment variable ${name}`)
  return value
}

function isFilled(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

async function verifyTurnstile(token: string, remoteIp: string | null): Promise<boolean> {
  const params = new URLSearchParams({ secret: requireEnv('TURNSTILE_SECRET_KEY'), response: token })
  if (remoteIp) params.set('remoteip', remoteIp)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: params,
  })
  const data = (await res.json()) as { success: boolean }
  return data.success
}

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { name, email, message, token } = (await request.json().catch(() => ({}))) as ContactBody

        if (!isFilled(token)) return Response.json({ error: 'Missing Turnstile token' }, { status: 403 })
        if (!isFilled(name) || !isFilled(email) || !isFilled(message)) {
          return Response.json({ error: 'Name, email and message are required.' }, { status: 400 })
        }

        // Catch everything below: an uncaught throw becomes TanStack's own 500 body, which has a `message` field
        // that ContactForm would read as success.
        try {
          const verified = await verifyTurnstile(token, request.headers.get('CF-Connecting-IP'))
          if (!verified) return Response.json({ error: 'Turnstile verification failed' }, { status: 403 })

          const resend = new Resend(requireEnv('RESEND_API_KEY'))
          const { error } = await resend.emails.send({
            from: requireEnv('CONTACT_EMAIL_FROM'),
            to: requireEnv('CONTACT_EMAIL_TO'),
            replyTo: email,
            subject: 'RECEIVED: 13z.dev ContactForm',
            text: `from: ${name}\nemail: ${email}\nmessage: ${message}`,
          })

          if (error) {
            console.error('Resend error', error.name, error.statusCode, error.message)
            return Response.json({ error: 'Failed to send email' }, { status: 500 })
          }

          return Response.json({ message: 'Email sent' })
        } catch (err) {
          console.error('Contact form error', err)
          return Response.json({ error: 'Failed to send email' }, { status: 500 })
        }
      },
    },
  },
})
