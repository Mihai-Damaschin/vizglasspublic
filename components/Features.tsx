import { CSSProperties } from "react";
import { colors } from "@/lib/colors";

interface IFeatures {
  features: any[];
}

export const Features = ({ features = [] }: IFeatures) => {
  const sectionTitleStyle: CSSProperties = {
    fontSize: "40px",
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "20px",
    textAlign: "center",
  };

  const featuresGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "80px",
  };

  const featureCardStyle: CSSProperties = {
    background: colors.light,
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "default",
  };

  const featureIconStyle: CSSProperties = {
    fontSize: "40px",
    color: colors.primary,
    marginBottom: "20px",
  };

  const featureTitleStyle: CSSProperties = {
    fontSize: "22px",
    fontWeight: 600,
    color: colors.text.dark,
    marginBottom: "12px",
  };

  const featureDescStyle: CSSProperties = {
    fontSize: "16px",
    color: colors.text.dark,
    opacity: 0.7,
    lineHeight: "1.6",
  };

  return (
    <div>
      <h2 style={sectionTitleStyle}>Key Features</h2>
      <div style={featuresGridStyle}>
        {features?.map((feature: any, index: number) => (
          <div
            key={index}
            style={featureCardStyle}
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
            {/* No icon in new format; keep the slot if you expect icons sometimes */}
            <div style={featureIconStyle}>{feature.icon ?? null}</div>
            <h3 style={featureTitleStyle}>{feature.title}</h3>
            <p style={featureDescStyle}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
