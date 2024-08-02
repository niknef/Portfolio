import { Resend } from 'resend';

const resend = new Resend('re_2oKUKr3Z_8B5Hx5rrMMxhSHJ3Xi8At5vP');  // Reemplaza 'YOUR_API_KEY' con tu clave de API de Resend

interface EmailData {
  to: string;
  from: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, from, subject, html }: EmailData) {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error(error.message);
    }

    console.log('Email sent successfully:', data);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
