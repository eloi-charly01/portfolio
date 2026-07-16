import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(3).max(200),
  message: z.string().min(20).max(2000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    // TODO: Integrate an email service here (e.g. Resend, SendGrid, Nodemailer).
    // For now, log to server console in development.
    console.info('[Contact Form Submission]', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      messageLength: data.message.length,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Données invalides', details: error.issues },
        { status: 400 }
      )
    }
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}
