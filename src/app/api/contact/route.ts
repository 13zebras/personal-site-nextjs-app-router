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
    // biome-ignore lint/style/noNonNullAssertion: guaranteed non-null because value IS in the .env.local file
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

  if (!token) return NextResponse.json({ ok: false }, { status: 403 })

  const mailOptions: Mail.Options = {
    from: email,
    to: 'contact13z.dev@13z.foo',
    subject: 'RECEIVED: 13z.dev ContactForm',
    text: `from: ${name}\nemail: ${email}\nmessage: ${message}`,
  }

  // const sendMailPromise = () =>
  //   new Promise<string>((resolve, reject) => {
  //     transporter.sendMail(mailOptions, (err) => {
  //       // console.log('>>>> transporter in promise')
  //       if (!err) resolve("Email sent")
  //       else reject(err.message)
  //     })
  //   })

  try {
    const ok = await verifyTurnstile(token)
    if (!ok) return NextResponse.json({ ok: false }, { status: 403 })

    await transporter.sendMail(mailOptions)
    // await sendMailPromise()
    // console.log('>>>> sendMailPromise returned\n****************\n\n')

    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    // console.log('>>>> sendMailPromise error', err, '\n****************\n\n')

    return NextResponse.json({ error: err }, { status: 500 })
  }
}
