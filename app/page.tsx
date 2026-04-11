import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecommendedCards from './components/RecommendedCards';
import StatsBar from './components/StatsBar';
import Categories from './components/Categories';
import Advisory from './components/Advisory';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RecommendedCards />
      <StatsBar />
      <Categories />
      <Advisory />
      <Testimonials />
      <HowItWorks />
      <CTASection />
      <Footer />
    </>
  );
}
