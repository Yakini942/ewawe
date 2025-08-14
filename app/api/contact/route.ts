import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: 'y.beni@gmail.com',
      subject: `New message from ${fullName}`,
      html: `<p>${message}</p><p>From: ${email}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
