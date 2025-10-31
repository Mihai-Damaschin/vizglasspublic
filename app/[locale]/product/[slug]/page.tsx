import { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { strapiFetch } from "@/lib/requests";
import { Gallery } from "@/components/Gallery";
import { Features } from "@/components/Features";
import { Specifications } from "@/components/Specifications";
import { CTASection } from "@/components/CTASection";
import { ProductHero } from "@/components/ProductHero";
import { Colors } from "@/components/Colors";
import { AccessoriesCarousel } from "@/components/AccessoriesCarousel";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { TLocales } from "@/lib/constants";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: TLocales }>;
}) => {
  const { slug, locale } = await params;

  const dict = await getDictionary(locale);

  const productData = await strapiFetch("products", {
    populate: {
      accessories: { populate: ["cover_photo"] },
      colors: { populate: ["cover_photo"] },
      specifications: { populate: "*" },
      media: { populate: "*" },
      features: { populate: "*" },
      cover_image: { populate: "*" },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const product = productData?.data?.[0];

  if (!product) {
    notFound();
  }

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "80px 60px",
  };

  console.log(product, "product");

  return (
    <>
      <ProductHero product={product} />

      <div style={contentStyle} id="product-details">
        <Features features={product.features} />

        <Gallery media={product.media} />

        <Specifications specifications={product.specifications} />

        <Colors colors={product.colors} />

        <AccessoriesCarousel
          accessories={product.accessories}
          title="Accesories"
        />

        <CTASection product={product} dict={dict} />
      </div>
    </>
  );
};

export default ProductPage;
