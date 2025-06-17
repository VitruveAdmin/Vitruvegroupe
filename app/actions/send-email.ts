"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const services = formData.get("services") as string
    const message = formData.get("message") as string
    const type = formData.get("type") as string

    // Validate required fields
    if (!name || !company || !email || !services || !message) {
      return { success: false, message: "All fields are required." }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." }
    }

    const emailSubject =
      type === "quote"
        ? "New Quote Request from Website"
        : type === "meeting"
          ? "New Meeting Request from Website"
          : "New Contact Message from Website"

    const { data, error } = await resend.emails.send({
      from: "website@vitruvegroupe.com", // You'll need to verify this domain with Resend
      to: "contact@vitruvegroupe.com",
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New ${type} Request</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Services Needed:</strong> ${services}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Vitruve Groupe website contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, message: "Failed to send email. Please try again." }
    }

    return {
      success: true,
      message: "Your message has been sent successfully! We will contact you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "An error occurred while sending your message. Please try again.",
    }
  }
}
