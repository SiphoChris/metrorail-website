function HeroSection() {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-6 mb-6">
          <img
            src="/metrorail-logo.png"
            alt="Metrorail Logo"
            className="hidden md:w-32"
          />
          <h1 className="text-3xl md:text-7xl font-black text-white [tracking:-0.08em]">
            <span className="text-gray-300">METRORAIL</span>{' '}
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              TRAINS
            </span>
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          Taking you places, one stop at a time.
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Commuter rail service connecting the heart of the city to its vibrant suburbs. Fast, reliable, and eco-friendly transportation for all.
        </p>
        <p className="mt-8 text-sm text-gray-400">
          Metrorail &mdash; a PRASA division.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
