import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Users, Bell, BarChart3, FileText, Palette, Lock, Smartphone, Globe, Zap, Search, Filter, Share2, Download, Upload, Settings } from 'lucide-react';

export default function ViewMore() {
  const allFeatures = [
    {
      icon: Calendar,
      title: 'Smart Calendar Management',
      description: 'Intelligent scheduling with conflict detection, buffer times, and automatic timezone conversions.',
      category: 'Scheduling'
    },
    {
      icon: Bell,
      title: 'Email & SMS Reminders',
      description: 'Automated reminders reduce no-shows by 80%. Customizable templates for all communications.',
      category: 'Automation'
    },
    {
      icon: Users,
      title: 'Team Scheduling',
      description: 'Round-robin distribution, collective availability, and team calendar views for collaborative booking.',
      category: 'Collaboration'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track bookings, revenue, customer trends, and team performance with detailed reports.',
      category: 'Analytics'
    },
    {
      icon: FileText,
      title: 'Custom Booking Pages',
      description: 'Beautiful, branded booking pages that match your business. Fully customizable design and fields.',
      category: 'Customization'
    },
    {
      icon: Palette,
      title: 'White Label Solution',
      description: 'Remove Appointy branding and use your own domain. Perfect for agencies and enterprises.',
      category: 'Branding'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'SOC 2 certified, GDPR compliant, with bank-level encryption and regular security audits.',
      category: 'Security'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native iOS and Android apps for managing appointments on the go. Offline access available.',
      category: 'Mobile'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Available in 30+ languages with automatic timezone detection and currency conversion.',
      category: 'Global'
    },
    {
      icon: Zap,
      title: 'API Access',
      description: 'RESTful API and webhooks for custom integrations. Comprehensive documentation included.',
      category: 'Developer'
    },
    {
      icon: Search,
      title: 'Advanced Search & Filters',
      description: 'Quickly find appointments, customers, and bookings with powerful search and filtering tools.',
      category: 'Productivity'
    },
    {
      icon: Filter,
      title: 'Booking Rules',
      description: 'Set minimum notice periods, maximum advance booking, and custom availability rules.',
      category: 'Settings'
    },
    {
      icon: Share2,
      title: 'Social Media Integration',
      description: 'Share booking links on social media, embed widgets on your site, and track referrals.',
      category: 'Marketing'
    },
    {
      icon: Download,
      title: 'Data Export',
      description: 'Export all your data in CSV, Excel, or PDF format. Complete data portability.',
      category: 'Data'
    },
    {
      icon: Upload,
      title: 'Bulk Import',
      description: 'Import existing customer data and appointments from spreadsheets or other systems.',
      category: 'Migration'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Create custom workflows, automatic follow-ups, and conditional logic for bookings.',
      category: 'Automation'
    }
  ];

  const categories = ['All', 'Scheduling', 'Automation', 'Analytics', 'Security', 'Mobile', 'Customization'];

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
              Complete Feature
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Overview
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore all the powerful features that make Appointy the most comprehensive scheduling platform for businesses of all sizes.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      {feature.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100 text-lg">Features & Counting</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-100 text-lg">Support Available</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-green-100 text-lg">Uptime Guarantee</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1">
            <div className="bg-gray-900 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Experience All Features?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Start your free trial today and get access to all premium features. No credit card required.
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
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
