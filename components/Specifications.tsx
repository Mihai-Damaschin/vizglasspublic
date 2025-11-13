import { CSSProperties } from "react";
import { colors } from "@/lib/colors";

interface ISpecifications {
  specifications: any[];
  dict: any;
}

export const Specifications = ({
  specifications = [],
  dict,
}: ISpecifications) => {
  if (!specifications.length) return null;

  const sectionTitleStyle: CSSProperties = {
    fontSize: "40px",
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "20px",
    textAlign: "center",
  };

  const specsGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    background: colors.light,
    padding: "50px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    marginBottom: "80px",
  };

  const specItemStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const specLabelStyle: CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const specValueStyle: CSSProperties = {
    fontSize: "18px",
    fontWeight: 500,
    color: colors.text.dark,
  };

  return (
    <div>
      <h2 style={sectionTitleStyle}>{dict.specifications}</h2>
      <div style={specsGridStyle}>
        {specifications?.map((spec: any, idx: number) => (
          <div key={idx} style={specItemStyle}>
            <div style={specLabelStyle}>{spec.title}</div>
            <div style={specValueStyle}>{spec.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
