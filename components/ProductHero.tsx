"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";
import { getStrapiImageLink } from "@/lib/links";

interface IProductHero {
  product: any;
}

export const ProductHero = ({ product }: IProductHero) => {
  return (
    <div
      className="relative h-[31.25rem] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      }}
    >
      {product.media?.[0]?.url && (
        <Image
          src={getStrapiImageLink(product.media?.[0]?.url)}
          alt={product.name}
          width={1920}
          height={900}
          sizes="100vw"
          priority
          
          className="absolute top-0 left-0 opacity-10 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div
        className="
          relative z-[2] text-center text-white
          max-w-[90%] md:max-w-[70%] px-10
        "
      >
        <div
          className="
            text-base font-medium tracking-[2px] uppercase
            opacity-90 mb-4
          "
        >
          {product.category}
        </div>

        <h1
          className="
            text-[3rem] md:text-[4rem] font-bold mb-5 leading-[1.2]
          "
        >
          {product.name}
        </h1>

        <p
          className="
            text-[1rem] md:text-[1.5rem] font-light opacity-95 mb-10
          "
        >
          {product.description}
        </p>
      </div>
    </div>
  );
};
