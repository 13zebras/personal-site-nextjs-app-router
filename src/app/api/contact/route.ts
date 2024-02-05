import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

// https://nodemailer.com/message/
// Server:	smtp.fastmail.com
// Port:	465
// SSL/TLS Encryption:	Enabled, but not STARTTLS
// Authentication:	PLAIN

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.fastmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.FASTMAIL_EMAIL,
      pass: process.env.FASTMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.FASTMAIL_EMAIL,
    to: 'contact13z.dev@13z.foo',
    subject: 'RECEIVED: 13z.dev ContactForm',
    text: `from: ${name}\nemail: ${email}\nmessage: ${message}`,
  };

  console.log('>>>> mailOptions', mailOptions)

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        console.log('>>>> transporter in promise')
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    console.log('>>>> sendMailPromise returned')
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.log('>>>> sendMailPromise error', err)
    return NextResponse.json({ error: err }, { status: 500 });
  }
}