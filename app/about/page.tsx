import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">About Our Agency</h1>

            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              We are a team of passionate professionals dedicated to creating exceptional digital experiences. Our
              expertise spans across web development, design, and digital marketing strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-200">
                  To deliver innovative digital solutions that help businesses grow and succeed in the modern digital
                  landscape.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-200">
                  To be the leading digital agency that transforms ideas into powerful digital experiences that drive
                  results.
                </p>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md font-medium mt-8">
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
