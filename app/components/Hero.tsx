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
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Push the Needle
            </h1>

          <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in-delay">
            Data-driven political campaigning to get you across the finish line
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
            <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-delay-4">
              <p className="text-sm uppercase tracking-wide text-white/70 mb-3">Authorized Partner</p>
              <a
                href="https://www.justcanvass.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-2xl font-bold text-white hover:text-white/80 transition-colors"
              >
                Just Canvass
              </a>
              <p className="text-white/70 mt-2">
                Providing powerful digital canvassing solutions for campaigns across Canada
              </p>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="phone-mockup-container flex justify-center md:justify-end">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-screen">
                  <img src="/images/phone-demo.png" alt="Campaign management dashboard" />
                </div>
              </div>
            </div>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        .phone-mockup {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: float 6s ease-in-out infinite;
        }

        .phone-frame {
          position: relative;
          width: 280px;
          height: 560px;
          background-color: #111111;
          border-radius: 36px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          padding: 12px;
          border: 1px solid #333333;
        }

        .phone-frame::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 24px;
          background-color: #111111;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          z-index: 2;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }

        .phone-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          padding: 12px;
          border-radius: 24px;
        }
      `}</style>
    </section>
  );
}
