import { colors } from "@/lib/colors";
import { Button } from "antd";
import ProductCarousel from "@/components/ProductCarousel";
import { CSSProperties } from "react";
import Link from "next/link";

const HomePage = () => {
  const pvcProducts = [
    {
      id: "smart",
      name: "Smart Windows",
      description:
        "Energy-efficient PVC windows with smart home integration and automated control systems.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
      id: "premium",
      name: "Premium Windows",
      description:
        "Luxury PVC windows with superior insulation and elegant design for modern homes.",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    },
    {
      id: "optim",
      name: "Optim Windows",
      description:
        "Cost-effective PVC windows without compromising on quality and durability.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
    {
      id: "classic",
      name: "Classic Windows",
      description:
        "Traditional PVC windows with timeless design and modern performance.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    },
  ];

  const aluminiumProducts = [
    {
      id: "alu-classic",
      name: "Classic Aluminium",
      description:
        "Durable aluminium windows with sleek profiles and excellent weather resistance.",
      image:
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
    },
    {
      id: "alu-modern",
      name: "Modern Aluminium",
      description:
        "Contemporary aluminium windows with minimalist design and maximum glass area.",
      image: "/fereastra-al.jpg",
    },
    {
      id: "alu-premium",
      name: "Premium Aluminium",
      description:
        "High-end aluminium windows with advanced thermal break insulation technology.",
      image:
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
    },
  ];

  const caseStudies = [
    {
      id: "modern-villa",
      title: "Modern Villa Transformation",
      description:
        "Complete window renovation with Smart PVC windows for a luxury villa.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    },
    {
      id: "office-building",
      title: "Office Building Upgrade",
      description:
        "Aluminium window installation for a commercial office complex.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
    },
    {
      id: "residential-complex",
      title: "Residential Complex",
      description:
        "Large-scale Optim Windows installation for affordable housing project.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
  ];

  const heroStyle: CSSProperties = {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  };

  const videoStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
    position: "relative",
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

  const caseStudiesSectionStyle: CSSProperties = {
    padding: "5rem 3.75rem", // 80px 60px
    background: colors.dark,
  };

  const sectionTitleStyle: CSSProperties = {
    fontSize: "2.625rem", // 42px
    fontWeight: 700,
    color: colors.text.primary,
    marginBottom: "3.125rem", // 50px
    textAlign: "center",
  };

  const caseStudiesGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(21.875rem, 1fr))", // 350px
    gap: "1.875rem", // 30px
    maxWidth: "87.5rem", // 1400px
    margin: "0 auto",
  };

  const caseStudyCardStyle: CSSProperties = {
    background: colors.background.light,
    borderRadius: "0.75rem", // 12px
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const caseStudyImageStyle: CSSProperties = {
    width: "100%",
    height: "15.625rem", // 250px
    objectFit: "cover",
  };

  const caseStudyContentStyle: CSSProperties = {
    padding: "1.5625rem", // 25px
  };

  const caseStudyTitleStyle: CSSProperties = {
    fontSize: "1.375rem", // 22px
    fontWeight: 600,
    color: colors.text.dark,
    marginBottom: "0.75rem", // 12px
  };

  const caseStudyDescStyle: CSSProperties = {
    fontSize: "1rem", // 16px
    color: colors.text.dark,
    opacity: 0.7,
    lineHeight: "1.6",
  };

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <video autoPlay loop muted playsInline style={videoStyle}>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div style={overlayStyle}></div>
        {/*<div style={heroContentStyle}>*/}
        {/*  <h1 style={heroTitleStyle}>Premium Windows & Doors</h1>*/}
        {/*  <p style={heroSubtitleStyle}>*/}
        {/*    Transform your space with VIZ GLASS - Where innovation meets*/}
        {/*    elegance in every window*/}
        {/*  </p>*/}
        {/*  <Link href="/contact">*/}
        {/*    <Button*/}
        {/*      type="primary"*/}
        {/*      size="large"*/}
        {/*      style={{*/}
        {/*        height: "55px",*/}
        {/*        fontSize: "18px",*/}
        {/*        padding: "0 50px",*/}
        {/*        background: colors.primary,*/}
        {/*        borderColor: colors.primary,*/}
        {/*        fontWeight: 600,*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Get a Quote*/}
        {/*    </Button>*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </section>

      {/* PVC Windows Section */}
      <ProductCarousel products={pvcProducts} title="PVC Windows Collection" />

      {/* Case Studies Preview */}
      <section style={caseStudiesSectionStyle}>
        <h2 style={sectionTitleStyle}>Featured Case Studies</h2>
        <div style={caseStudiesGridStyle}>
          {caseStudies.map((study) => (
            <Link href={`/case-studies/${study.id}`} key={study.id}>
              <div
                style={caseStudyCardStyle}
                // onMouseEnter={(e) => {
                //   e.currentTarget.style.transform = "translateY(-10px)";
                // }}
                // onMouseLeave={(e) => {
                //   e.currentTarget.style.transform = "translateY(0)";
                // }}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  style={caseStudyImageStyle}
                />
                <div style={caseStudyContentStyle}>
                  <h3 style={caseStudyTitleStyle}>{study.title}</h3>
                  <p style={caseStudyDescStyle}>{study.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Aluminium Windows Section */}
      <ProductCarousel
        products={aluminiumProducts}
        title="Aluminium Windows Collection"
      />
    </>
  );
};

export default HomePage;
