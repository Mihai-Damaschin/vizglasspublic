"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { getStrapiImageLink } from "@/lib/links";
import { colors } from "@/lib/colors";
import { useParams } from "next/navigation";

interface ICaseStudies {
  caseStudies: any[];
  title?: string;
  description?: string;
  titleColor?: string;
}

export const CaseStudies = ({
  caseStudies = [],
  title,
  description,
  titleColor = colors.text.primary,
}: ICaseStudies) => {
  const { locale } = useParams()

  const sectionTitleStyle: CSSProperties = {
    fontSize: "2.625rem",
    fontWeight: 700,
    color: titleColor,
    marginBottom: "3.125rem",
    textAlign: "center",
  };

  const caseStudiesGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(21.875rem, 1fr))",
    gap: "1.875rem",
    maxWidth: "88.5rem",
    margin: "0 auto",
  };

  const caseStudyCardStyle: CSSProperties = {
    background: colors.background.light,
    borderRadius: "0.75rem",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    height: "100%",
  };

  const caseStudyImageStyle: CSSProperties = {
    width: "100%",
    height: "15.625rem",
    objectFit: "cover",
  };

  const caseStudyContentStyle: CSSProperties = {
    padding: "1.5625rem",
  };

  const caseStudyTitleStyle: CSSProperties = {
    fontSize: "1.375rem",
    fontWeight: 600,
    color: colors.text.dark,
    marginBottom: "0.75rem",
  };

  const caseStudyDescStyle: CSSProperties = {
    fontSize: "1rem", // 16px
    color: colors.text.dark,
    opacity: 0.7,
    lineHeight: "1.6",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const subtitleStyle: CSSProperties = {
    fontSize: "20px",
    color: colors.text.dark,
    opacity: 0.7,
    marginBottom: "60px",
    textAlign: "center",
  };

  return (
    <>
      <h2 style={sectionTitleStyle}>{title}</h2>

      {description && <p style={subtitleStyle}>{description}</p>}

      <div style={caseStudiesGridStyle}>
        {caseStudies?.map((caseStudy) => (
          <Link href={`/${locale}/finished-works/${caseStudy.slug}`} key={caseStudy.id}>
            <div style={caseStudyCardStyle} className="vcard">
              <Image
                src={getStrapiImageLink(caseStudy.cover_image?.url)}
                alt={caseStudy.title}
                style={caseStudyImageStyle}
                width={355}
                height={355}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 355px"
                loading="lazy"
                quality={85}
              />
              <div style={caseStudyContentStyle}>
                <h3 style={caseStudyTitleStyle}>{caseStudy.title}</h3>
                <p style={caseStudyDescStyle}>{caseStudy.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
