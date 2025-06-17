"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">{t("copyright")}</div>

          <div className="flex items-center space-x-6 text-sm">
            <span>contact@vitruvegroupe.com</span>
            <span>•</span>
            <span>www.vitruvegroupe.com</span>
          </div>

          <div className="text-sm">{t("basedInTunisia")}</div>
        </div>
      </div>
    </footer>
  )
}
