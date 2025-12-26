"use client";

import { colors } from "@/lib/colors";
import { Dictionary } from "@/lib/types";

interface IFeatures {
  features: any[];
  dict: Dictionary;
}

export const Features = ({ features = [], dict }: IFeatures) => {
  if (!features.length) return null;

  return (
    <div>
      <h2
        className="
          text-[2.5rem] font-bold text-center mb-5
        "
        style={{ color: colors.text.dark }}
      >
        {dict.keyFeatures}
      </h2>

      <div className="flex flex-wrap gap-[2rem] mb-20">
        {features.map((feature: any, index: number) => (
          <div
            key={index}
            className="
              w-full md:w-[calc(33%-1.125rem)] rounded-2xl cursor-default
              bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 md:p-10
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)]
            "
            style={{ background: colors.light }}
          >
            {/*<div*/}
            {/*  className="text-[2.5rem] mb-5"*/}
            {/*  style={{ color: colors.primary }}*/}
            {/*>*/}
            {/*  {feature.icon ?? null}*/}
            {/*</div>*/}

            <h3
              className="text-[1.375rem] font-semibold mb-3"
              style={{ color: colors.text.dark }}
            >
              {feature.title}
            </h3>

            <p
              className="text-base leading-[1.6] opacity-70"
              style={{ color: colors.text.dark }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
