import { CSSProperties } from "react";
import Image from "next/image";
import ProductCarousel from "@/components/ProductCarousel";
import { strapiFetch } from "@/lib/requests";
import { CaseStudies } from "@/components/CaseStudies";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import HomeHeroContent from "@/components/HomeHeroContent";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { TLocales } from "@/lib/constants";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: TLocales }>;
}) => {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  const heroStyle: CSSProperties = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  };

  const overlayStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(26, 26, 26, 0.3)",
  };

  const windowProductsData = await strapiFetch("products", {
    populate: "*",
    sort: "order:asc",
    filters: {
      type: "window",
    },
    locale,
  });

  const doorProductsData = await strapiFetch("products", {
    populate: "*",
    sort: "order:asc",
    filters: {
      type: "door",
    },
    locale,
  });

  const caseStudiesData = await strapiFetch("case-studies", {
    populate: "*",
    sort: "createdAt:desc",
    filters: {
      show_on_home: true,
    },
    locale,
  });

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/viz-glass-hero.jpg"
          width={1920}
          height={1000}
          alt={dict.hero.alt}
          sizes="(max-width: 768px) 100vw"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(26,26,26,0.3)]" />

        <HomeHeroContent
          title={dict.hero.title}
          subtitle={dict.hero.subtitle}
        />
      </section>

      <ProductCarousel
        products={windowProductsData?.data}
        title={dict.pvcWindowsProductCarouselTitle}
      />

      <WhyChooseUs dict={dict} />

      <section className="relative flex items-center justify-center py-20 px-6 text-white bg-[url('/paralax-bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black/55 z-0" />

        <div className="relative z-10 w-full text-center">
          <CaseStudies
            caseStudies={caseStudiesData?.data}
            title={dict.caseStudies}
          />
        </div>
      </section>

      <ProductCarousel
        products={doorProductsData?.data}
        title={dict.pvcDoorsProductCarouselTitle}
      />
    </>
  );
};

export default HomePage;
