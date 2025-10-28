import Link from "next/link";
import { Button } from "antd";
import { CSSProperties } from "react";
import { colors } from "@/lib/colors";

interface ICTASection {
  product: any;
}

export const CTASection = ({ product }: ICTASection) => {
  const ctaSectionStyle: CSSProperties = {
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
    padding: "80px 60px",
    borderRadius: "20px",
    textAlign: "center",
    color: colors.light,
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
  };

  const ctaTitleStyle: CSSProperties = {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "20px",
  };

  const ctaDescStyle: CSSProperties = {
    fontSize: "20px",
    opacity: 0.95,
    marginBottom: "40px",
    maxWidth: "600px",
    margin: "0 auto 40px",
    lineHeight: "1.7",
  };

  const ctaButtonsStyle: CSSProperties = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const primaryCtaButtonStyle: CSSProperties = {
    height: "60px",
    fontSize: "18px",
    padding: "0 50px",
    background: colors.light,
    color: colors.primary,
    border: "none",
    fontWeight: 600,
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  };

  const secondaryCtaButtonStyle: CSSProperties = {
    height: "60px",
    fontSize: "18px",
    padding: "0 50px",
    background: "transparent",
    color: colors.light,
    border: `2px solid ${colors.light}`,
    fontWeight: 600,
  };

  return (
    <div style={ctaSectionStyle}>
      <h2 style={ctaTitleStyle}>Ready to Transform Your Home?</h2>
      <p style={ctaDescStyle}>
        Get a free consultation and quote for your {product.name}. Our experts
        are ready to help you make the best choice.
      </p>

      <div style={ctaButtonsStyle}>
        <Link href="/contact">
          <Button size="large" style={primaryCtaButtonStyle}>
            Contact Us
          </Button>
        </Link>

        <Link href="/case-studies">
          <Button size="large" style={secondaryCtaButtonStyle}>
            View Case Studies
          </Button>
        </Link>
      </div>
    </div>
  );
};
