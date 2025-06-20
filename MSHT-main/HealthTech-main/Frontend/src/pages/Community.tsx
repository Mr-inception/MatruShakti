
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import CommunityForum from '@/components/Community/CommunityForum';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white to-matru-accent/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                MatruShakti Community
              </h1>
              <p className="text-lg text-gray-600">
                Connect with other mothers, share experiences, and get advice from healthcare professionals in our secure community.
              </p>
            </div>
          </div>
        </section>
        
        <CommunityForum />
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
