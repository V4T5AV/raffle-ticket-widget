
import { ExternalLink, Trophy, Star } from 'lucide-react';

const AwardsPanels = () => {
  const panels = [
    {
      title: "Vote Top216",
      url: "https://top216.com/vote",
      icon: Trophy,
      description: "Help us reach the top 216 cultural sites"
    },
    {
      title: "Explore TheTop36",
      url: "https://thetop36.com/highlights",
      icon: Star,
      description: "Discover the top 36 Amsterdam highlights"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
      {panels.map((panel, index) => (
        <a
          key={panel.title}
          href={panel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-charcoal rounded-lg p-6 shadow-md hover:border-coral hover:shadow-lg transition-all duration-300 group slide-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <panel.icon className="text-coral group-hover:text-charcoal transition-colors" size={24} />
            <h3 className="font-playfair text-xl font-bold text-charcoal group-hover:text-coral transition-colors">
              {panel.title}
            </h3>
            <ExternalLink className="text-gray-400 group-hover:text-coral transition-colors ml-auto" size={16} />
          </div>
          <p className="font-lora text-gray-600 text-sm">
            {panel.description}
          </p>
        </a>
      ))}
    </div>
  );
};

export default AwardsPanels;
