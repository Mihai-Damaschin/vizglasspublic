"use client";

import Image from "next/image";
import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { colors } from "@/lib/colors";
import { getStrapiImageLink } from "@/lib/links";

const { useToken } = theme;

interface IProductHero {
  product: any;
}

export const ProductHero = ({ product }: IProductHero) => {
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["ProductHero"] },
    () => ({
      ".hero": {
        position: "relative",
        height: 500,
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      },
      ".overlay": {
        position: "absolute",
        inset: 0,
        background: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
      },
      ".content": {
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        color: colors.light,
        maxWidth: "70%",
        padding: "0 40px",
      },
      "@media (max-width: 767px)": {
        ".content": {
          maxWidth: "100%",
          padding: "0 20px",
        },
      },
      ".category": {
        fontSize: "1rem",
        fontWeight: 500,
        letterSpacing: "2px",
        textTransform: "uppercase",
        opacity: 0.9,
        marginBottom: "15px",
      },
      ".title": {
        fontSize: "4rem",
        fontWeight: 700,
        marginBottom: "20px",
        lineHeight: 1.2,
      },
      ".tagline": {
        fontSize: "1.5rem",
        fontWeight: 300,
        opacity: 0.95,
        marginBottom: "40px",
      },
    }),
  );

  return wrapSSR(
    <div className="hero">
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

      <div className="overlay" />
      <div className="content">
        <div className="category">{product.category}</div>
        <h1 className="title">{product.name}</h1>
        <p className="tagline">{product.description}</p>
      </div>
    </div>,
  );
};
