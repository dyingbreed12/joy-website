import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20 px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/images/Ada.jpg"
            alt="Teacher Ada"
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Teacher Ada</h2>
          <p className="text-lg text-gray-700 mb-6">
            Hi! I'm Ada, an English educator with over <strong>5 years of experience</strong> helping students around the globe build confidence. My teaching is all about creating a relaxed, friendly environment where every student feels comfortable. I've had the pleasure of teaching hundreds of learners from a variety of backgrounds, including <strong>China, Japan, South Korea, Mongolia, and Saudi Arabia.</strong>
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My approach is simple: I adapt to you. Whether you're a child needing an engaging, playful lesson or a professional requiring focused exam preparation, I tailor my style to match your personality and goals. I believe a good lesson is one where we both feel comfortable and can easily communicate.
          </p>
          <p className="text-lg text-gray-700">
            Let's connect and begin your journey to fluency in a way that works best for you. I look forward to working together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;