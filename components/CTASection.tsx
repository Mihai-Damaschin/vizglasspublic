"use client";

import Link from "next/link";
import { Button } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { colors } from "@/lib/colors";
import { useParams } from "next/navigation";

const { useToken } = theme;

interface ICTASection {
  dict: any;
  product?: any;
  styles?: { borderRadius: string };
}

export const CTASection = ({ dict, product, styles }: ICTASection) => {
  const { locale } = useParams();
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["CTASection"] },
    () => ({
      ".cta-section": {
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        padding: "5rem 3.75rem", // 80px 60px
        borderRadius: styles?.borderRadius || "1.25rem", // 20px
        textAlign: "center",
        color: colors.light,
        boxShadow: "0 0.625rem 2.5rem rgba(0,0,0,0.15)", // 0 10px 40px
      },
      ".cta-title": {
        fontSize: "2.625rem", // 42px
        fontWeight: 700,
        marginBottom: "1.25rem", // 20px
      },
      ".cta-desc": {
        fontSize: "1.25rem", // 20px
        opacity: 0.95,
        lineHeight: 1.7,
        maxWidth: "37.5rem", // 600px
        margin: "0 auto 2.5rem", // 0 auto 40px
      },
      ".cta-buttons": {
        display: "flex",
        gap: "1.25rem", // 20px
        justifyContent: "center",
        flexWrap: "wrap",
      },
      ".cta-button-primary": {
        height: "3.75rem", // 60px
        fontSize: "1.125rem", // 18px
        padding: "0 3.125rem", // 0 50px
        background: colors.light,
        color: colors.primary,
        border: "none",
        fontWeight: 600,
        boxShadow: "0 0.375rem 1.25rem rgba(0,0,0,0.15)", // 0 6px 20px
      },
      ".cta-button-secondary": {
        height: "3.75rem", // 60px
        fontSize: "1.125rem", // 18px
        padding: "0 3.125rem", // 0 50px
        background: "transparent",
        color: colors.light,
        border: `2px solid ${colors.light}`,
        fontWeight: 600,
      },
      "@media (max-width: 767px)": {
        ".cta-section": {
          padding: "5rem 1.25rem", // 80px 20px
        },
        ".cta-buttons": {
          gap: "0.75rem", // 12px
        },
      },
    }),
  );

  return wrapSSR(
    <div className="cta-section">
      <h2 className="cta-title">{dict.cta.title}</h2>
      <p className="cta-desc">
        {dict.cta.descPrefix}
        {product?.name
          ? `${dict.cta.forYour} ${product.name}${
              dict.cta.forYourSuffix ? " " + dict.cta.forYourSuffix : ""
            }`
          : ""}
        . {dict.cta.descSuffix}
      </p>
      <div className="cta-buttons">
        <Link href={`/${locale}/contact`}>
          <Button size="large" className="cta-button-primary">
            {dict.cta.contactUs}
          </Button>
        </Link>
        <Link href={`/${locale}/case-studies`}>
          <Button size="large" className="cta-button-secondary">
            {dict.cta.viewCaseStudies}
          </Button>
        </Link>
      </div>
    </div>,
  );
};
