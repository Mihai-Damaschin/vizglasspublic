import { CSSProperties } from "react";
import Image from "next/image";
import { colors } from "@/lib/colors";
import ProductCarousel from "@/components/ProductCarousel";
import { strapiFetch } from "@/lib/requests";
import { CaseStudies } from "@/components/CaseStudies";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const HomePage = async () => {
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

  const heroContentStyle: CSSProperties = {
    position: "absolute",
    top: "-22%",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: colors.text.primary,
    textAlign: "center",
    padding: "0 1.25rem", // 20px
  };

  const heroTitleStyle: CSSProperties = {
    fontSize: "4rem", // 64px
    fontWeight: 700,
    marginBottom: "1.25rem", // 20px
    textShadow: "0.125rem 0.125rem 0.25rem rgba(0,0,0,0.5)", // 2px 2px 4px
  };

  const heroSubtitleStyle: CSSProperties = {
    fontSize: "1.5rem", // 24px
    marginBottom: "2.5rem", // 40px
    opacity: 0.9,
    maxWidth: "43.75rem", // 700px
  };

  const productsData = await strapiFetch("products", {
    populate: "*",
    sort: "order:asc",
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
          alt="hero_img"
          sizes="(max-width: 768px) 100vw"
        />

        <div style={overlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Premium Windows & Doors</h1>
          <p style={heroSubtitleStyle}>
            Transform your space with VIZ GLASS - Where innovation meets
            elegance in every window
          </p>
        </div>
      </section>

      <ProductCarousel
        products={productsData?.data}
        title="PVC Windows Collection"
      />

      <WhyChooseUs />

      <section
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem 3.75rem",
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
          <CaseStudies caseStudies={caseStudiesData?.data} title="Featured Case Studies" />
        </div>
      </section>

      <ProductCarousel
        products={productsData?.data}
        title="Aluminium Windows Collection"
      />
    </>
  );
};

export default HomePage;
