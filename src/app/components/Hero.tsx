const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen text-center p-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
          filter: 'blur(4px) brightness(0.9)',
          transform: 'scale(1.1)'
        }}
      ></div>

      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Unlock Your English Potential.
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto drop-shadow-md">
          Personalized English lessons for Chinese, Japanese, and Korean students.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block px-10 py-5 bg-teal-500 text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 transition-transform duration-300 transform hover:scale-105"
        >
          Book a Trial Lesson
        </a>
      </div>
    </section>
  );
};

export default Hero;