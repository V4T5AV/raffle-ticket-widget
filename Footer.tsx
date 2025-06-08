
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const footerSections = {
    about: {
      title: "About AmsterdamLore",
      content: "Discover the untold stories, hidden histories, and cultural insights of Amsterdam through the eyes of locals and visitors. Every corner has a tale to tell."
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { path: '/', label: 'Home' },
        { path: '/stories', label: 'Stories' },
        { path: '/submit', label: 'Submit' },
        { path: '/contact', label: 'Contact' },
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { path: '/faq', label: 'FAQ' },
        { path: '/privacy', label: 'Privacy' },
        { path: '/terms', label: 'Terms' },
      ]
    }
  };

  return (
    <footer className="bg-light-gray border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-lg text-charcoal">
              {footerSections.about.title}
            </h3>
            <p className="font-lora text-sm text-gray-600 leading-relaxed">
              {footerSections.about.content}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-lg text-charcoal">
              {footerSections.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.quickLinks.links.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="font-lora text-sm text-gray-600 hover:text-coral transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-lg text-charcoal">
              {footerSections.resources.title}
            </h3>
            <ul className="space-y-2">
              {footerSections.resources.links.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="font-lora text-sm text-gray-600 hover:text-coral transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-lg text-charcoal">
              Newsletter Signup
            </h3>
            <p className="font-lora text-sm text-gray-600">
              Stay updated with the latest Amsterdam stories and cultural insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-coral focus:ring-coral"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-coral hover:bg-coral/90 text-white font-lora text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="font-lora text-sm text-gray-600">
            © 2024 AmsterdamLore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
