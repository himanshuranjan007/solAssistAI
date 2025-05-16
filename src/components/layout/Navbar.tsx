import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full flex justify-between items-center px-[31px] py-[21px] max-md:px-5">
      <div className="flex items-center gap-2.5">
        <img 
          src="https://cdn.rtbrain.app/browser/Ace_logo_118x32_1740475997_118x32.png" 
          alt="Ace Logo" 
          className="h-8"
        />
      </div>

      <CustomButton className="px-[27px] py-[13px] text-[17px] leading-[19px] font-[500] font-['Lexend']" onClick={() => navigate("/home")}>
        App -> 
      </CustomButton>
      <button className="hidden max-md:block" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ti ti-menu-2 text-2xl"
          
        >
          <path d="M4 6h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
