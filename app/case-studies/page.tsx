import { colors } from "@/lib/colors";
import { CSSProperties } from "react";
import Link from "next/link";

const CaseStudiesListPage = () => {
  const caseStudies = [
    {
      id: "modern-villa",
      title: "Modern Villa Transformation",
      description:
        "Complete window renovation with Smart PVC windows for a luxury villa.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      category: "Residential",
    },
    {
      id: "office-building",
      title: "Office Building Upgrade",
      description:
        "Aluminium window installation for a commercial office complex.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      category: "Commercial",
    },
    {
      id: "residential-complex",
      title: "Residential Complex",
      description:
        "Large-scale Optim Windows installation for affordable housing project.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      category: "Residential",
    },
  ];

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "100px",
    background: colors.background.light,
  };

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 60px 100px",
  };

  const titleStyle: CSSProperties = {
    fontSize: "48px",
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "20px",
    textAlign: "center",
  };

  const subtitleStyle: CSSProperties = {
    fontSize: "20px",
    color: colors.text.dark,
    opacity: 0.7,
    marginBottom: "60px",
    textAlign: "center",
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "30px",
  };

  const cardStyle: CSSProperties = {
    background: colors.light,
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "280px",
    objectFit: "cover",
  };

  const cardContentStyle: CSSProperties = {
    padding: "30px",
  };

  const categoryStyle: CSSProperties = {
    display: "inline-block",
    padding: "6px 16px",
    background: colors.primary,
    color: colors.light,
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: 600,
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const cardTitleStyle: CSSProperties = {
    fontSize: "24px",
    fontWeight: 600,
    color: colors.text.dark,
    marginBottom: "12px",
  };

  const cardDescStyle: CSSProperties = {
    fontSize: "16px",
    color: colors.text.dark,
    opacity: 0.7,
    lineHeight: "1.6",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>Case Studies</h1>
          <p style={subtitleStyle}>
            Explore our portfolio of successful window installations and
            transformations
          </p>

          <div style={gridStyle}>
            {caseStudies.map((study) => (
              <Link href={`/case-studies/${study.id}`} key={study.id}>
                <div
                  style={cardStyle}
                  // onMouseEnter={(e) => {
                  //   e.currentTarget.style.transform = "translateY(-10px)";
                  //   e.currentTarget.style.boxShadow =
                  //     "0 8px 30px rgba(0,0,0,0.15)";
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.currentTarget.style.transform = "translateY(0)";
                  //   e.currentTarget.style.boxShadow =
                  //     "0 4px 15px rgba(0,0,0,0.1)";
                  // }}
                >
                  <img src={study.image} alt={study.title} style={imageStyle} />
                  <div style={cardContentStyle}>
                    <span style={categoryStyle}>{study.category}</span>
                    <h3 style={cardTitleStyle}>{study.title}</h3>
                    <p style={cardDescStyle}>{study.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesListPage;
