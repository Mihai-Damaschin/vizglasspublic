"use client";

import Image from "next/image";
import { theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";

const { useToken } = theme;

interface AccessoryItemProps {
  name: string;
  description: string;
  imageUrl: string;
  index: number;
  showDivider?: boolean;
}

const AccessoryItem = ({
  name,
  description,
  imageUrl,
  index,
  showDivider = false,
}: AccessoryItemProps) => {
  const isEven = index % 2 === 0;
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["AccessoryItem"] },
    () => ({
      ".accessory-item-container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5rem",
        flexDirection: isEven ? "row" : "row-reverse",
        "@media (max-width: 767px)": {
          flexDirection: "column",
          gap: "2rem",
        },
      },

      ".accessory-item-text": {
        width: 500,
        "@media (max-width: 991px)": {
          width: 300,
        },
        "@media (max-width: 767px)": {
          width: "100%",
          padding: "0 20px",
        },
      },

      ".accessory-item-title": {
        fontSize: "18px",
        marginBottom: "0.5rem",
      },

      ".accessory-item-description": {
        fontSize: "14px",
        textAlign: "justify",
        opacity: 0.6,
        whiteSpace: "pre-line",
      },

      ".accessory-item-divider": {
        height: 1,
        backgroundColor: "gray",
        opacity: 0.2,
        margin: "5rem",
      },

      ".accessory-item-image": {
        borderRadius: "1rem",
        objectFit: "cover",
        width: "auto",
        height: "auto",
        "@media (max-width: 576px)": {
          width: "300px !important",
          height: "400px !important",
        },
      },
    }),
  );

  return wrapSSR(
    <div>
      <div className="accessory-item-container">
        <div className="accessory-item-text">
          <h3 className="accessory-item-title">{name}</h3>
          <p className="accessory-item-description">{description}</p>
        </div>

        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={600}
          className="accessory-item-image"
        />
      </div>

      {showDivider && <div className="accessory-item-divider" />}
    </div>,
  );
};

export default AccessoryItem;
