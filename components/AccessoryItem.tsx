"use client";

import Image from "next/image";
import { theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";

const { useToken } = theme;

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
}: AccessoryItemProps) => {
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["AccessoryItem"] },
    () => ({
      ".accessory-item-container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5rem",

        "@media (max-width: 767px)": {
          gap: "2rem",
          flexDirection: "column",
        },
      },

      ".accessory-item-row": {
        flexDirection: "row",
        "@media (max-width: 767px)": {
          flexDirection: "column",
        },
      },

      ".accessory-item-row-reverse": {
        flexDirection: "row-reverse",
        "@media (max-width: 767px)": {
          flexDirection: "column",
        },
      },

      ".accessory-item-text": {
        width: 500,
        "@media (max-width: 991px)": {
          width: 300,
        },
        "@media (max-width: 767px)": {
          width: "100%",
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

        "@media (max-width: 576px)": {
          width: "300px !important",
          height: "300px !important",
        },
      },
    }),
  );

  return wrapSSR(
    <div>
      <div
        className={`accessory-item-container ${
          isEven ? "accessory-item-row" : "accessory-item-row-reverse"
        }`}
      >
        <div className="accessory-item-text">
          <h3 className="accessory-item-title">{name}</h3>
          <p className="accessory-item-description">{description}</p>
        </div>

        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="accessory-item-image"
        />
      </div>

      {showDivider && <div className="accessory-item-divider" />}
    </div>,
  );
};

export default AccessoryItem;
