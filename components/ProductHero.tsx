"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";
import { getStrapiImageLink } from "@/lib/links";

interface IProductHero {
  product: any;
}

export const ProductHero = ({ product }: IProductHero) => {
  const heroOverlayStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 1,
  };

  const heroContentStyle: CSSProperties = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: colors.light,
    maxWidth: "70%",
    padding: "0 40px",
  };

  const heroCategoryStyle: CSSProperties = {
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
    opacity: 0.9,
    marginBottom: "15px",
  };

  const heroTitleStyle: CSSProperties = {
    fontSize: "4rem",
    fontWeight: 700,
    marginBottom: "20px",
    lineHeight: 1.2,
  };

  const heroTaglineStyle: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 300,
    opacity: 0.95,
    marginBottom: "40px",
  };

  return (
    <div
      style={{
        position: "relative",
        height: 500,
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {product.media?.[0]?.url && (
        <Image
          src={getStrapiImageLink(product.media?.[0]?.url)}
          alt={product.name}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.1,
          }}
          width={1920}
          height={900}
        />
      )}

      <div style={heroOverlayStyle} />
      <div style={heroContentStyle} className="hero-content">
        <div style={heroCategoryStyle}>{product.category}</div>
        <h1 style={heroTitleStyle}>{product.name}</h1>
        <p style={heroTaglineStyle}>{product.description}</p>
      </div>
    </div>
  );
};
