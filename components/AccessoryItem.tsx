"use client";

import Image from "next/image";

interface AccessoryItemProps {
  name: string;
  description: string;
  imageUrl: string;
  isEven?: boolean;
  showDivider?: boolean;
}

const AccessoryItem = ({
  name,
  description,
  imageUrl,
  isEven = false,
  showDivider = false,
}: AccessoryItemProps) => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5rem",
        flexDirection: isEven ? "row" : "row-reverse",
      }}
      className="accessory-box"
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
        height={400}
        style={{ borderRadius: "1rem" }}
        className="accessory-image"
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

export default AccessoryItem;
