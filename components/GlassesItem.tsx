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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5rem",
        flexDirection: isEven ? "row" : "row-reverse",
      }}
      className={`accessory-box `}
    >
      <div className="accessory-text-box">
        <h3 style={{ fontSize: "18px", marginBottom: "0.5rem" }}>{name}</h3>
        <p
          style={{
            fontSize: "14px",
            textAlign: "justify",
            opacity: 0.6,
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </p>
      </div>

      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={600}
        style={{ borderRadius: "1rem", objectFit: "cover" }}
        className="glasses-image"
      />
    </div>

    {showDivider && (
      <div
        style={{
          height: 1,
          backgroundColor: "gray",
          opacity: 0.2,
          margin: "5rem",
        }}
      />
    )}
  </div>
);

export default GlassesItem;
