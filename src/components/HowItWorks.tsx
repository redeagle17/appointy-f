import { Link } from 'react-router-dom';
import { Calendar, Users, Bell, CreditCard, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Set Your Appointment Types',
      description: 'Define your services, set duration, and customize booking rules. Create unlimited appointment types.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Share Your Link',
      description: 'Get a personalized booking link to share with clients. Embed it on your website or share it directly.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Bell,
      title: 'Get Automated Reminders and Follow-ups',
      description: 'Send email or SMS before appointments. Keep clients engaged with smart follow-up sequences.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Manage Appointments, Payment and More',
      description: 'View your calendar, reschedule appointments, collect payments, and access detailed reports.',
      color: 'from-purple-600 to-blue-600'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Appointy Works For You?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Provides an overview of Appointy's platform. Easily book appointments, Manage calendars, and streamline your scheduling process in three steps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent hidden lg:block"></div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl hover:scale-110 transition-transform`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 min-h-[3.5rem] flex items-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-2 text-gray-600">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-gray-900 rounded-3xl p-8">
              <div className="flex items-center justify-center">
                <div className="bg-gray-800 rounded-2xl p-6 max-w-md">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold text-lg mb-2">Smart. Simple.</h4>
                    <p className="text-gray-400">Scheduling Anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/get-started" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
