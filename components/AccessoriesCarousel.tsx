"use client";

import { useRef } from "react";
import Image from "next/image";
import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { colors } from "@/lib/colors";

const { useToken } = theme;

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  cover_photo?: { url: string };
}

interface IAccessoriesCarousel {
  accessories: Product[];
  title: string;
}

export const AccessoriesCarousel = ({
  accessories,
  title,
}: IAccessoriesCarousel) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { token, theme } = useToken();

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

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["AccessoriesCarousel"] },
    () => ({
      ".accessories-wrapper": {
        padding: "5rem 0", // 80px
      },
      ".accessories-title": {
        fontSize: "2.625rem", // 42px
        fontWeight: 700,
        color: colors.text.dark,
        marginBottom: "3.125rem", // 50px
        textAlign: "center",
      },
      ".accessories-container": {
        position: "relative",
        maxWidth: "87.5rem", // 1400px
        margin: "0 auto",
      },
      ".accessories-scroll": {
        display: "flex",
        gap: "1.25rem", // 20px
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        padding: "0.625rem 1rem 1.875rem 1rem", // 10px 0 30px 0
        transform: "translate(-1rem)",
        width: "calc(100% + 1rem)",
      },
      ".accessories-item": {
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
      },
      ".accessories-item-name": {
        padding: "0.5rem",
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        backgroundColor: colors.primary,
        borderRadius: "0.75rem",
        color: colors.light,
        fontWeight: "bold",
      },
      ".accessories-button": {
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
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        "@media (max-width: 767px)": {
          bottom: "0.75rem",
        },
      },
      ".accessories-button-left": {
        left: "-3.8rem",
        "@media (max-width: 767px)": { left: "0.75rem" },
      },
      ".accessories-button-right": {
        right: "-3.8rem",
        "@media (max-width: 767px)": { right: "0.75rem" },
      },
    }),
  );

  if (!accessories?.length) return null;

  return wrapSSR(
    <div className="accessories-wrapper">
      <h2 className="accessories-title">{title}</h2>
      <div className="accessories-container">
        <button
          className="accessories-button accessories-button-left"
          onClick={() => scroll("left")}
        >
          <ArrowLeftOutlined />
        </button>

        <div
          ref={scrollContainerRef}
          className="accessories-scroll hide-scrollbar"
        >
          {accessories.map((accessory) => (
            <div className="accessories-item" key={accessory.id}>
              <Image
                src={
                  accessory.cover_photo?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_URL +
                      accessory.cover_photo?.url
                    : "/viz-glass-logo.png"
                }
                alt={accessory.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                width={350}
                height={300}
              />

              <div className="accessories-item-name">{accessory.name}</div>
            </div>
          ))}
        </div>

        <button
          className="accessories-button accessories-button-right"
          onClick={() => scroll("right")}
        >
          <ArrowRightOutlined />
        </button>
      </div>
    </div>,
  );
};
