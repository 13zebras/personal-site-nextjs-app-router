import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

// https://nodemailer.com/message/
// Server:  smtp.fastmail.com
// Port:  465
// SSL/TLS Encryption:  Enabled, but not STARTTLS
// Authentication:  PLAIN

const transporter = nodemailer.createTransport({
  host: 'smtp.fastmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.FASTMAIL_EMAIL,
    pass: process.env.FASTMAIL_PASSWORD,
  },
})

async function verifyTurnstile(token: string): Promise<boolean> {
  const params = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY!,
    response: token,
    remoteip: '',
  })

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })

  const data = await res.json()
  return data.success as boolean
}

export async function POST(request: NextRequest) {
  const { email, name, message, token } = await request.json()

  if (!token) return NextResponse.json({ error: 'Missing Turnstile token' }, { status: 403 })

  const mailOptions: Mail.Options = {
    from: email,
    to: 'contact13z.dev@13z.foo',
    subject: 'RECEIVED: 13z.dev ContactForm',
    text: `from: ${name}\nemail: ${email}\nmessage: ${message}`,
  }

  try {
    const ok = await verifyTurnstile(token)
    if (!ok) return NextResponse.json({ error: 'Turnstile verification failed' }, { status: 403 })

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Failed to send email' }, { status: 500 })
  }
}
