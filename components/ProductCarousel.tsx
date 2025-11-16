"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { colors } from "@/lib/colors";
import { getStrapiImageLink } from "@/lib/links";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 352;
      scrollContainerRef.current.scrollTo({
        left:
          scrollContainerRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  if (!products?.length) return null;

  return (
    <div className="py-20">
      <h2
        className="text-[2.625rem] font-bold text-center mb-[50px]"
        style={{ color: colors.text.dark }}
      >
        {title}
      </h2>

      <div className="relative max-w-[88.5rem] mx-auto">
        <button
          onClick={() => scroll("left")}
          className="
            absolute top-[46%] -translate-y-1/2 z-10
            rounded-full w-[3.125rem] h-[3.125rem]
            flex items-center justify-center
            shadow-[0_2px_10px_rgba(0,0,0,0.2)] left-1 md:-left-[3.8rem]
          "
          style={{ background: colors.primary, color: colors.light }}
        >
          <ArrowLeftOutlined />
        </button>

        <div
          ref={scrollContainerRef}
          className="
            flex gap-5 overflow-x-auto hide-scrollbar
            pt-2 px-4 pb-8 translate-0 md:-translate-x-4 w-full md:w-[calc(100%+1rem)] m-0 md:m-0
          "
        >
          {products.map((product) => (
            <Link href={`/${locale}/product/${product.slug}`} key={product.id}>
              <div
                className="
                  bg-white rounded-xl overflow-hidden
                  shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                  transition-transform duration-300 ease-in-out
                  relative cursor-pointer flex-shrink-0
                  w-[16rem] h-[16rem] md:w-[22rem] md:h-[22rem]
                  hover:scale-[1.03]
                "
              >
                <Image
                  src={getStrapiImageLink(product?.cover_image?.url)}
                  alt={product.name}
                  width={350}
                  height={300}
                  className="w-full h-full object-cover"
                />

                <div
                  className="
                    absolute top-2 right-2
                    px-2 py-1 font-bold rounded-xl
                    text-white
                  "
                  style={{ background: colors.primary }}
                >
                  {product.name}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="
            accessories-button-right
            absolute top-[46%] -translate-y-1/2 z-10
            rounded-full w-[3.125rem] h-[3.125rem]
            flex items-center justify-center
            shadow-[0_2px_10px_rgba(0,0,0,0.2)] right-1 md:-right-[3.8rem]
          "
          style={{ background: colors.primary, color: colors.light }}
        >
          <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
