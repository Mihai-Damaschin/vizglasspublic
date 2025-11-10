"use client";

import Image from "next/image";
import React from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

interface AccessoryItemProps {
  name: string;
  description: string;
  imageUrl: string;
  index: number;
  showDivider?: boolean;
}

const AccessoryItem: React.FC<AccessoryItemProps> = ({
  name,
  description,
  imageUrl,
  index,
  showDivider = false,
}) => {
  const screens = useBreakpoint();

  const isEven = index % 2 === 0;

  return (
    <div>
      <div key={name}>
        <div
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5rem",
            flexDirection: !screens.md
              ? "column"
              : isEven
                ? "row"
                : "row-reverse",
          }}
        >
          <div
            style={{
              width: !screens.md ? "100%" : !screens.lg ? 300 : 500,
              padding: `0 ${!screens.md ? "20px" : "0"}`,
            }}
          >
            <h3 style={{ fontSize: "18p", marginBottom: "0.5rem" }}>{name}</h3>
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
          <div>
            <Image
              src={imageUrl}
              alt=""
              width={!screens.sm ? 300 : 400}
              height={!screens.sm ? 400 : 600}
              style={{ borderRadius: "1rem", objectFit: "cover" }}
            />
          </div>
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
    </div>
  );
};

export default AccessoryItem;
