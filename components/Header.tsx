"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dropdown, MenuProps, Drawer, Menu, theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { strapiQueries } from "@/services/strapi";
import { colors } from "@/lib/colors";
import { locales } from "@/lib/constants";

const { useToken } = theme;
const HEADER_OFFSET = 90;

interface IHeader {
  dict: any;
}

const Header = ({ dict }: IHeader) => {
  const pathname = usePathname();
  const { locale = "en" } = useParams();
  const { token, theme } = useToken();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleCloseMobileMenu = () => setIsOpenMobileMenu(false);

  useEffect(() => {
    if (isOpenMobileMenu) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpenMobileMenu]);

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

  const wrapSSR = useStyleRegister({ theme, token, path: ["Header"] }, () => ({
    header: {
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
      "@media (max-width: 767px)": {
        padding: "20px 20px",
      },
    },
    ".logo": {
      height: "50px",
      cursor: "pointer",
      display: "block",
    },
    nav: {
      display: "flex",
      gap: "40px",
      alignItems: "center",
      "@media (max-width: 767px)": {
        display: "none",
      },
    },
    ".nav-link": {
      color: colors.text.primary,
      fontSize: "16px",
      fontWeight: 500,
      textDecoration: "none",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    ".nav-link.active": {
      color: colors.primary,
    },
    ".lang-switcher": {
      display: "flex",
      gap: "24px",
      alignItems: "center",
      cursor: "pointer",
      "@media (max-width: 767px)": { gap: "16px" },
    },
    ".lang-image": {
      borderRadius: "100%",
      display: "block",
    },
    // Mobile hamburger styles
    ".hamburger-container": {
      display: "none",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      "@media (max-width: 767px)": {
        display: "flex",
      },
    },
    ".hamburger-icon": {
      position: "relative",
      height: 18,
      width: 24,
      transition: "transform 300ms ease-in-out",
    },
    ".hamburger-bar": {
      position: "absolute",
      left: 0,
      height: 1.5,
      width: "100%",
      borderRadius: 4,
      background: "#ffffff",
      transition: "all 300ms ease-in-out",
    },
  }));

  const getLinkIfExists = (link: string, name: string, slug?: string) =>
    !slug ? name : <Link href={link}>{name}</Link>;

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

  const mobileMenuItems: MenuProps["items"] = [
    {
      key: "about-us",
      label: (
        <Link href={`/${locale}/about-us`} onClick={handleCloseMobileMenu}>
          {dict.navigation.aboutUs}
        </Link>
      ),
    },
    {
      key: "products",
      label: dict.navigation.products,
      children: productsMenu as NonNullable<MenuProps["items"]>,
    },
    {
      key: "case-studies",
      label: (
        <Link href={`/${locale}/case-studies`} onClick={handleCloseMobileMenu}>
          {dict.navigation.caseStudies}
        </Link>
      ),
    },
    {
      key: "gallery",
      label: (
        <Link href={`/${locale}/gallery`} onClick={handleCloseMobileMenu}>
          {dict.gallery}
        </Link>
      ),
    },
    {
      key: "contact",
      label: (
        <Link href={`/${locale}/contact`} onClick={handleCloseMobileMenu}>
          {dict.navigation.contact}
        </Link>
      ),
    },
  ];

  return wrapSSR(
    <header>
      <Link href={`/${locale}`} onClick={handleCloseMobileMenu}>
        <Image
          src="/viz-glass-logo.png"
          alt="VIZ GLASS"
          className="logo"
          width={50}
          height={50}
        />
      </Link>

      <nav>
        <Link
          href={`/${locale}/about-us`}
          className={`nav-link ${pathname === "/about-us" ? "active" : ""}`}
        >
          {dict.navigation.aboutUs}
        </Link>

        <Dropdown
          menu={{ items: productsMenu, style: { padding: "12px 6px" } }}
          trigger={["hover"]}
          overlayStyle={{ minWidth: "200px" }}
          placement="bottomRight"
        >
          <span
            className={`nav-link ${
              pathname.includes("/product") ? "active" : ""
            }`}
          >
            {dict.navigation.products}
          </span>
        </Dropdown>

        <Link
          href={`/${locale}/case-studies`}
          className={`nav-link ${pathname === "/case-studies" ? "active" : ""}`}
        >
          {dict.navigation.caseStudies}
        </Link>

        <Link
          href={`/${locale}/gallery`}
          className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}
        >
          {dict.gallery}
        </Link>

        <Link
          href={`/${locale}/contact`}
          className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
        >
          {dict.navigation.contact}
        </Link>
      </nav>

      <div className="lang-switcher">
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
                      className="lang-image"
                    />
                  </Link>
                ),
                key: i,
              })),
          }}
          placement="bottomRight"
        >
          <Image
            src={`https://flagcdn.com/h40/${locale === "en" ? "us" : locale}.webp`}
            alt="flag"
            width={30}
            height={30}
            className="lang-image"
          />
        </Dropdown>

        <div className="hamburger-container">
          <div
            onClick={() => setIsOpenMobileMenu((prev) => !prev)}
            className="hamburger-icon"
          >
            <span
              className="hamburger-bar"
              style={{
                top: isOpenMobileMenu ? 9 : 3,
                transform: isOpenMobileMenu ? "rotate(135deg)" : "rotate(0)",
              }}
            />
            <span
              className="hamburger-bar"
              style={{
                top: 9,
                left: isOpenMobileMenu ? -50 : 0,
                opacity: isOpenMobileMenu ? 0 : 1,
              }}
            />
            <span
              className="hamburger-bar"
              style={{
                top: isOpenMobileMenu ? 9 : 15,
                transform: isOpenMobileMenu ? "rotate(-135deg)" : "rotate(0)",
              }}
            />
          </div>
        </div>
      </div>
      <Drawer
        open={isOpenMobileMenu}
        onClose={handleCloseMobileMenu}
        width="100%"
        title={null}
        closable={false}
        destroyOnHidden={true}
        styles={{
          content: {
            marginTop: HEADER_OFFSET,
            height: `calc(100dvh - ${HEADER_OFFSET}px)`,
            overflow: "hidden",
          },
          body: {
            paddingLeft: 0,
            paddingRight: 0,
            height: "100%",
            overflowY: "auto",
          },
          mask: { inset: `${HEADER_OFFSET}px 0 0 0` },
          header: { display: "none" },
        }}
      >
        <Menu
          items={mobileMenuItems}
          mode="inline"
          inlineIndent={16}
          onClick={handleCloseMobileMenu}
        />
      </Drawer>
    </header>,
  );
};

export default Header;
