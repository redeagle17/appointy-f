import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Appointy has been a game changer for my business. I can now focus on serving my clients instead of managing schedules. The automated reminders have reduced no-shows significantly.",
      author: "Sarah Mitchell",
      role: "Wellness Coach",
      rating: 5
    },
    {
      text: "The group scheduling feature is incredible. Coordinating team meetings used to take hours, now it takes minutes. The analytics help us understand our booking patterns better.",
      author: "Michael Chen",
      role: "Team Manager",
      rating: 5
    },
    {
      text: "I love how customizable the booking pages are. They match our brand perfectly and our clients find them incredibly easy to use. Best scheduling tool we've used.",
      author: "Jessica Taylor",
      role: "Salon Owner",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hear What Happy
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Appointy Users are Saying
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real people, real results. See how Appointy is helping businesses like yours thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2 duration-300"
              style={{
                transform: `rotate(${idx % 2 === 0 ? '-' : ''}1deg)`,
              }}
            >
              <Quote className="w-10 h-10 text-blue-500 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
