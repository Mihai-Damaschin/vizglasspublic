"use client";

import Link from "next/link";
import { Button } from "antd";
import { colors } from "@/lib/colors";
import { useParams } from "next/navigation";

interface ICTASection {
  dict: any;
  product?: any;
  styles?: { borderRadius: string };
}

export const CTASection = ({ dict, product, styles }: ICTASection) => {
  const { locale } = useParams();

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        padding: "5rem 3.75rem",
        borderRadius: styles?.borderRadius || "20px",
        textAlign: "center",
        color: colors.light,
        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
      }}
      className="cta-section"
    >
      <h2
        style={{
          fontSize: "2.625rem", // 42px
          fontWeight: 700,
          marginBottom: "1.25rem", // 20px
        }}
      >
        {dict.cta.title}
      </h2>
      <p
        style={{
          fontSize: "1.25rem", // 20px
          opacity: 0.95,
          lineHeight: 1.7,
          maxWidth: "37.5rem", // 600px
          margin: "0 auto 2.5rem", // 0 auto 40px
        }}
      >
        {dict.cta.descPrefix}
        {product?.name
          ? `${dict.cta.forYour} ${product.name}${
              dict.cta.forYourSuffix ? " " + dict.cta.forYourSuffix : ""
            }`
          : ""}
        . {dict.cta.descSuffix}
      </p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link href={`/${locale}/contact`}>
          <Button
            size="large"
            style={{
              height: "60px",
              fontSize: "18px",
              padding: "0 50px",
              background: colors.light,
              color: colors.primary,
              border: "none",
              fontWeight: 600,
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            }}
          >
            {dict.cta.contactUs}
          </Button>
        </Link>
        <Link href={`/${locale}/case-studies`}>
          <Button
            size="large"
            style={{
              height: "60px",
              fontSize: "18px",
              padding: "0 50px",
              background: "transparent",
              color: colors.light,
              border: `2px solid ${colors.light}`,
              fontWeight: 600,
            }}
          >
            {dict.cta.viewCaseStudies}
          </Button>
        </Link>
      </div>
    </div>
  );
};
