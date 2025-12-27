"use client";

import Image from "next/image";
import { getStrapiImageLink } from "@/lib/links";

interface AccessoryItemProps {
  accessory: any;
  isEven?: boolean;
  showDivider?: boolean;
}

const AccessoryItem = ({
  accessory,
  isEven = false,
  showDivider = false,
}: AccessoryItemProps) => (
  <div
    id={accessory.type}
    className={accessory.type === "sill" ? "scroll-mt-40" : ""}
  >
    <div
      className={`
       flex items-center justify-center gap-[5rem]
      ${isEven ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}
    `}
    >
      <div className="w-[90%] md:w-[30rem]">
        <h3 className="text-2xl md:text-[18px] mb-2">{accessory.name}</h3>

        <p className="text-base md:text-[14px] text-justify opacity-60 whitespace-pre-line ">
          {accessory.description}
        </p>
      </div>

      <Image
        src={getStrapiImageLink(accessory.cover_photo.url)}
        alt={accessory.name}
        width={400}
        height={400}
        sizes="(max-width: 768px) 90vw, 400px"
        loading="lazy"
        
        className="rounded-[1rem]"
      />
    </div>

    {showDivider && <div className="h-px bg-gray-500 opacity-20 my-[5rem]" />}
  </div>
);

export default AccessoryItem;
