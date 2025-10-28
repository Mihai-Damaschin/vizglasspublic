import { CSSProperties } from "react";
import { ProductHero } from "@/components/ProductHero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { CTASection } from "@/components/CTASection";
import { strapiFetch } from "@/lib/requests";
import { notFound } from "next/navigation";
import ProductCarousel from "@/components/ProductCarousel";

const BrandPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const brandData = await strapiFetch("brands", {
    populate: "*",
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const brand = brandData?.data?.[0];

  if (!brand) {
    notFound();
  }

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "80px 60px",
  };

  console.log(brand, "product");

  return (
    <>
      <ProductHero product={brand} />

      <div style={contentStyle} id="product-details">
        <Features features={brand.features} />

        <ProductCarousel products={brand.products} title="Products" />

        <Gallery media={brand.media} />

        <CTASection product={brand} />
      </div>
    </>
  );
};

export default BrandPage;
