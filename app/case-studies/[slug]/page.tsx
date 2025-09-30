'use client'

import { CSSProperties } from "react";
import { Image } from "antd";
import { useParams } from "next/navigation";
import { colors } from "@/lib/colors";

const CaseStudyPage = () => {
  const { studyId } = useParams();

  // Mock case study data
  const caseStudyData: { [key: string]: any } = {
    "modern-villa": {
      title: "Modern Villa Transformation",
      client: "Private Residence",
      location: "Beverly Hills, CA",
      duration: "3 months",
      description:
        "Complete window renovation with Smart PVC windows for a luxury villa. This project involved replacing all existing windows with our Smart Windows system, integrating them with the home automation system for optimal energy efficiency and comfort.",
      beforeImages: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
      ],
      afterImages: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      ],
    },
    "office-building": {
      title: "Office Building Upgrade",
      client: "Tech Corporation",
      location: "San Francisco, CA",
      duration: "6 months",
      description:
        "Aluminium window installation for a commercial office complex. The project focused on maximizing natural light while maintaining energy efficiency across the entire building.",
      beforeImages: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      ],
      afterImages: [
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
      ],
    },
    // Add more case studies as needed
  };

  const caseStudy =
    caseStudyData[studyId as string] || caseStudyData["modern-villa"];

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "100px",
    backgroundColor: colors.background.light
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

  const sectionTitleStyle: CSSProperties = {
    fontSize: "32px",
    fontWeight: 600,
    color: colors.text.dark,
    marginBottom: "30px",
    marginTop: "60px",
  };

  const galleryStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    marginBottom: "60px",
  };

  const imageWrapperStyle: CSSProperties = {
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>{caseStudy.title}</h1>

          {/* Project Info */}
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

          {/* Before Section */}
          <h2 style={sectionTitleStyle}>Before</h2>
          <Image.PreviewGroup>
            <div style={galleryStyle}>
              {caseStudy.beforeImages.map((image: string, index: number) => (
                <div
                  key={index}
                  style={imageWrapperStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={image}
                    alt={`Before ${index + 1}`}
                    style={imageStyle}
                    preview={{
                      mask: "View Image",
                    }}
                  />
                </div>
              ))}
            </div>
          </Image.PreviewGroup>

          {/* After Section */}
          <h2 style={sectionTitleStyle}>After</h2>
          <Image.PreviewGroup>
            <div style={galleryStyle}>
              {caseStudy.afterImages.map((image: string, index: number) => (
                <div
                  key={index}
                  style={imageWrapperStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={image}
                    alt={`After ${index + 1}`}
                    style={imageStyle}
                    preview={{
                      mask: "View Image",
                    }}
                  />
                </div>
              ))}
            </div>
          </Image.PreviewGroup>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
