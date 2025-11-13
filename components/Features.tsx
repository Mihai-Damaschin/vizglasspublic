"use client";

import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { colors } from "@/lib/colors";

const { useToken } = theme;

interface IFeatures {
  features: any[];
  dict: any;
}

export const Features = ({ features = [], dict }: IFeatures) => {
  if (!features.length) return null;

  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["Features"] },
    () => ({
      ".features-title": {
        fontSize: "2.5rem", // 40px
        fontWeight: 700,
        color: colors.text.dark,
        marginBottom: "1.25rem", // 20px
        textAlign: "center",
      },
      ".features-grid": {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(21.875rem, 1fr))", // 350px
        gap: "1.875rem", // 30px
        marginBottom: "5rem", // 80px
      },
      ".feature-card": {
        background: colors.light,
        padding: "2.5rem", // 40px
        borderRadius: "1rem", // 16px
        boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.08)", // 0 4px 20px
        transition: "all 0.3s ease",
        cursor: "default",
      },
      ".feature-icon": {
        fontSize: "2.5rem", // 40px
        color: colors.primary,
        marginBottom: "1.25rem", // 20px
      },
      ".feature-title": {
        fontSize: "1.375rem", // 22px
        fontWeight: 600,
        color: colors.text.dark,
        marginBottom: "0.75rem", // 12px
      },
      ".feature-description": {
        fontSize: "1rem", // 16px
        color: colors.text.dark,
        opacity: 0.7,
        lineHeight: 1.6,
      },
      "@media (max-width: 767px)": {
        ".features-grid": {
          gridTemplateColumns: "repeat(auto-fill, minmax(18.75, 1fr))", // 300px
        },
        ".features-title": {
          fontSize: "2rem",
        },
        ".feature-card": {
          padding: "1.25rem",
        },
      },
    }),
  );

  return wrapSSR(
    <div>
      <h2 className="features-title">{dict.keyFeatures}</h2>
      <div className="features-grid">
        {features.map((feature: any, index: number) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon ?? null}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>,
  );
};
