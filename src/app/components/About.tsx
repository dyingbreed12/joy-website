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
            Personalized English lessons for learners worldwide, 
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Over 5 years of experience.
          </p>
          <p className="text-lg text-gray-700">
            Hundreds of students from China, Japan, South Korea, Mongolia, and Saudi Arabia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;