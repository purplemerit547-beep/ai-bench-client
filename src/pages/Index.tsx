import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedModels from '@/components/FeaturedModels';
import LeaderboardPreview from '@/components/LeaderboardPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600&display=swap"
      />
      
      <header>
        <Navigation />
      </header>
      
      <main>
        <HeroSection />
        <FeaturedModels />
        <LeaderboardPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
