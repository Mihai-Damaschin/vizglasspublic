"use client";

import { Button } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { CSSProperties, useRef } from "react";
import { colors } from "@/lib/colors";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
}

const ProductCarousel = ({ products, title }: ProductCarouselProps) => {
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
    padding: "80px 60px",
    background: colors.background.light,
  };

  const titleStyle: CSSProperties = {
    fontSize: "42px",
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "50px",
    textAlign: "center",
  };

  const carouselContainerStyle: CSSProperties = {
    position: "relative",
    maxWidth: "1400px",
    margin: "0 auto",
  };

  const scrollContainerStyle: CSSProperties = {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    padding: "10px 0 30px 0",
  };

  const cardStyle: CSSProperties = {
    background: colors.light,
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    minWidth: "350px",
    maxWidth: "350px",
    flexShrink: 0,
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  const contentStyle: CSSProperties = {
    padding: "30px",
  };

  const productTitleStyle: CSSProperties = {
    fontSize: "24px",
    fontWeight: 600,
    color: colors.text.dark,
    marginBottom: "15px",
  };

  const descriptionStyle: CSSProperties = {
    fontSize: "16px",
    color: colors.text.dark,
    opacity: 0.7,
    marginBottom: "20px",
    lineHeight: "1.6",
  };

  const buttonStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: colors.primary,
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: colors.light,
    fontSize: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={carouselContainerStyle}>
        <button
          style={{ ...buttonStyle, left: "-75px" }}
          onClick={() => scroll("left")}
        >
          <ArrowLeftOutlined />
        </button>

        <div
          ref={scrollContainerRef}
          style={scrollContainerStyle}
          className="hide-scrollbar"
        >
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={imageStyle}
                />
                <div style={contentStyle}>
                  <h3 style={productTitleStyle}>{product.name}</h3>
                  <p style={descriptionStyle}>{product.description}</p>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      background: colors.primary,
                      borderColor: colors.primary,
                      fontWeight: 600,
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          style={{ ...buttonStyle, right: "-75px" }}
          onClick={() => scroll("right")}
        >
          <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
