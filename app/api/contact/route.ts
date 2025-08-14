import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler( 
  req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER, // always send from your Gmail
      replyTo: email,               // reply-to is the user's email
      to: process.env.GMAIL_USER,   // where you want to receive it
      subject: `Contact Form Message from ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Email sending failed' });
  }
}
