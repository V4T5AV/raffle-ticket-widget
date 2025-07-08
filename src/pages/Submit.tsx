import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubmitForm from '@/components/SubmitForm';

const Submit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-ivory to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6 fade-in">
              Share Your Story
            </h1>
            <p className="font-lora text-lg text-gray-600 max-w-2xl mx-auto slide-up">
              Have an Amsterdam tale to tell? Whether it's a hidden gem, a cultural insight, or a personal experience, we'd love to hear it.
            </p>
          </div>
        </section>

        {/* Submit Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SubmitForm />
          </div>
        </section>

        {/* Guidelines */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair text-2xl font-bold text-charcoal mb-8 text-center fade-in">
                Submission Guidelines
              </h2>
              <div className="grid md:grid-cols-2 gap-8 slide-up">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-playfair text-lg font-bold text-coral mb-4">What We're Looking For</h3>
                  <ul className="font-lora text-gray-600 space-y-2 text-sm">
                    <li>• Personal experiences in Amsterdam</li>
                    <li>• Hidden gems and local secrets</li>
                    <li>• Cultural insights and traditions</li>
                    <li>• Historical anecdotes</li>
                    <li>• Street art and creative expressions</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-playfair text-lg font-bold text-coral mb-4">Submission Tips</h3>
                  <ul className="font-lora text-gray-600 space-y-2 text-sm">
                    <li>• Be authentic and personal</li>
                    <li>• Include specific locations when relevant</li>
                    <li>• Respect privacy and cultural sensitivity</li>
                    <li>• Write in an engaging, narrative style</li>
                    <li>• Keep it between 50-1000 characters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Submit;
