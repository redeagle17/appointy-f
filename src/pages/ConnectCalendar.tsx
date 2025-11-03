import { Link } from 'react-router-dom';
import { Calendar, Check, Clock } from 'lucide-react';
import { GoogleCalendarLogo, OutlookLogo, ZoomLogo } from '../components/BrandLogos';

export default function ConnectCalendar() {
  const providers = [
    {
      name: 'Google Calendar',
      description: 'Connect your Google account to sync events and availability.',
      actionText: 'Connect Google',
      href: 'http://localhost:3000/api/auth/google',
      icon: GoogleCalendarLogo,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Microsoft Outlook',
      description: 'Sync with Outlook Calendar for seamless scheduling.',
      actionText: 'Connect Outlook',
      href: '#',
      icon: OutlookLogo,
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      name: 'Zoom',
      description: 'Auto-create meeting links for virtual appointments.',
      actionText: 'Connect Zoom',
      href: '#',
      icon: ZoomLogo,
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Appointy</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                Final step
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Connect your calendar
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sync your availability and let Appointy schedule around your real-time events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {providers.map((p, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-4`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                <a
                  href={p.href}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-all"
                >
                  {p.actionText}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <Clock className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-white mb-2">Skip for now</h2>
            <p className="text-gray-400 mb-4">You can connect your calendar anytime from settings.</p>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              onClick={() => {
                try {
                  localStorage.removeItem('postSignup');
                } catch {}
              }}
            >
              Continue to App
              <span className="text-lg">→</span>
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Check className="w-4 h-4 text-green-400" />
            You’ll get the best experience when a calendar is connected.
          </div>
        </div>
      </main>
    </div>
  );
}


