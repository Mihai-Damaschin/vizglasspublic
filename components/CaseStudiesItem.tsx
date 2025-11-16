"use client";

import { colors } from "@/lib/colors";
import { Gallery } from "@/components/Gallery";

type Props = {
  caseStudy: Record<string, any>;
  dict: any;
};

export const CaseStudiesItem = ({ caseStudy, dict }: Props) => {
  return (
    <div
      style={{
        maxWidth: "88.5rem",
        margin: "0 auto",
        padding: "60px 60px 100px",
      }}
      className="case-studies-content"
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          color: colors.text.dark,
          marginBottom: 40,
        }}
      >
        {caseStudy.title}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 30,
          marginBottom: 50,
          padding: 30,
          background: "white",
          borderRadius: 12,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "0.875rem",
              color: colors.text.dark,
              marginBottom: 8,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Client
          </span>
          <span
            style={{
              fontSize: "1.125rem",
              color: colors.text.dark,
              fontWeight: 500,
            }}
          >
            {caseStudy.client}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "0.875rem",
              color: colors.text.dark,
              marginBottom: 8,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Location
          </span>
          <span
            style={{
              fontSize: "1.125rem",
              color: colors.text.dark,
              fontWeight: 500,
            }}
          >
            {caseStudy.location}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "0.875rem",
              color: colors.text.dark,
              marginBottom: 8,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Duration
          </span>
          <span
            style={{
              fontSize: "1.125rem",
              color: colors.text.dark,
              fontWeight: 500,
            }}
          >
            {caseStudy.duration}
          </span>
        </div>
      </div>

      <p
        style={{
          fontSize: "1.25rem",
          color: colors.text.dark,
          opacity: 0.85,
          lineHeight: 1.8,
          marginBottom: 60,
        }}
      >
        {caseStudy.description}
      </p>

      <Gallery media={caseStudy.media} titleTextAlign="left" dict={dict} />
    </div>
  );
};
