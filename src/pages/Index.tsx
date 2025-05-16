
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import SearchBar from "@/components/ui/SearchBar";

// Placeholder image URL - replace with actual image in production
const heroImageUrl =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/cdaeea5cb03fa0184784e428de3e074cc6ba6657?placeholderIfAbsent=true";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Lexend:wght@300;400;500;600;700&family=Inter:wght@400;500&family=Mulish:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="w-full min-h-screen bg-white overflow-hidden px-[13px]">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[1920px] relative">
            <div className="flex flex-col items-center">
              <Navbar />
              <Hero heroImageUrl={heroImageUrl} />
              <SearchBar />
              <Features />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
