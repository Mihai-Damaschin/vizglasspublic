"use client";

import { colors } from "@/lib/colors";

type HeroContentProps = {
  title: string;
  subtitle: string;
};

const HomeHeroContent = ({ title, subtitle }: HeroContentProps) => {
  return (
    <div
      className="
        absolute w-[80vw] left-1/2 -translate-x-1/2
        top-[-15%] md:top-[-20%]
        z-[1] h-full
        flex flex-col justify-center items-center
        text-center px-5
      "
      style={{ color: colors.text.primary }}
    >
      <h1
        className="text-4xl md:text-[4rem] font-bold mb-10 md:mb-5
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] fade-up"
        style={{ animationDelay: "0.5s" }}
      >
        {title}
      </h1>

      <p
        className="text-[1rem] md:text-[1.5rem] opacity-90 mb-10
          max-w-[700px] fade-up"
        style={{ animationDelay: "1s" }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default HomeHeroContent;
