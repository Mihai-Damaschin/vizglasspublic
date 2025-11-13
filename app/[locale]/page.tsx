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
  });

  const doorProductsData = await strapiFetch("products", {
    populate: "*",
    sort: "order:asc",
    filters: {
      type: "door",
    },
  });

  const caseStudiesData = await strapiFetch("case-studies", {
    populate: "*",
    sort: "createdAt:desc",
    filters: {
      show_on_home: true,
    },
  });

  return (
    <>
      <section style={heroStyle}>
        <Image
          src="/viz-glass-hero.jpg"
          width={1920}
          height={1000}
          alt={dict.hero.alt}
          sizes="(max-width: 768px) 100vw"
        />

        <div style={overlayStyle} />

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

      <section
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem 1.50rem",
          color: "#fff",
          backgroundImage: "url('/paralax-bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            textAlign: "center",
          }}
        >
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
