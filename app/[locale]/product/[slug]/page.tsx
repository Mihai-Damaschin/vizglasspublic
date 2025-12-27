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
import { TLocales, locales } from "@/lib/constants";

// ISR: Revalidate every 3600 seconds (1 hour)
export const revalidate = 3600;

// Generate static params for all products across all locales
export async function generateStaticParams() {
  const params = [];

  for (const locale of locales) {
    const productsData = await strapiFetch("products", {
      fields: ["slug"],
      locale,
    });

    const slugs = productsData?.data?.map((item: any) => ({
      locale,
      slug: item.attributes?.slug || item.slug,
    })) || [];

    params.push(...slugs);
  }

  return params;
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: TLocales }>;
}) => {
  const { slug, locale } = await params;

  const dict = await getDictionary(locale);

  const productData = await strapiFetch("products", {
    populate: {
      hardware: { populate: ["cover_photo"] },
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
          accessories={product.hardware}
          title={dict.accessories}
        />

        <CTASection product={product} dict={dict} />
      </ProductDetailsLayout>
    </>
  );
};

export default ProductPage;
