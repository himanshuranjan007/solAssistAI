
import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { useNavigate } from "react-router-dom";
interface HeroProps {
  heroImageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ heroImageUrl }) => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.rtbrain.app/browser/Hero_BG_1742742329.svg+xml"
          alt="background"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[82px] px-5 w-full">
        <h1 className="font-['Lexend'] text-[66px] font-bold text-[#080808] leading-[74px] max-w-[1500px] mb-3.5 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Making Solana Accessible to Everyone
        </h1>
        <p className="font-['DM_Sans'] text-[30px] font-light text-[#080808] leading-[40px] tracking-[1%] max-w-[1245px] mb-[58px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          Only AI that can help you navigate the Solana ecosystem 
        </p>
        <CustomButton 
          size="lg" 
          className="text-[30.08px] leading-[34.08px] px-[47px] py-[24px] font-['Lexend'] font-medium"
          onClick={() => navigate('/home')}
        >
          Go to App
        </CustomButton>
      </div>
      
      <div className="relative z-10 w-full max-w-[1270px] mx-auto mt-auto pb-10">
        <img
          src={heroImageUrl}
          alt="hero image"
          className="w-full h-auto filter drop-shadow-[0px_0px_76px_rgba(61,_57,_93,_0.25)]"

        />
      </div>
    </div>
  );
};

export default Hero;
