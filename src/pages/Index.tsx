import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MemoriesSection from "@/components/MemoriesSection";
import LetterSection from "@/components/LetterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StorySection />
      <MemoriesSection />
      <LetterSection />
      <Footer />
    </div>
  );
};

export default Index;
