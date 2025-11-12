export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Pushing the Needle
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in-delay">
            Moving campaigns forward with strategic digital marketing, voter contact, and training services
          </p>

          <p className="text-lg md:text-xl mb-10 text-white/80 animate-fade-in-delay-2">
            Empowering candidates and campaigns across Canada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <button
              onClick={scrollToContact}
              className="bg-white text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let&apos;s Work Together
            </button>

            <button
              onClick={scrollToServices}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </button>
          </div>

          {/* Trust badge - JustCanvass Partnership */}
          <div className="mt-16 pt-16 border-t border-white/20 animate-fade-in-delay-4">
            <p className="text-sm uppercase tracking-wide text-white/70 mb-3">Authorized Partner</p>
            <a
              href="https://www.justcanvass.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl font-bold text-white hover:text-white/80 transition-colors"
            >
              JustCanvass
            </a>
            <p className="text-white/70 mt-2 max-w-2xl mx-auto">
              Providing powerful digital canvassing solutions for campaigns across Canada
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
}
