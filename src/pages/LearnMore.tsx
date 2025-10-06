import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Users, Bell, BarChart3, Globe, Shield, Smartphone, Zap, CheckCircle, Star } from 'lucide-react';

export default function LearnMore() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent calendar management that syncs across all your devices and platforms in real-time.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Bell,
      title: 'Automated Reminders',
      description: 'Reduce no-shows by up to 80% with SMS and email reminders sent automatically.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Coordinate multiple team members, manage group bookings, and share calendars seamlessly.',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track bookings, revenue, and customer trends with comprehensive reporting tools.',
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Support for multiple languages, time zones, and currencies to serve clients worldwide.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, GDPR compliance, and SOC 2 certification for peace of mind.',
      color: 'from-gray-600 to-gray-800'
    }
  ];

  const benefits = [
    'Save 10+ hours per week on scheduling',
    'Increase bookings by up to 30%',
    'Reduce no-shows by 80%',
    'Improve customer satisfaction',
    'Automate follow-ups and marketing',
    'Access from anywhere, anytime'
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '1M+', label: 'Appointments Booked' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.9/5', label: 'User Rating' }
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
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Appointy?
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The most powerful scheduling platform trusted by professionals worldwide.
              Discover how Appointy can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Powerful Features for Every Need
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
                <Zap className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
                <p className="text-blue-100">
                  Book appointments in seconds with our intuitive interface. No training required.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8">
                <Smartphone className="w-12 h-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Mobile First</h3>
                <p className="text-purple-100">
                  Manage your schedule on the go with our native iOS and Android apps.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1">
            <div className="bg-gray-900 rounded-3xl p-12 text-center">
              <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have already transformed their scheduling with Appointy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-started"
                  className="px-8 py-4 bg-white text-purple-700 rounded-full font-semibold hover:shadow-2xl transition-all"
                >
                  Start Free Trial
                </Link>
                <a
                  href="#"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
