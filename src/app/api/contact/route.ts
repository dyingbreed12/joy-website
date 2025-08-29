// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = 'hadassahj2@gmail.com'; // Teacher Ada's email!

export async function POST(request: Request) {
  try {
    const { name, email, country, message } = await request.json();

    // Check if all fields are present
    if (!name || !email || !country || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    // Send the email using Resend
    await resend.emails.send({
      from: 'Teacher Ada <teacherjoy.com>', // Use a domain you've verified with Resend
      to: recipientEmail, 
      subject: `New Message from Teacher Ada Website - ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #00796B;">New Contact Form Submission</h2>
          <p>You have received a new message from your website contact form.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 10px; background-color: #f7f7f7; border-left: 3px solid #00796B;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}