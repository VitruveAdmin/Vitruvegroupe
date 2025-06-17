import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Code, Palette, TrendingUp, Smartphone } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive designs that enhance user experience.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to grow your online presence.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-blue-800/80" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Our Services</h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className="text-blue-300 mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md font-medium">
              REQUEST QUOTE
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
