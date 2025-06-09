
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Hero />
      <HowItWorks />
      <AboutSection />
      <LeadForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
