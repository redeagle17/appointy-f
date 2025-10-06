import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Bell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"></div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Scheduling Infrastructure
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              for everyone.
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Meet Appointy, the smart edging scheduler for everyone. Focus on meeting, not making meetings. Free for individuals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2">
              Get Started
              <span className="text-lg">→</span>
            </Link>
            <Link to="/learn-more" className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all">
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 left-1/4 w-16 h-16 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl flex items-center justify-center animate-float">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>

            <div className="absolute -top-5 right-1/4 w-16 h-16 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl flex items-center justify-center animate-float-delay-1">
              <Users className="w-8 h-8 text-purple-400" />
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-3xl p-8">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
                  <div className="bg-gray-900 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-semibold">Appointy</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    {[
                      { time: '9:00 AM', title: 'Team Standup', color: 'blue' },
                      { time: '11:30 AM', title: 'Client Meeting', color: 'purple' },
                      { time: '2:00 PM', title: 'Design Review', color: 'green' },
                      { time: '4:00 PM', title: 'Sprint Planning', color: 'orange' }
                    ].map((event, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                        <div className={`w-2 h-12 rounded-full bg-${event.color}-500`}></div>
                        <div className="flex-1">
                          <div className="text-white font-medium">{event.title}</div>
                          <div className="text-gray-400 text-sm">{event.time}</div>
                        </div>
                        <Bell className="w-5 h-5 text-gray-500" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-6">
                  <span className="text-white font-semibold text-lg">Smart. Simple.</span>
                  <div className="text-gray-400 text-sm mt-1">Scheduling Anytime</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-10 w-20 h-20 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl flex items-center justify-center animate-float-delay-2">
              <div className="text-center">
                <div className="text-white font-bold text-xl">24</div>
                <div className="text-gray-400 text-xs">Today</div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-10 w-16 h-16 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl flex items-center justify-center animate-float">
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-12 opacity-60">
          {['deel.', 'Vercel', 'Accenture', 'better.', 'Parker', 'Folio'].map((brand, idx) => (
            <div key={idx} className="text-white text-xl font-semibold">{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
