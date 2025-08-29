import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Teacher Ada's lessons are incredibly helpful and fun! My confidence in speaking English has grown so much. The lessons are always tailored to my interests, making it easy to stay motivated.",
    name: 'Lin T.',
    country: 'China',
  },
  {
    quote: "I passed my TOEIC exam thanks to Teacher Ada's patient and clear explanations. She provided me with the perfect strategies and practice I needed. Highly recommend her!",
    name: 'Kenji S.',
    country: 'Japan',
  },
  {
    quote: "I've been learning with Ada for over a year, and my business English has improved tremendously. Her feedback is always precise and actionable, which is exactly what I needed.",
    name: 'Min-ji P.',
    country: 'Korea',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What My Students Say</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from my students about their experience and progress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center">
              <FaQuoteLeft size={36} className="text-teal-500 mb-4" />
              {/* Corrected quotes here */}
              <p className="text-gray-700 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <div className="text-center mt-auto">
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;