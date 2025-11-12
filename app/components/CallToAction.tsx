export default function CallToAction() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Win Your Campaign?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
          Let&apos;s discuss how we can help you achieve your goals and deliver the results you need
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-primary-dark px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
}
