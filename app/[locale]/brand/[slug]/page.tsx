import { CSSProperties } from "react";
import { ProductHero } from "@/components/ProductHero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { CTASection } from "@/components/CTASection";
import { strapiFetch } from "@/lib/requests";
import { notFound } from "next/navigation";
import ProductCarousel from "@/components/ProductCarousel";
import { TLocales } from "@/lib/constants";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { ProductDetailsLayout } from "@/components/ProductDetailsLayout";

const BrandPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: TLocales }>;
}) => {
  const { slug, locale } = await params;

  const dict = await getDictionary(locale);

  const brandData = await strapiFetch("brands", {
    populate: {
      products: {
        populate: ["cover_image"],
      },
      key_features: {
        populate: "*",
      },
      media: {
        populate: "*",
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
    locale,
  });

  const brand = brandData?.data?.[0];

  if (!brand) {
    notFound();
  }

  console.log(brand, "product");

  return (
    <>
      <ProductHero product={brand} />

      <ProductDetailsLayout>
        <Features features={brand.key_features} dict={dict} />

        <Gallery media={brand.media} dict={dict} />

        <ProductCarousel products={brand.products} title="Products" />

        <CTASection product={brand} dict={dict} />
      </ProductDetailsLayout>
    </>
  );
};

export default BrandPage;
