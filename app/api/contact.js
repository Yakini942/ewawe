import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phone, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER, // your Gmail
          pass: process.env.GMAIL_PASS, // app password
        },
      });

      await transporter.sendMail({
        from: email,
        to: process.env.GMAIL_USER,
        subject: `Contact Form Message from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Email sending failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
