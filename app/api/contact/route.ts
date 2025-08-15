import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Add your secret key from environment variables
    const access_key = process.env.WEB3FORMS_ACCESS_KEY;
    if (!access_key) {
      return NextResponse.json({ error: 'Missing access key' }, { status: 500 });
    }

    // Prepare payload for Web3Forms
    const payload = {
      ...body,
      access_key,
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data.message }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
