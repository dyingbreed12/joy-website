import { FaComment, FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaComment size={48} className="text-teal-500 mb-4" />,
    title: 'Conversational English',
    description: 'Build confidence and fluency through natural, guided conversations on a wide range of topics.',
  },
  {
    icon: <FaBriefcase size={48} className="text-teal-500 mb-4" />,
    title: 'Business English',
    description: 'Perfect your professional communication skills for meetings, presentations, and corporate environments.',
  },
  {
    icon: <FaGraduationCap size={48} className="text-teal-500 mb-4" />,
    title: 'Exam Preparation',
    description: 'Prepare effectively for standardized tests like TOEFL and TOEIC with focused strategies and practice.',
  },
  {
    icon: <FaTools size={48} className="text-teal-500 mb-4" />,
    title: 'Customized Lessons',
    description: 'Receive a personalized curriculum designed specifically to meet your unique learning goals and pace.',
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