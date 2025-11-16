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
      className="cta-section py-10 px-5 md:py-20 md:px-15 rounded-[20px] text-center text-[var(--color-light)] shadow-[0_10px_40px_rgba(0,0,0,0.15)] bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-secondary)_100%)]"
      style={styles}
    >
      <h2 className="text-[2rem] md:text-[2.625rem] font-bold mb-5">
        {dict.cta.title}
      </h2>

      <p className="text-[1.125rem] md:text-[1.25rem] opacity-95 leading-[1.7] max-w-[600px] mx-auto mb-10">
        {dict.cta.descPrefix}
        {product?.name
          ? `${dict.cta.forYour} ${product.name}${
              dict.cta.forYourSuffix ? " " + dict.cta.forYourSuffix : ""
            }`
          : ""}
        . {dict.cta.descSuffix}
      </p>

      <div className="flex gap-5 justify-center flex-wrap">
        <Link href={`/${locale}/contact`}>
          <Button
            size="large"
            style={{
              height: "60px",
              padding: "0 50px",
              background: colors.light,
              color: colors.primary,
              border: "none",
              fontWeight: 600,
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            }}
            className="text-[1.125rem]"
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
            className="text-[1.125rem]"
          >
            {dict.cta.viewCaseStudies}
          </Button>
        </Link>
      </div>
    </div>
  );
};
