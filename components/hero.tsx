import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-blue-800/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl">
          <p className="text-blue-200 text-sm md:text-base mb-4 font-medium">Fastest And Most Lightweight WP Theme</p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Create Amazing
            <br />
            Business Websites
          </h1>

          <p className="text-gray-200 text-lg mb-8 leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo
            augue. Morbi fringilla congue libero, ac malesuada vulputate pharetra.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md font-medium">
            BOOK A MEETING
          </Button>
        </div>
      </div>
    </section>
  )
}
