"use client";

import { colors } from "@/lib/colors";

interface ISpecifications {
  specifications: any[];
  dict: any;
}

export const Specifications = ({
  specifications = [],
  dict,
}: ISpecifications) => (
  <div>
    <h2
      className="text-[40px] font-bold text-center mb-5"
      style={{ color: colors.text.dark }}
    >
      {dict.specifications}
    </h2>

    <div
      className="flex flex-wrap gap-8 bg-[var(--color-light)] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-12 mb-20"
      style={{ background: colors.light }}
    >
      {specifications?.map((spec: any, idx: number) => (
        <div
          key={idx}
          className="w-full sm:w-[calc(50%-1.125rem)] md:w-[calc(33%-1.125rem)] flex flex-col gap-2"
        >
          <div
            className="text-[14px] font-semibold uppercase tracking-[1px]"
            style={{ color: colors.primary }}
          >
            {spec.title}
          </div>

          <div
            className="text-[18px] font-medium"
            style={{ color: colors.text.dark }}
          >
            {spec.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);
