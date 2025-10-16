import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Zap, Clock, Globe, MessageSquare, CreditCard, FileText, Database, Mail } from 'lucide-react';
import { GoogleCalendarLogo, OutlookLogo, ZoomLogo, GoogleMeetLogo } from '../components/BrandLogos';

export default function Integrations() {
  const integrations = [
    {
      name: 'Google Calendar',
      icon: GoogleCalendarLogo,
      description: 'Sync appointments with Google Calendar in real-time. Two-way sync ensures you never miss a booking.',
      color: 'from-blue-600 to-blue-400',
      category: 'Calendar'
    },
    {
      name: 'Microsoft Outlook',
      icon: OutlookLogo,
      description: 'Connect with Outlook Calendar and email to manage all your appointments in one place.',
      color: 'from-cyan-600 to-blue-600',
      category: 'Calendar'
    },
    {
      name: 'Zoom',
      icon: ZoomLogo,
      description: 'Automatically create Zoom meeting links for virtual appointments. Seamless video conferencing.',
      color: 'from-purple-600 to-blue-600',
      category: 'Video'
    },
    {
      name: 'Google Meet',
      icon: GoogleMeetLogo,
      description: 'Generate Google Meet links automatically for all your online meetings and consultations.',
      color: 'from-green-600 to-teal-600',
      category: 'Video'
    },
    {
      name: 'Zapier',
      icon: Zap,
      description: 'Connect Appointy with 5000+ apps. Automate workflows and sync data across platforms.',
      color: 'from-orange-600 to-red-600',
      category: 'Automation'
    },
    {
      name: 'Stripe',
      icon: CreditCard,
      description: 'Accept payments online with Stripe. Process credit cards, subscriptions, and invoices.',
      color: 'from-purple-600 to-pink-600',
      category: 'Payment'
    },
    {
      name: 'PayPal',
      icon: CreditCard,
      description: 'Enable PayPal payments for your appointments. Quick and secure checkout experience.',
      color: 'from-blue-600 to-cyan-600',
      category: 'Payment'
    },
    {
      name: 'Slack',
      icon: MessageSquare,
      description: 'Get instant notifications in Slack when new appointments are booked or cancelled.',
      color: 'from-purple-600 to-pink-600',
      category: 'Communication'
    },
    {
      name: 'WordPress',
      icon: Globe,
      description: 'Embed booking widgets on your WordPress site. Seamless integration with your website.',
      color: 'from-blue-600 to-purple-600',
      category: 'Website'
    },
    {
      name: 'Mailchimp',
      icon: Mail,
      description: 'Sync contacts with Mailchimp automatically. Build marketing campaigns from your client list.',
      color: 'from-yellow-600 to-orange-600',
      category: 'Marketing'
    },
    {
      name: 'HubSpot',
      icon: Database,
      description: 'Connect your CRM with Appointy. Sync contacts, deals, and appointment data.',
      color: 'from-orange-600 to-red-600',
      category: 'CRM'
    },
    {
      name: 'Salesforce',
      icon: Database,
      description: 'Enterprise CRM integration for managing customer relationships and appointments.',
      color: 'from-cyan-600 to-blue-600',
      category: 'CRM'
    }
  ];

  const categories = ['All', 'Calendar', 'Video', 'Payment', 'Automation', 'Communication', 'CRM'];

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
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                Connect Everything
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Integrate with Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Favorite Tools
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect Appointy with the apps you already use. Streamline your workflow and boost productivity with powerful integrations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full transition-all border border-gray-700 hover:border-gray-600"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <integration.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                        {integration.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                </div>
                {/* <button className="mt-4 w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-all">
                  Connect
                </button> */}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1">
            <div className="bg-gray-900 rounded-3xl p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Need a Custom Integration?
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Our team can help you build custom integrations for your specific needs.
                    Connect Appointy with any tool using our powerful API.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white">
                      <FileText className="w-6 h-6 text-blue-400" />
                      <span>Comprehensive API Documentation</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Zap className="w-6 h-6 text-purple-400" />
                      <span>Webhooks for Real-time Updates</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <Clock className="w-6 h-6 text-green-400" />
                      <span>Dedicated Integration Support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Request Integration</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Which app do you want to integrate?"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    />
                    <textarea
                      placeholder="Tell us about your use case"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
                    />
                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
