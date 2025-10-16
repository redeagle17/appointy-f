import { Link } from 'react-router-dom';
import { Zap, Chrome, Calendar } from 'lucide-react';
import { GoogleCalendarLogo, OutlookLogo, ZoomLogo } from './BrandLogos';

export default function Integration() {
  const integrations = [
    { name: 'Google Calendar', icon: GoogleCalendarLogo },
    { name: 'Microsoft Outlook', icon: OutlookLogo },
    { name: 'Zoom', icon: ZoomLogo },
    { name: 'Zapier', icon: Zap },
    { name: 'Chrome', icon: Chrome }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect with Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Favorite Apps
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Integrate seamlessly with Google Calendar, Outlook, Zoom, and other tools to streamline your workflow and boost productivity.
            </p>
            <Link to="/integrations" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2">
              Explore Integrations
              <span className="text-lg">→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <Calendar className="w-16 h-16 text-white" />
              </div>

              {integrations.map((integration, idx) => {
                const angle = (idx * 360) / integrations.length;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={idx}
                    className="absolute top-1/2 left-1/2 w-20 h-20 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-float"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${idx * 0.2}s`
                    }}
                  >
                    {typeof integration.icon === 'function' ? (
                      <integration.icon className="w-10 h-10" />
                    ) : (
                      <Calendar className="w-10 h-10 text-blue-400" />
                    )}
                  </div>
                );
              })}

              {integrations.map((_, idx) => {
                const angle = (idx * 360) / integrations.length;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={`line-${idx}`}
                    className="absolute top-1/2 left-1/2 w-px h-px"
                    style={{
                      transform: `translate(calc(-50% + ${x / 2}px), calc(-50% + ${y / 2}px))`
                    }}
                  >
                    <div
                      className="w-0.5 bg-gradient-to-b from-blue-500/40 to-transparent"
                      style={{
                        height: `${radius / 2}px`,
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'top'
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
