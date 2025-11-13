"use client";

import Image from "next/image";
import { theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";
import { colors as $colors } from "@/lib/colors";

const { useToken } = theme;

interface IColors {
  colors: any[];
  dict: any;
}

export const Colors = ({ colors, dict }: IColors) => {
  if (!colors.length) return null;

  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister({ theme, token, path: ["Colors"] }, () => ({
    ".colors": {
      h2: {
        fontSize: "2.625rem", // 42px
        fontWeight: 700,
        color: $colors.text.dark,
        marginBottom: "3.125rem", // 50px
        textAlign: "center",
      },

      ".color-list": {
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
      },

      ".color-card": {
        background: $colors.light,
        borderRadius: "0.75rem", // 12px
        overflow: "hidden",
        boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.1)", // 0 4px 20px
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        flexShrink: 0,
        position: "relative",
        width: "12rem",
        height: "12rem",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.15)",
        },

        ".color-name": {
          padding: "0.5rem",
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          backgroundColor: $colors.primary,
          borderRadius: "0.75rem",
          color: $colors.light,
          fontWeight: "bold",
        },
      },
    },
  }));

  return wrapSSR(
    <div className={`colors`}>
      <h2>{dict.colors}</h2>

      <div className="color-list">
        {colors.map((color) => (
          <div className="color-card" key={color.id}>
            <Image
              src={
                color.cover_photo?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL + color.cover_photo?.url
                  : "/viz-glass-logo.png"
              }
              alt={color.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              width={350}
              height={300}
            />
            <div className="color-name">{color.name}</div>
          </div>
        ))}
      </div>
    </div>,
  );
};
