"use client";

import Image from "next/image";
import { colors as $colors } from "@/lib/colors";
import { Dictionary } from "@/lib/types";

interface IColors {
  colors: any[];
  dict: Dictionary;
}

export const Colors = ({ colors, dict }: IColors) => {
  if (!colors.length) return null;

  return (
    <div>
      <h2
        className="
      text-[2.625rem]        /* 42px */
      font-bold
      text-[var(--text-dark)]
      mb-[3.125rem]          /* 50px */
      text-center
    "
      >
        {dict.colors}
      </h2>

      <div
        className="
      flex
      flex-wrap
      justify-center
      gap-8             /* 2rem */
    "
      >
        {colors.map((color) => (
          <div
            key={color.id}
            className="
          bg-[var(--color-light)]
          rounded-xl               /* 12px */
          overflow-hidden
          shadow-[0_4px_20px_rgba(0,0,0,0.1)]
          transition-all duration-300 ease-in-out
          cursor-pointer
          relative
          w-[calc(50%-1rem)] sm:w-48 h-48                /* 12rem */
          shrink-0
        "
          >
            <Image
              src={
                color.cover_photo?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL + color.cover_photo?.url
                  : "/viz-glass-logo.png"
              }
              alt={color.name}
              width={350}
              height={300}
              sizes="(max-width: 640px) 50vw, 192px"
              loading="lazy"
              
              className="
            w-full
            h-full
            object-cover
            block
          "
            />

            <div
              className="
            absolute
            top-2
            right-2
            px-2
            py-1
            rounded-xl
            bg-[var(--color-primary)]
            text-[var(--color-light)]
            font-bold
          "
            >
              {color.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
