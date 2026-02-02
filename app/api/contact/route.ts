import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().optional(),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

export type ContactFormData = z.infer<typeof contactSchema>

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data = result.data

    const from = process.env.RESEND_FROM ?? "TAFC <sales@tafc.tn>"
    const to = process.env.TAFC_TEST_EMAIL

    if (!process.env.RESEND_API_KEY || !from || !to) {
      return NextResponse.json(
        { success: false, error: "Server misconfigured (missing env vars)" },
        { status: 500 }
      )
    }

    // Send email with Resend
    const response = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `TAFC | Nouveau message - ${data.name}`,
      text: `Nouveau message TAFC

Nom: ${data.name}
Société: ${data.company || "N/A"}
Email: ${data.email}
Téléphone: ${data.phone || "N/A"}

Message:
${data.message}
`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;line-height:1.6;color:#0f172a">
          <div style="max-width:640px;margin:0 auto;padding:20px">
            <h2>Nouveau message (TAFC)</h2>

            <table style="width:100%;border-collapse:collapse;margin:16px 0">
              <tr>
                <td style="padding:6px 0;color:#64748b;width:120px">Nom</td>
                <td><b>${escapeHtml(data.name)}</b></td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#64748b">Société</td>
                <td>${escapeHtml(data.company || "N/A")}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#64748b">Email</td>
                <td>${escapeHtml(data.email)}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#64748b">Téléphone</td>
                <td>${escapeHtml(data.phone || "N/A")}</td>
              </tr>
            </table>

            <div style="border:1px solid #e2e8f0;border-radius:10px;padding:14px;background:#f8fafc">
              <div style="color:#64748b;font-size:12px;margin-bottom:6px">Message</div>
              <div style="white-space:pre-wrap">${escapeHtml(data.message)}</div>
            </div>

            <p style="margin-top:16px;color:#64748b;font-size:12px">
              Reçu le ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    })

    // REAL error from Resend
    if (response.error) {
      console.error("RESEND ERROR:", response.error)
      return NextResponse.json(
        {
          success: false,
          error: response.error.message,
          details: response.error,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
