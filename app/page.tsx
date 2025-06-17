"use client"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { TrendingUp, Users, Mail, MapPin, CheckCircle, Target, Lightbulb, Globe } from "lucide-react"
import Footer from "@/components/footer"

export default function HomePage() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openEmailClient = (type: string) => {
    const subject = type === "quote" ? "Quote Request" : type === "meeting" ? "Meeting Request" : "Contact Inquiry"
    const body = `Hello Vitruve Groupe,

I would like to request a ${type}.

Company: [Your Company Name]
Services Needed: [Describe your needs]

Best regards,
[Your Name]`

    const mailtoLink = `mailto:contact@vitruvegroupe.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: t("operationsConsulting"),
      description: t("operationsConsultingDesc"),
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t("managementConsulting"),
      description: t("managementConsultingDesc"),
    },
  ]

  const whyChooseUs = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t("totalFlexibility"),
      description: t("flexibilityDesc"),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("costSavings"),
      description: t("costSavingsDesc"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("qualifiedTeam"),
      description: t("qualifiedTeamDesc"),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t("noHRComplexity"),
      description: t("noHRComplexityDesc"),
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 animate-gradient-x" />

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              {t("heroSlogan")}
            </h1>

            <p className="text-gray-200 text-xl mb-12 leading-relaxed max-w-3xl animate-fade-in-up animation-delay-300">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-600">
              <Button
                onClick={() => openEmailClient("meeting")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-md font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t("bookMeeting")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("aboutTitle")}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{t("whoWeAre")}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{t("aboutDescription")}</p>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{t("ourMission")}</h4>
                  <p className="text-gray-600 leading-relaxed">{t("missionText")}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{t("ourValues")}</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      {t("excellenceService")}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      {t("transparentCollaboration")}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      {t("technicalExpertise")}
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <Globe className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="font-semibold text-gray-800">{t("languagesSpoken")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("servicesTitle")}</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t("servicesDescription")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-lift group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">{t("whyChooseTitle")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover-lift group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("contactTitle")}</h2>
              <p className="text-gray-200 text-lg">{t("contactDescription")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Buttons */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("sendMessage")}</h3>

                <div className="space-y-4">
                  <Button
                    onClick={() => openEmailClient("quote")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full"
                  >
                    {t("requestQuote")}
                  </Button>

                  <Button
                    onClick={() => openEmailClient("meeting")}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 w-full"
                  >
                    {t("bookMeeting")}
                  </Button>

                  <Button
                    onClick={() => openEmailClient("contact")}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 w-full"
                  >
                    {t("sendMessage")}
                  </Button>
                </div>

                <p className="text-gray-300 text-sm mt-6 text-center">
                  {t("language") === "fr"
                    ? "Cliquez pour ouvrir votre client email"
                    : "Click to open your email client"}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-300" />
                    <div>
                      <h4 className="text-white font-semibold">{t("email")}</h4>
                      <p className="text-gray-200">contact@vitruvegroupe.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <Globe className="w-6 h-6 text-blue-300" />
                    <div>
                      <h4 className="text-white font-semibold">{t("website")}</h4>
                      <p className="text-gray-200">www.vitruvegroupe.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-300" />
                    <div>
                      <h4 className="text-white font-semibold">{t("address")}</h4>
                      <p className="text-gray-200">{t("basedInTunisia")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
