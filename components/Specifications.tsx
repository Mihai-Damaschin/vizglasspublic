"use client";

import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { colors } from "@/lib/colors";

const { useToken } = theme;

interface ISpecifications {
  specifications: any[];
  dict: any;
}

export const Specifications = ({
  specifications = [],
  dict,
}: ISpecifications) => {
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["Specifications"] },
    () => ({
      ".specifications-title": {
        fontSize: "2.5rem", // 40px
        fontWeight: 700,
        color: colors.text.dark,
        marginBottom: "1.25rem", // 20px
        textAlign: "center",
      },
      ".specifications-grid": {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(15.625rem, 1fr))", // 250px → 15.625rem
        gap: "1.25rem", // 20px
        background: colors.light,
        padding: "3.125rem", // 50px
        borderRadius: "1rem", // 16px
        boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.08)", // 0 4px 20px
        marginBottom: "5rem", // 80px
      },
      ".spec-item": {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem", // 8px
      },
      ".spec-label": {
        fontSize: "0.875rem", // 14px
        fontWeight: 600,
        color: colors.primary,
        textTransform: "uppercase",
        letterSpacing: "1px",
      },
      ".spec-value": {
        fontSize: "1.125rem", // 18px
        fontWeight: 500,
        color: colors.text.dark,
      },
      "@media (max-width: 767px)": {
        ".specifications-grid": {
          gridTemplateColumns: "1fr",
          padding: "3.125rem 1.25rem",
        },
      },
    }),
  );

  return wrapSSR(
    <div>
      <h2 className="specifications-title">{dict.specifications}</h2>
      <div className="specifications-grid">
        {specifications?.map((spec: any, idx: number) => (
          <div key={idx} className="spec-item">
            <div className="spec-label">{spec.title}</div>
            <div className="spec-value">{spec.description}</div>
          </div>
        ))}
      </div>
    </div>,
  );
};
