export default function LogoMarquee() {
  // List of campaign logos - add any image filename here
  // Add any image file (png, jpg, jpeg, svg) to public/images/campaigns/ and add the filename here
  const campaignLogos = [
    'jon-morgan.png',
    'NathanIP.png',
    'Battiste Dark Transparent.png',
    'shariffhaji.png',
    'rhiannonhoyle.png',
    'tribal-nations.png',
    'colettebachand.png',
  ];

  // Create campaign objects - one element per campaign
  const campaigns = campaignLogos.map(logo => ({
    name: logo.replace(/\.(png|jpg|jpeg|svg)$/i, ''),
    logo: `/images/campaigns/${logo}`
  }));

  return (
    <section className="pt-16 pb-0 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Past Clients
          </h2>
          <p className="text-xl text-gray-600">
            Nominations, Referendums, and General Elections across Canada
          </p>
        </div>

        {/* Marquee wrapper with fade edges */}
        <div className="marquee-wrapper">
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>

          {/* Desktop: Single row - scrolls left */}
          <div className="marquee-content hidden md:block">
            <div className="marquee-track">
              {/* Duplicate the logos twice for seamless loop */}
              {[...campaigns, ...campaigns].map((campaign, index) => (
                <div
                  key={index}
                  className={`marquee-item ${campaign.name === 'jon-morgan' ? 'marquee-item-blue' : ''} ${campaign.name === 'shariffhaji' ? 'marquee-item-orange' : ''}`}
                >
                  <img
                    src={campaign.logo}
                    alt={campaign.name}
                    className="campaign-logo"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Two rows - both scroll left */}
          <div className="md:hidden">
            {/* First row */}
            <div className="marquee-content">
              <div className="marquee-track">
                {[...campaigns.slice(0, Math.ceil(campaigns.length / 2)), ...campaigns.slice(0, Math.ceil(campaigns.length / 2))].map((campaign, index) => (
                  <div
                    key={index}
                    className={`marquee-item ${campaign.name === 'jon-morgan' ? 'marquee-item-blue' : ''} ${campaign.name === 'shariffhaji' ? 'marquee-item-orange' : ''}`}
                  >
                    <img
                      src={campaign.logo}
                      alt={campaign.name}
                      className="campaign-logo"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second row */}
            <div className="marquee-content">
              <div className="marquee-track">
                {[...campaigns.slice(Math.ceil(campaigns.length / 2)), ...campaigns.slice(Math.ceil(campaigns.length / 2))].map((campaign, index) => (
                  <div
                    key={index}
                    className={`marquee-item ${campaign.name === 'jon-morgan' ? 'marquee-item-blue' : ''} ${campaign.name === 'shariffhaji' ? 'marquee-item-orange' : ''}`}
                  >
                    <img
                      src={campaign.logo}
                      alt={campaign.name}
                      className="campaign-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        /* Fade overlays for smooth edges */
        .marquee-fade-left,
        .marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 10;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        .marquee-content {
          display: flex;
          margin-bottom: 32px;
        }

        .marquee-content:last-child {
          margin-bottom: 0;
        }

        .marquee-track {
          display: flex;
          gap: 32px;
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }

        .marquee-reverse .marquee-track {
          animation: scroll-right 40s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          height: 90px;
          padding: 12px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .marquee-item {
            min-width: 250px;
            height: 140px;
            padding: 20px;
          }
        }

        .marquee-item:hover {
          background-color: #f8f8f8;
        }

        .marquee-item-blue:hover {
          background-color: #e3f2fd;
        }

        .marquee-item-orange:hover {
          background-color: #fff3e0;
        }

        .campaign-logo {
          max-width: 150px;
          max-height: 70px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(80%) contrast(1.2);
          opacity: 0.75;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .campaign-logo {
            max-width: 250px;
            max-height: 120px;
          }
        }

        .campaign-logo:hover {
          filter: grayscale(0%) contrast(1);
          opacity: 1;
          transform: scale(1.05);
        }

        /* Pause animation on hover */
        .marquee-content:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
