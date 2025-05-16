import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Instant Answers",
      description:
        "No more endless searching online - just ask Nova to skip the noise and find the answers you're looking for",
    },
    {
      id: 2,
      title: "Creative Productivity",
      description:
        "Generate beautiful imagery, summarize or find content on websites, draft emails and documents, come up with quick and creative recipes for dinner. Don't think - just create.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-[156px] px-5">
      <div className="flex flex-col items-center text-center mb-[86px]">
        <h2 className="text-6xl font-semibold text-[#080808] leading-[70px] mb-4 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Meet Nova
        </h2>
        <p className="text-[28px] text-[#080808] font-light leading-10 max-w-[652px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          The internet is overflowing with information, making it harder than
          ever to stay productive, creative, and focused. Nova helps you cut
          through the noise and get things done with ease.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-[1569px] px-5">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
