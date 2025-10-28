import { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { colors } from "@/lib/colors";
import { strapiFetch } from "@/lib/requests";
import { Gallery } from "@/components/Gallery";

const CaseStudyPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const caseStudyData = await strapiFetch("case-studies", {
    populate: "*",
    filters: {
      slug: {
        $eq: slug,
      },
    },
    pageSize: 6
  });

  const caseStudy = caseStudyData?.data?.[0];

  if (!caseStudy) {
    notFound();
  }

  console.log(caseStudy, "product");

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "100px",
    backgroundColor: colors.background.light,
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
    marginBottom: "40px",
  };

  const infoGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
    padding: "30px",
    background: "white",
    borderRadius: "12px",
  };

  const infoItemStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  const infoLabelStyle: CSSProperties = {
    fontSize: "14px",
    color: colors.text.dark,
    opacity: 0.6,
    marginBottom: "8px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const infoValueStyle: CSSProperties = {
    fontSize: "18px",
    color: colors.text.dark,
    fontWeight: 500,
  };

  const descriptionStyle: CSSProperties = {
    fontSize: "20px",
    color: colors.text.dark,
    opacity: 0.8,
    lineHeight: "1.8",
    marginBottom: "60px",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>{caseStudy.title}</h1>

          <div style={infoGridStyle}>
            <div style={infoItemStyle}>
              <span style={infoLabelStyle}>Client</span>
              <span style={infoValueStyle}>{caseStudy.client}</span>
            </div>
            <div style={infoItemStyle}>
              <span style={infoLabelStyle}>Location</span>
              <span style={infoValueStyle}>{caseStudy.location}</span>
            </div>
            <div style={infoItemStyle}>
              <span style={infoLabelStyle}>Duration</span>
              <span style={infoValueStyle}>{caseStudy.duration}</span>
            </div>
          </div>

          <p style={descriptionStyle}>{caseStudy.description}</p>

          <Gallery media={caseStudy.before_media} />

          <Gallery media={caseStudy.after_media} />
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
