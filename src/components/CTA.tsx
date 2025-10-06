import { Link } from 'react-router-dom';
import { Calendar, Check } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Streamline Your Schedule,
              <br />
              Supercharge Your Business.
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join thousands of professionals who trust Appointy to manage their scheduling. Start free and upgrade as you grow.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Free for individuals forever',
                'No credit card required',
                'Setup in under 5 minutes',
                'Cancel anytime'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className="px-8 py-4 bg-white text-purple-700 rounded-full font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 group">
                Try For Free
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link to="/learn-more" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-xl"></div>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">Your Schedule</span>
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                      <div key={idx} className="text-center text-gray-500 text-sm font-medium">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(35)].map((_, idx) => {
                      const hasEvent = [5, 8, 12, 15, 19, 22, 26].includes(idx);
                      const isToday = idx === 13;
                      return (
                        <div
                          key={idx}
                          className={`aspect-square rounded-lg flex items-center justify-center text-sm
                            ${isToday ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold' : ''}
                            ${hasEvent && !isToday ? 'bg-blue-500/20 text-blue-300' : ''}
                            ${!hasEvent && !isToday ? 'text-gray-400 hover:bg-gray-800' : ''}
                            transition-colors cursor-pointer
                          `}
                        >
                          {idx + 1}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <div className="text-white font-semibold">24 appointments this month</div>
                  <div className="text-blue-200 text-sm">+40% from last month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
