
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryGrid from '@/components/StoryGrid';

const Stories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-ivory to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 fade-in">
              Amsterdam Stories
            </h1>
            <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto slide-up">
              Explore the hidden tales, cultural insights, and personal experiences that make Amsterdam extraordinary
            </p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <StoryGrid />
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="grid md:grid-cols-2 gap-8 slide-up">
                <p className="font-lora text-gray-600 leading-relaxed">
                  Amsterdam's stories are as diverse as its people. From centuries-old legends passed down through 
                  generations to contemporary tales of urban life, each story adds another layer to the city's 
                  rich cultural tapestry. Our collection features authentic voices from locals who call Amsterdam 
                  home and visitors who have fallen under its spell.
                </p>
                <p className="font-lora text-gray-600 leading-relaxed">
                  Whether you're discovering hidden courtyards, learning about neighborhood traditions, or 
                  uncovering the stories behind famous landmarks, these narratives offer insights that 
                  guidebooks simply cannot capture. Join our growing community of storytellers and help 
                  preserve Amsterdam's living history for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
