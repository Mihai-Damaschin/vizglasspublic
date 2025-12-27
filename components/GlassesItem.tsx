"use client";

import Image from "next/image";

interface GlassesItemProps {
  name: string;
  description: string;
  imageUrl: string;
  isEven?: boolean;
  showDivider?: boolean;
}

const GlassesItem = ({
  name,
  description,
  imageUrl,
  isEven = false,
  showDivider = false,
}: GlassesItemProps) => (
  <div>
    <div
      className={`
      flex items-center justify-center gap-[5rem]
        ${isEven ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"}`}
    >
      <div className="w-[90%] md:w-[30rem]">
        <h3 className="text-2xl md:text-[18px] mb-2">{name}</h3>

        <p className="text-base md:text-[14px] text-justify opacity-60 whitespace-pre-line">
          {description}
        </p>
      </div>

      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={600}
        sizes="(max-width: 768px) 90vw, 400px"
        loading="lazy"
        quality={85}
        className="rounded-2xl object-cover glasses-image"
      />
    </div>

    {showDivider && <div className="h-px bg-gray-500 opacity-20 my-[5rem]" />}
  </div>
);

export default GlassesItem;
