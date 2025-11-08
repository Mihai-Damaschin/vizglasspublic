"use client";

import { CSSProperties } from "react";
import { Grid } from "antd";
import { colors } from "@/lib/colors";

const { useBreakpoint } = Grid;

type HeroContentProps = {
  title: string;
  subtitle: string;
};

const HomeHeroContent = ({ title, subtitle }: HeroContentProps) => {
  const screens = useBreakpoint();

  const heroContentStyle: CSSProperties = {
    position: "absolute",
    top:  !screens.md ? "4%" : "-22%",
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
    padding: "0 1.25rem", // 20px
  };

  const heroTitleStyle: CSSProperties = {
    fontSize: "4rem", // 64px
    fontWeight: 700,
    marginBottom: "1.25rem", // 20px
    textShadow: "0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5)", // 2px 2px 4px
  };

  const heroSubtitleStyle: CSSProperties = {
    fontSize: "1.5rem", // 24px
    marginBottom: "2.5rem", // 40px
    opacity: 0.9,
    maxWidth: "43.75rem", // 700px
  };

  return (
    <div style={heroContentStyle}>
      <h1 style={heroTitleStyle}>{title}</h1>
      <p style={heroSubtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default HomeHeroContent;
