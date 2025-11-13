"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { colors } from "@/lib/colors";
import { getStrapiImageLink } from "@/lib/links";

const { useToken } = theme;

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  cover_image?: { url: string };
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
  const { locale } = useParams<{ locale: string }>();
  const { token, theme } = useToken();

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 352;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["ProductCarousel"] },
    () => ({
      ".carousel-wrapper": {
        padding: "5rem 0", // 80px 60px
      },
      ".carousel-title": {
        fontSize: "2.625rem", // 42px
        fontWeight: 700,
        color: colors.text.dark,
        marginBottom: "3.125rem", // 50px
        textAlign: "center",
      },
      ".carousel-container": {
        position: "relative",
        maxWidth: "87.5rem", // 1400px
        margin: "0 auto",
      },
      ".carousel-scroll": {
        display: "flex",
        gap: "1.25rem", // 20px
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        padding: "0.625rem 1rem 1.875rem 1rem", // 10px 0 30px 0
        transform: "translate(-1rem)",
        width: "calc(100% + 1rem)",
      },
      ".carousel-item": {
        background: colors.light,
        borderRadius: "0.75rem", // 12px
        overflow: "hidden",
        boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.1)", // 0 4px 20px
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        flexShrink: 0,
        position: "relative",
        width: "22rem",
        height: "22rem",
      },
      ".carousel-item-name": {
        padding: "0.5rem",
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        backgroundColor: colors.primary,
        borderRadius: "0.75rem",
        color: colors.light,
        fontWeight: "bold",
      },

      ".carousel-button": {
        zIndex: 10,
        background: colors.primary,
        border: "none",
        borderRadius: "50%",
        width: "3.125rem",
        height: "3.125rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: colors.light,
        fontSize: "1.25rem",
        boxShadow: "0 0.125rem 0.625rem rgba(0,0,0,0.2)",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        "@media (max-width: 767px)": {
          bottom: "0.75rem",
        },
      },
      ".carousel-button-left": {
        left: "-3.8rem",
        "@media (max-width: 767px)": { left: "0.75rem" },
      },
      ".carousel-button-right": {
        right: "-3.8rem",
        "@media (max-width: 767px)": { right: "0.75rem" },
      },
    }),
  );

  if (!products?.length) return null;

  return wrapSSR(
    <div className="carousel-wrapper">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-container">
        <button
          className="carousel-button carousel-button-left"
          onClick={() => scroll("left")}
        >
          <ArrowLeftOutlined />
        </button>

        <div
          ref={scrollContainerRef}
          className="carousel-scroll hide-scrollbar"
        >
          {products.map((product) => (
            <Link href={`/${locale}/product/${product.slug}`} key={product.id}>
              <div className="carousel-item">
                <Image
                  src={getStrapiImageLink(product?.cover_image?.url)}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  width={350}
                  height={300}
                />
                <div className="carousel-item-name">{product.name}</div>
              </div>
            </Link>
          ))}
        </div>

        <button
          className="carousel-button carousel-button-right"
          onClick={() => scroll("right")}
        >
          <ArrowRightOutlined />
        </button>
      </div>
    </div>,
  );
};

export default ProductCarousel;
