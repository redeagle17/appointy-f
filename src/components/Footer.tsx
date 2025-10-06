import { Calendar, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Solution', 'Updates', 'Enterprise'],
    Resources: ['Blog', 'Help Center', 'Community', 'API Docs', 'Templates'],
    Company: ['About Us', 'Careers', 'Press Kit', 'Contact', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance', 'Cookies']
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Appointy</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              The scheduling infrastructure for everyone. Simplify your calendar management.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Copyright 2025. All Rights Reserved, Appointy
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
