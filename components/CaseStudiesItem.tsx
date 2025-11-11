"use client";

import { theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";
import { colors } from "@/lib/colors";
import { Gallery } from "@/components/Gallery";

const { useToken } = theme;
type Props = {
  caseStudy: Record<string, any>;
  dict: any;
};

export const CaseStudiesItem = ({ caseStudy, dict }: Props) => {
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["CaseStudiesItem"] },
    () => ({
      ".case-studies-content": {
        maxWidth: 1400,
        margin: "0 auto",
        padding: "60px 60px 100px",

        "@media (max-width: 767px)": {
          padding: "40px 20px",
        },
      },

      ".case-studies-title": {
        fontSize: 48,
        fontWeight: 700,
        color: colors.text.dark,
        marginBottom: 40,
      },

      ".case-studies-info-grid": {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 30,
        marginBottom: 50,
        padding: 30,
        background: "white",
        borderRadius: 12,
      },

      ".case-studies-info-item": {
        display: "flex",
        flexDirection: "column",
      },

      ".case-studies-info-label": {
        fontSize: 14,
        color: colors.text.dark,
        marginBottom: 8,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "1px",
      },

      ".case-studies-info-value": {
        fontSize: 18,
        color: colors.text.dark,
        fontWeight: 500,
      },

      ".case-studies-description": {
        fontSize: 20,
        color: colors.text.dark,
        opacity: 0.85,
        lineHeight: 1.8,
        marginBottom: 60,
      },
    }),
  );

  return wrapSSR(
    <div className="case-studies-content">
      <h1 className="case-studies-title">{caseStudy.title}</h1>

      <div className="case-studies-info-grid">
        <div className="case-studies-info-item">
          <span className="case-studies-info-label">Client</span>
          <span className="case-studies-info-value">{caseStudy.client}</span>
        </div>
        <div className="case-studies-info-item">
          <span className="case-studies-info-label">Location</span>
          <span className="case-studies-info-value">{caseStudy.location}</span>
        </div>
        <div className="case-studies-info-item">
          <span className="case-studies-info-label">Duration</span>
          <span className="case-studies-info-value">{caseStudy.duration}</span>
        </div>
      </div>

      <p className="case-studies-description">{caseStudy.description}</p>

      <Gallery media={caseStudy.media} titleTextAlign="left" dict={dict} />
    </div>,
  );
};
