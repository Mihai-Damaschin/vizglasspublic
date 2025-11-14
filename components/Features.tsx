"use client";

import { colors } from "@/lib/colors";

interface IFeatures {
  features: any[];
  dict: any;
}

export const Features = ({ features = [], dict }: IFeatures) => {
  if (!features.length) return null;

  return (
    <div>
      <h2
        style={{
          fontSize: "2.5rem", // 40px
          fontWeight: 700,
          color: colors.text.dark,
          marginBottom: "1.25rem", // 20px
          textAlign: "center",
        }}
      >
        {dict.keyFeatures}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1.875rem", // 30px
          marginBottom: "5rem", // 80px
        }}
        className="features-grid"
      >
        {features.map((feature: any, index: number) => (
          <div
            key={index}
            style={{
              width: "100%",
              background: colors.light,
              borderRadius: "1rem", // 16px
              boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.08)", // 0 4px 20px
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            className="feature-card"
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.transform = "translateY(-8px)";
            //   e.currentTarget.style.boxShadow =
            //     "0 12px 35px rgba(0,0,0,0.15)";
            // }}
            // onMouseLeave={(e) => {
            //   e.currentTarget.style.transform = "translateY(0)";
            //   e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
            // }}
          >
            <div
              style={{
                fontSize: "2.5rem", // 40px
                color: colors.primary,
                marginBottom: "1.25rem", // 20px
              }}
            >
              {feature.icon ?? null}
            </div>
            <h3
              style={{
                fontSize: "1.375rem", // 22px
                fontWeight: 600,
                color: colors.text.dark,
                marginBottom: "0.75rem", // 12px
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: "1rem", // 16px
                color: colors.text.dark,
                opacity: 0.7,
                lineHeight: 1.6,
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
