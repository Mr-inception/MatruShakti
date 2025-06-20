
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import GovernmentSchemes from '@/components/Schemes/GovernmentSchemes';

const Schemes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white to-matru-blue/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Government Maternal Support Schemes
              </h1>
              <p className="text-lg text-gray-600">
                Access financial assistance and healthcare benefits designed to support mothers through pregnancy and beyond.
              </p>
            </div>
          </div>
        </section>
        
        <GovernmentSchemes />
      </main>
      
      <Footer />
    </div>
  );
};

export default Schemes;
