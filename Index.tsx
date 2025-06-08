
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AwardsPanels from '@/components/AwardsPanels';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, PenTool } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ivory to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6 fade-in">
              Amsterdam<span className="text-coral">Lore</span>
            </h1>
            <p className="font-lora text-xl text-gray-600 mb-8 max-w-2xl mx-auto slide-up">
              Discover the untold stories of Amsterdam through the eyes of locals and visitors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{ animationDelay: '200ms' }}>
              <Link to="/stories">
                <Button className="bg-coral hover:bg-coral/90 text-white font-lora text-base px-8 py-3">
                  <BookOpen className="mr-2" size={20} />
                  Explore Stories
                </Button>
              </Link>
              <Link to="/submit">
                <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-lora text-base px-8 py-3">
                  <PenTool className="mr-2" size={20} />
                  Share Your Story
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-8 fade-in">
                Every Corner Has a Tale
              </h2>
              <div className="grid md:grid-cols-2 gap-8 slide-up">
                <p className="font-lora text-gray-600 leading-relaxed">
                  Amsterdam is more than its famous canals and museums. Behind every brick façade, 
                  beneath every bridge, and within every neighborhood cafe lies a story waiting to be told. 
                  Our platform celebrates the hidden histories, cultural insights, and personal experiences 
                  that make this city truly alive.
                </p>
                <p className="font-lora text-gray-600 leading-relaxed">
                  From the secret gardens of Begijnhof to the midnight cyclists of Vondelpark, 
                  from canal house cats to political street art – these are the stories that 
                  breathe life into Amsterdam's historic streets. Join our community of storytellers 
                  and help preserve the cultural memory of this extraordinary city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories Preview */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4 fade-in">
                Featured Stories
              </h2>
              <p className="font-lora text-gray-600 slide-up">
                Discover the latest tales from Amsterdam's streets
              </p>
            </div>
            <div className="text-center slide-up" style={{ animationDelay: '200ms' }}>
              <Link to="/stories">
                <Button className="bg-coral hover:bg-coral/90 text-white font-lora text-base px-8 py-3">
                  View All Stories
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-charcoal mb-4 fade-in">
                Community Recognition
              </h2>
              <p className="font-lora text-gray-600 slide-up">
                Help us share Amsterdam's cultural heritage with the world
              </p>
            </div>
            <AwardsPanels />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
