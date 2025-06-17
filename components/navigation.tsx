"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleRequestQuote = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image src="/vitruve-logo-new.png" alt="Vitruve Groupe" fill className="object-contain" priority />
            </div>
            <div className={`font-bold text-base leading-tight ${isScrolled ? "text-gray-800" : "text-white"}`}>
              <div>VITRUVE</div>
              <div>GROUPE</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {t("home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {t("services")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {t("contact")}
            </button>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage("fr")}
                className={`text-sm font-medium transition-colors ${
                  language === "fr"
                    ? "text-blue-600"
                    : isScrolled
                      ? "text-gray-500 hover:text-blue-600"
                      : "text-gray-300 hover:text-blue-300"
                }`}
              >
                FR
              </button>
              <span className={isScrolled ? "text-gray-400" : "text-gray-300"}>|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${
                  language === "en"
                    ? "text-blue-600"
                    : isScrolled
                      ? "text-gray-500 hover:text-blue-600"
                      : "text-gray-300 hover:text-blue-300"
                }`}
              >
                EN
              </button>
            </div>

            <Button
              onClick={handleRequestQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
            >
              {t("requestQuote")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                {t("home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                {t("about")}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                {t("services")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                {t("contact")}
              </button>

              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => setLanguage("fr")}
                  className={`text-sm font-medium transition-colors ${
                    language === "fr" ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  FR
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-sm font-medium transition-colors ${
                    language === "en" ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  EN
                </button>
              </div>

              <Button
                onClick={handleRequestQuote}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-fit"
              >
                {t("requestQuote")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
