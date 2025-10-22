import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import InteriorListings from '../components/InteriorListings';
import Faq from '../components/Faq'
import InteriorAbout from '../components/InteriorAbout';

const InteriorDesign = () => {
  return (
    <>
      <Navbar />
      <Hero2 />
      <InteriorAbout />
      <InteriorListings />
      <Faq />
      <Footer />
    </>
  );
};

export default InteriorDesign;
