import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "@/components/ui/NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FDFDFD] border-t-2 border-[#080808] mt-24 py-16">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="120" height="47" viewBox="0 0 120 47" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M31.9381 24.8955C31.8541 24.7132 31.7681 24.533 31.68 24.3527L28.2679 17.3687C28.186 17.1987 27.8542 16.4593 27.7928 16.3508C26.0232 13.3196 21.8778 18.8208 20.0694 21.5079C19.5307 22.3087 19.1989 22.8597 19.1989 22.8597C20.7207 25.1023 23.5348 31.1627 23.5348 31.1627C29.0421 33.8108 37.3512 27.5334 37.3512 27.5334C34.0292 29.0285 32.2719 25.6225 31.9402 24.8955H31.9381Z" fill="url(#paint0_linear_footer)"></path> <path d="M42.9188 23.7111C41.991 23.5309 40.8441 24.4505 40.3402 24.9134C40.2644 24.981 39.4595 25.6875 38.7038 26.3491C37.1841 27.6783 35.519 28.8334 33.7228 29.7551C30.8145 31.2481 26.7081 32.688 23.5315 31.1621L24.2708 32.5343C25.0983 34.1892 26.534 35.5123 26.534 35.5123C34.2942 41.2982 43.0376 27.9732 43.0376 27.9732C44.5183 25.5094 44.2173 24.7782 44.2173 24.7782C44.2173 24.7782 44.1517 23.9508 42.9208 23.7111H42.9188Z" fill="url(#paint1_linear_footer)"></path> <path d="M27.7922 16.35C26.7804 13.9456 24.6914 9.73878 22.1067 8.71064C22.1067 8.71064 15.2414 5.20634 8.87184 13.7613C2.5043 22.3182 0.704018 28.3519 0.704018 28.3519C0.704018 28.3519 -1.86635 34.9099 2.81561 37.6851C7.49961 40.4603 10.453 37.0358 10.453 37.0358C10.453 37.0358 12.3802 34.9632 15.3193 29.4374C16.3945 27.4159 17.6889 25.118 19.0345 23.0494C19.0345 23.0494 19.4318 22.4104 20.0667 21.5072C21.8773 18.8201 26.0226 13.3189 27.7901 16.35H27.7922Z" fill="url(#paint2_linear_footer)"></path> <text fill="#080808" xml:space="preserve" style="white-space: pre" font-family="Lexend" font-size="36.3639" letter-spacing="0em"><tspan x="49.6781" y="36.9214">Ace</tspan></text> <defs> <linearGradient id="paint0_linear_footer" x1="16.4504" y1="12.6745" x2="36.0589" y2="36.0433" gradientUnits="userSpaceOnUse"> <stop offset="0.23" stop-color="#EF00EA"></stop> <stop offset="0.77" stop-color="#3B0CBE"></stop> <stop offset="1" stop-color="#310DF6"></stop> </linearGradient> <linearGradient id="paint1_linear_footer" x1="25.9093" y1="35.4017" x2="44.2972" y2="24.7864" gradientUnits="userSpaceOnUse"> <stop stop-color="#A139FF"></stop> <stop offset="1" stop-color="#00C1F6"></stop> </linearGradient> <linearGradient id="paint2_linear_footer" x1="-1.72708" y1="31.2766" x2="29.4962" y2="13.2492" gradientUnits="userSpaceOnUse"> <stop stop-color="#540CFF"></stop> <stop offset="0.42" stop-color="#E454FF"></stop> <stop offset="0.82" stop-color="#FFC8FF"></stop> <stop offset="0.94" stop-color="white"></stop> </linearGradient> </defs> </svg>',
                }}
              />
            </div>
            <p className="text-[#080808] text-lg font-light mb-6">
              The Browser that skips online clutter and makes information easier
              to access.
            </p>
            <NewsletterForm />
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#080808] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#080808] font-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Ace Browser. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-[#080808] font-light hover:text-[#110B53]"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-[#080808] font-light hover:text-[#110B53]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
