"use client";

import { CSSProperties } from "react";
import { Dropdown, MenuProps } from "antd";
import { colors } from "@/lib/colors";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { strapiQueries } from "@/services/strapi";
import Image from "next/image";
import { locales } from "@/lib/constants";

interface IHeader {
  dict: any;
}

const Header = ({ dict }: IHeader) => {
  const pathname = usePathname();
  const { locale = "en" } = useParams();

  const { data: headerData } = useQuery(
    strapiQueries.getAllProductTypes({
      populate: {
        product_categories: {
          populate: {
            header_brands: {
              populate: {
                products: {
                  fields: ["name", "slug"],
                },
                brand: { fields: ["name", "slug"] },
              },
            },
          },
        },
      },
      sort: "createdAt:asc",
      locale,
    }),
  );

  console.log(headerData, "headerData");

  const headerStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: colors.background.overlay,
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    padding: "20px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle: CSSProperties = {
    height: "50px",
    cursor: "pointer",
  };

  const navStyle: CSSProperties = {
    display: "flex",
    gap: "40px",
    alignItems: "center",
  };

  const linkStyle: CSSProperties = {
    color: colors.text.primary,
    fontSize: "16px",
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  const activeLinkStyle: CSSProperties = {
    ...linkStyle,
    color: colors.primary,
  };

  const getLinkIfExists = (link: string, name: string, slug?: string) => {
    if (!slug) return name;

    return <Link href={link}>{name}</Link>;
  };

  const productsMenu: MenuProps["items"] = headerData?.data?.map(
    (productType) => ({
      key: productType.id,
      label: getLinkIfExists(
        `/${locale}/${productType?.slug}`,
        productType.name,
        productType.slug,
      ),
      children: productType.product_categories.length
        ? productType.product_categories?.map((product_category) => ({
            key: "" + productType.id + product_category.id,
            label: getLinkIfExists(
              `/${locale}/${product_category?.slug}`,
              product_category.name,
              product_category.slug,
            ),
            children: product_category.header_brands.length
              ? product_category.header_brands.map((brand) => ({
                  key: "" + productType.id + product_category.id + brand.id,
                  label: getLinkIfExists(
                    `/${locale}/brand/${brand?.slug}`,
                    brand.name,
                    brand.slug,
                  ),
                  children: brand.products.map((product) => ({
                    key:
                      "" +
                      productType.id +
                      product_category.id +
                      brand.id +
                      product.id,
                    label: getLinkIfExists(
                      `/${locale}/product/${product?.slug}`,
                      product.name,
                      product.slug,
                    ),
                  })),
                }))
              : undefined,
          }))
        : undefined,
    }),
  );

  return (
    <header style={headerStyle}>
      <Link href={`/${locale}`}>
        <Image
          src="/viz-glass-logo.png"
          alt="VIZ GLASS"
          style={logoStyle}
          width={50}
          height={50}
        />
      </Link>

      <nav style={navStyle}>
        <Link
          href={`/${locale}/about-us`}
          style={pathname === "/about-us" ? activeLinkStyle : linkStyle}
        >
          {dict.navigation.aboutUs}
        </Link>
        <Dropdown
          menu={{ items: productsMenu }}
          trigger={["hover"]}
          overlayStyle={{ minWidth: "200px" }}
          placement="bottomRight"
        >
          <span
            style={pathname.includes("/product") ? activeLinkStyle : linkStyle}
          >
            {dict.navigation.products}
          </span>
        </Dropdown>
        <Link
          href={`/${locale}/case-studies`}
          style={pathname === "/case-studies" ? activeLinkStyle : linkStyle}
        >
          {dict.navigation.caseStudies}
        </Link>
        <Link
          href={`/${locale}/gallery`}
          style={pathname === "/gallery" ? activeLinkStyle : linkStyle}
        >
          {dict.gallery}
        </Link>
        <Link
          href={`/${locale}/contact`}
          style={pathname === "/contact" ? activeLinkStyle : linkStyle}
        >
          {dict.navigation.contact}
        </Link>
      </nav>

      <div style={{ cursor: "pointer" }}>
        <Dropdown
          menu={{
            items: locales
              .filter((i) => i !== locale)
              .map((i) => ({
                label: (
                  <Link href={`/${i}`}>
                    <Image
                      src={`https://flagcdn.com/h40/${i === "en" ? "us" : i}.webp`}
                      alt="flag"
                      width={30}
                      height={30}
                      style={{ borderRadius: "100%" }}
                    />
                  </Link>
                ),
                key: i,
              })),
          }}
          placement="bottomRight"
        >
          <div>
            <Image
              src={`https://flagcdn.com/h40/${locale === "en" ? "us" : locale}.webp`}
              alt="flag"
              width={30}
              height={30}
              style={{ borderRadius: "100%" }}
            />
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
