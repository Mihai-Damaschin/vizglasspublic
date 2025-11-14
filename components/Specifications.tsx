"use client";

import { colors } from "@/lib/colors";

interface ISpecifications {
  specifications: any[];
  dict: any;
}

export const Specifications = ({
  specifications = [],
  dict,
}: ISpecifications) => (
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
      {dict.specifications}
    </h2>
    <div
      style={{
        display: "grid",
        gap: "1.25rem", // 20px
        background: colors.light,
        borderRadius: "1rem", // 16px
        boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.08)", // 0 4px 20px
        marginBottom: "5rem", // 80px
      }}
      className="specifications-grid"
    >
      {specifications?.map((spec: any, idx: number) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem", // 8px
          }}
        >
          <div
            style={{
              fontSize: "0.875rem", // 14px
              fontWeight: 600,
              color: colors.primary,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {spec.title}
          </div>
          <div
            style={{
              fontSize: "1.125rem", // 18px
              fontWeight: 500,
              color: colors.text.dark,
            }}
          >
            {spec.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);
