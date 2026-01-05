import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoPlayer />
        <AnalyticsDashboard />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
