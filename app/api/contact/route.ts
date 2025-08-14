import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, message, phone } = await req.json();

    await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: 'y.beni@gmail.com',
      subject: `New message from ${fullName}`,
      html: `<p>${message}</p><p>From: ${email}</p><p>Phone: ${phone}</p>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
