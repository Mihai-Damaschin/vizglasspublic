import { notFound } from "next/navigation";
import { strapiFetch } from "@/lib/requests";
import { Gallery } from "@/components/Gallery";
import { Features } from "@/components/Features";
import { Specifications } from "@/components/Specifications";
import { CTASection } from "@/components/CTASection";
import { ProductHero } from "@/components/ProductHero";
import { Colors } from "@/components/Colors";
import { AccessoriesCarousel } from "@/components/AccessoriesCarousel";
import { ProductDetailsLayout } from "@/components/ProductDetailsLayout";
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
    locale
  });

  const product = productData?.data?.[0];

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductHero product={product} />

      <ProductDetailsLayout>
        <Features features={product.features} dict={dict} />

        <Gallery media={product.media} dict={dict} />

        <Specifications specifications={product.specifications} dict={dict} />

        <Colors colors={product.colors} dict={dict} />

        <AccessoriesCarousel
          accessories={product.accessories}
          title={dict.accessories}
        />

        <CTASection product={product} dict={dict} />
      </ProductDetailsLayout>
    </>
  );
};

export default ProductPage;
