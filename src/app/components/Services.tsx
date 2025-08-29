import { FaChild, FaUserGraduate, FaBook, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const services = [
  {
    icon: <FaChild size={48} className="text-teal-500 mb-4" />,
    title: 'English for Kids & Teens',
    description: 'Engaging, fun, and patient lessons designed for young learners to build a strong foundation in English.',
  },
  {
    icon: <FaUserGraduate size={48} className="text-teal-500 mb-4" />,
    title: 'General English for Adults',
    description: 'Improve your conversational fluency, vocabulary, and grammar for everyday use in a supportive environment.',
  },
  {
    icon: <FaGraduationCap size={48} className="text-teal-500 mb-4" />,
    title: 'IELTS & Exam Preparation',
    description: 'Achieve your target score with expert strategies and focused practice for the speaking, listening, reading, and writing sections.',
  },
  {
    icon: <FaBriefcase size={48} className="text-teal-500 mb-4" />,
    title: 'Business & Professional English',
    description: 'Master the language of the workplace with lessons focused on professional communication, presentations, and interviews.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">My Teaching Services</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I offer a range of personalized lessons to help you achieve your specific English learning goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;