import { Link } from 'react-router-dom';
import { Bell, Users, BarChart3, FileText, Calendar } from 'lucide-react';

const features = [
  {
    title: 'Automated Reminders and Follow-Ups',
    description: 'Never miss an appointment with automatic email and SMS reminders. Keep clients engaged with smart follow-up sequences.',
    icon: Bell,
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    title: 'Group and Multi-User Scheduling',
    description: 'Schedule team meetings and group sessions effortlessly. Coordinate multiple calendars in real-time with intelligent availability detection.',
    icon: Users,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Reports and Analytics',
    description: 'Gain insights with Appointy\'s reports and analytics. Track bookings, revenue, and performance metrics in beautiful dashboards.',
    icon: BarChart3,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Customizable Booking Pages',
    description: 'Create beautiful booking pages that match your brand. Customize colors, layouts, and booking experiences.',
    icon: FileText,
    gradient: 'from-purple-600 to-blue-600'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 opacity-50"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Power Up Your Scheduling
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              with Appointy's Smart Features
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Appointy goes beyond basic booking. Our innovative features help you streamline your schedule, organize your day, and boost your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>

              <div className="mt-6 pt-6 border-t border-gray-800">
                {idx === 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Email reminders before appointments</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span>SMS notifications for urgent updates</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                      <span>Automated follow-up sequences</span>
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>One on One</span>
                    </div>
                    <div className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>Group Meeting</span>
                    </div>
                    <div className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Round Robin</span>
                    </div>
                  </div>
                )}

                {idx === 2 && (
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="flex items-end gap-2 h-32">
                      {[40, 70, 45, 85, 60, 95, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                {idx === 3 && (
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-sm text-gray-400 mb-2">New Booking Event</div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Explore More Features From Our Product</h3>
            <Link to="/view-more" className="inline-block px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:shadow-lg transition-all mt-4">
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
