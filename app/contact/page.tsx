import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Contact Us</h1>
              <p className="text-gray-200 text-lg">Ready to start your project? Get in touch with us today.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full">SEND MESSAGE</Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-300" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-200">hello@digitalagency.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-300" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-200">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-300" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-200">123 Business St, City, State 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
