"use client";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { CSSProperties, useRef } from "react";
import { colors } from "@/lib/colors";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface IAccessoriesCarousel {
  accessories: Product[];
  title: string;
}

export const AccessoriesCarousel = ({
  accessories,
  title,
}: IAccessoriesCarousel) => {
  if (!accessories?.length) return null;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const containerStyle: CSSProperties = {
    padding: "5rem 0", // 80px 60px
  };

  const titleStyle: CSSProperties = {
    fontSize: "2.625rem", // 42px
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "3.125rem", // 50px
    textAlign: "center",
  };

  const carouselContainerStyle: CSSProperties = {
    position: "relative",
    maxWidth: "87.5rem", // 1400px
    margin: "0 auto",
  };

  const scrollContainerStyle: CSSProperties = {
    display: "flex",
    gap: "1.25rem",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    padding: "0.625rem 1rem 1.875rem 1rem",
    transform: "translate(-1rem)",
    width: "calc(100% + 1rem)",
  };

  const buttonStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: colors.primary,
    border: "none",
    borderRadius: "50%",
    width: "3.125rem", // 50px
    height: "3.125rem", // 50px
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: colors.light,
    fontSize: "1.25rem", // 20px
    boxShadow: "0 0.125rem 0.625rem rgba(0,0,0,0.2)", // 0 2px 10px
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={carouselContainerStyle}>
        <button
          style={{ ...buttonStyle, left: "-3.8rem" }}
          onClick={() => scroll("left")}
        >
          <ArrowLeftOutlined />
        </button>

        <div
          ref={scrollContainerRef}
          style={scrollContainerStyle}
          className="hide-scrollbar"
        >
          {accessories.map((accessory) => (
            <div
              style={{
                background: colors.light,
                borderRadius: "0.75rem", // 12px
                overflow: "hidden",
                boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.1)", // 0 4px 20px
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                flexShrink: 0,
                position: "relative",
                width: "20rem",
                height: "20rem",
              }}
              key={accessory.id}
              className="vcard"
            >
              <Image
                src={
                  accessory.cover_photo?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_URL +
                      accessory.cover_photo?.url
                    : "/viz-glass-logo.png"
                }
                alt={accessory.name}
                style={{
                  width: "100%",
                  height: "100%", // 300px
                  objectFit: "cover",
                }}
                width={350}
                height={300}
              />

              <div
                style={{
                  padding: "0.5rem", // 30px
                  position: "absolute",
                  top: "0.5rem",
                  right: "0.5rem",
                  backgroundColor: colors.primary,
                  borderRadius: "0.75rem",
                  color: colors.light,
                  fontWeight: "bold",
                }}
              >
                {accessory.name}
              </div>
            </div>
          ))}
        </div>

        <button
          style={{ ...buttonStyle, right: "-3.8rem" }}
          onClick={() => scroll("right")}
        >
          <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
};
