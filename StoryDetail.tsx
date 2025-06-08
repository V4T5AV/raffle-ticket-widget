
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockStories } from '@/data/mockStories';
import { Button } from '@/components/ui/button';

const StoryDetail = () => {
  const { id } = useParams();
  const story = mockStories.find(s => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-3xl font-bold text-charcoal mb-4">Story Not Found</h1>
            <p className="font-lora text-gray-600 mb-6">The story you're looking for doesn't exist.</p>
            <Link to="/stories">
              <Button className="bg-coral hover:bg-coral/90">
                <ArrowLeft className="mr-2" size={16} />
                Back to Stories
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Story Header */}
        <section className="py-16 bg-gradient-to-br from-ivory to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/stories" 
                className="inline-flex items-center font-lora text-coral hover:text-coral/80 transition-colors mb-6"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to Stories
              </Link>
              
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 fade-in">
                {story.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 font-lora text-sm slide-up">
                {story.author && (
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {story.author}
                  </div>
                )}
                {story.date && (
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {new Date(story.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 slide-up">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none slide-up" style={{ animationDelay: '200ms' }}>
                <p className="font-lora text-lg text-gray-600 leading-relaxed mb-6">
                  {story.snippet}
                </p>
                
                <div className="font-lora text-gray-700 leading-relaxed space-y-4">
                  {story.fullContent ? (
                    <p>{story.fullContent}</p>
                  ) : (
                    <>
                      <p>
                        This story continues with rich details about Amsterdam's hidden corners and the people who 
                        bring them to life. Each tale we share adds another thread to the tapestry of this remarkable 
                        city, preserving moments that might otherwise be lost to time.
                      </p>
                      
                      <p>
                        From the cobblestone streets of the Jordaan to the houseboats lining the canals, Amsterdam 
                        reveals its secrets to those who take the time to look beyond the surface. These stories 
                        represent the living memory of a city that has welcomed travelers, artists, and dreamers 
                        for centuries.
                      </p>
                      
                      <p>
                        Whether you're a longtime resident or a curious visitor, these narratives offer glimpses 
                        into the authentic Amsterdam – the one that exists in the spaces between tourist attractions, 
                        in the conversations at local cafes, and in the daily rhythms of neighborhood life.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Actions */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6 fade-in">
                Share Your Own Story
              </h2>
              <p className="font-lora text-gray-600 mb-8 slide-up">
                Have an Amsterdam tale to tell? We'd love to hear your unique perspective.
              </p>
              <Link to="/submit">
                <Button className="bg-coral hover:bg-coral/90 text-white font-lora text-base px-8 py-3 slide-up" style={{ animationDelay: '200ms' }}>
                  Submit Your Story
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StoryDetail;
