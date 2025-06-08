
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockStories, Story } from '@/data/mockStories';

const StoryGrid = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call with potential failure
    const fetchStories = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        
        // Uncomment the line below to simulate an error
        // throw new Error('Failed to fetch stories');
        
        setStories(mockStories);
      } catch (err) {
        setError('Unable to load stories.');
        console.error('Error fetching stories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600 font-lora">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stories.map((story, index) => (
        <div
          key={story.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="relative overflow-hidden">
            <img
              src={story.imageUrl}
              alt={story.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-coral/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Link
                to={`/stories/${story.id}`}
                className="bg-white text-coral px-6 py-2 rounded-full font-lora text-sm font-medium hover:bg-coral hover:text-white transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-3 line-clamp-2">
              {story.title}
            </h3>
            <p className="font-lora text-gray-600 text-sm leading-relaxed line-clamp-3">
              {story.snippet}
            </p>
            {story.author && (
              <p className="font-lora text-xs text-gray-500 mt-3">
                by {story.author}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryGrid;
