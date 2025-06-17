"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { CheckCircle } from "lucide-react"

export default function ContactFormEmailJS() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      services: formData.get("services"),
      message: formData.get("message"),
    }

    try {
      // Using EmailJS - you need to set up an account at emailjs.com
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
          template_id: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          user_id: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
          template_params: {
            to_email: "contact@vitruvegroupe.com",
            from_name: data.name,
            from_email: data.email,
            company: data.company,
            services: data.services,
            message: data.message,
          },
        }),
      })

      if (response.ok) {
        setShowSuccess(true)
        e.currentTarget.reset()
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white mb-6">{t("sendMessage")}</h3>

      {showSuccess && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
            <p className="text-green-100">{t("messageSent")}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          name="name"
          placeholder={t("yourName")}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
        />
        <Input
          name="company"
          placeholder={t("yourCompany")}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
        />
        <Input
          name="email"
          type="email"
          placeholder={t("yourEmail")}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
        />
        <Input
          name="services"
          placeholder={t("servicesNeeded")}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
        />
        <Textarea
          name="message"
          placeholder={t("yourMessage")}
          rows={5}
          required
          className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full disabled:opacity-50"
        >
          {isLoading ? t("sending") : t("sendMessageBtn")}
        </Button>

        {error && (
          <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}
      </form>
    </div>
  )
}
