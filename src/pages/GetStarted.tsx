import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Check, Zap, Shield, Clock } from 'lucide-react';

export default function GetStarted() {
  const steps = [
    {
      number: 1,
      title: 'Create Your Account',
      description: 'Sign up for free in under 2 minutes. No credit card required.',
      icon: Calendar
    },
    {
      number: 2,
      title: 'Set Up Your Schedule',
      description: 'Define your availability, services, and booking preferences.',
      icon: Clock
    },
    {
      number: 3,
      title: 'Share Your Link',
      description: 'Get your personalized booking link and start accepting appointments.',
      icon: Zap
    }
  ];

  const features = [
    'Unlimited appointments',
    'Email & SMS reminders',
    'Calendar integrations',
    'Custom booking pages',
    'Analytics dashboard',
    'Mobile app access',
    'Priority support',
    '99.9% uptime guarantee'
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                Start Your Journey
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Started with
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Appointy Today
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of professionals who use Appointy to streamline their scheduling. Setup takes less than 5 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-gray-400 mb-8">
                Get access to all premium features from day one. No hidden fees, no surprises.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1">
              <div className="bg-gray-900 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Choose Your Plan
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-xl p-6 border-2 border-blue-500">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">Free</h4>
                        <p className="text-gray-400 text-sm">Perfect for individuals</p>
                      </div>
                      <div className="text-3xl font-bold text-white">$0</div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all">
                      Start Free
                    </button>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">Pro</h4>
                        <p className="text-gray-400 text-sm">For growing businesses</p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">$29</div>
                        <div className="text-gray-400 text-xs">/month</div>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-all">
                      Upgrade to Pro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Your Data is Safe with Us
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use industry-standard encryption and security practices to protect your data.
              GDPR compliant and SOC 2 certified.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
