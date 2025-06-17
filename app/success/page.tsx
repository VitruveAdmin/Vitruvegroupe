"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t, language } = useLanguage()
  const [countdown, setCountdown] = useState(5)

  const type = searchParams.get("type") || "contact"

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const getSuccessMessage = () => {
    switch (type) {
      case "quote":
        return language === "fr"
          ? "Votre demande de devis a été envoyée avec succès!"
          : "Your quote request has been sent successfully!"
      case "meeting":
        return language === "fr"
          ? "Votre demande de réunion a été envoyée avec succès!"
          : "Your meeting request has been sent successfully!"
      default:
        return language === "fr"
          ? "Votre message a été envoyé avec succès!"
          : "Your message has been sent successfully!"
    }
  }

  const getFollowUpMessage = () => {
    return language === "fr"
      ? "Nous vous contacterons dans les plus brefs délais."
      : "We will contact you as soon as possible."
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 text-center max-w-md mx-4">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />

        <h1 className="text-2xl font-bold text-white mb-4">
          {language === "fr" ? "Message Envoyé!" : "Message Sent!"}
        </h1>

        <p className="text-gray-200 mb-4">{getSuccessMessage()}</p>

        <p className="text-gray-300 text-sm mb-8">{getFollowUpMessage()}</p>

        <div className="space-y-4">
          <Button
            onClick={() => router.push("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full"
          >
            {language === "fr" ? "Retour à l'accueil" : "Back to Home"}
          </Button>

          <p className="text-gray-400 text-sm">
            {language === "fr"
              ? `Redirection automatique dans ${countdown} secondes...`
              : `Automatic redirect in ${countdown} seconds...`}
          </p>
        </div>
      </div>
    </div>
  )
}
