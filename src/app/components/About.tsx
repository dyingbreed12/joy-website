import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20 px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/images/Joy.jpg"
            alt="Teacher Joy"
            width={600}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Teacher Joy</h2>
          <p className="text-lg text-gray-700 mb-6">
            Hello! My name is Joy, and I&apos;m a passionate online English teacher dedicated to helping students from around the world. With over 10 years of experience, I&apos;ve had the pleasure of teaching hundreds of students from China, Japan, and Korea.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My teaching philosophy is simple: **learning should be engaging, effective, and fun.** I believe in creating a supportive and patient environment where you feel comfortable making mistakes and asking questions. My lessons are tailored to your unique goals, whether it&apos;s improving your conversational fluency, preparing for an exam, or mastering business English.
          </p>
          <p className="text-lg text-gray-700">
            Let&apos;s embark on this learning journey together and unlock your full potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;