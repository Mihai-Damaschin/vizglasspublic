"use client";

import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { colors } from "@/lib/colors";

const { useToken } = theme;

type HeroContentProps = {
  title: string;
  subtitle: string;
};

const HomeHeroContent = ({ title, subtitle }: HeroContentProps) => {
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["HomeHeroContent"] },
    () => ({
      ".hero-content": {
        position: "absolute",
        top: "-22%",
        left: "50%",
        transform: "translate(-50%)",
        zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: colors.text.primary,
        textAlign: "center",
        padding: "0 1.25rem",
        "@media (max-width: 767px)": {
          top: "4%",
        },
      },
      ".hero-title": {
        fontSize: "4rem",
        fontWeight: 700,
        marginBottom: "1.25rem",
        textShadow: "0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5)",
      },
      ".hero-subtitle": {
        fontSize: "1.5rem",
        marginBottom: "2.5rem",
        opacity: 0.9,
        maxWidth: "43.75rem",
      },
    }),
  );

  return wrapSSR(
    <div className="hero-content">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </div>,
  );
};

export default HomeHeroContent;
