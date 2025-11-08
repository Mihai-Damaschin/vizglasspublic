"use client";

import { CSSProperties, useState, useEffect } from "react";
import { Dropdown, MenuProps, Grid, Drawer, Menu } from "antd";
import { colors } from "@/lib/colors";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { strapiQueries } from "@/services/strapi";
import Image from "next/image";
import { locales } from "@/lib/constants";

const { useBreakpoint } = Grid;
const HEADER_OFFSET = 90;

interface IHeader {
  dict: any;
}

const Header = ({ dict }: IHeader) => {
  const pathname = usePathname();
  const { locale = "en" } = useParams();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleCloseMobileMenu = () => setIsOpenMobileMenu(false);

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

  useEffect(() => {
    if (isOpenMobileMenu) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpenMobileMenu]);

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
    padding: `20px ${isMobile ? 20 : 60}px`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle: CSSProperties = {
    height: "50px",
    cursor: "pointer",
    display: "block",
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

  // Mobile hamburger styles
  const hamburgerContainerStyle: CSSProperties = {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  };

  const hamburgerIconStyle: CSSProperties = {
    position: "relative",
    height: 18,
    width: 24,
    transition: "transform 300ms ease-in-out",
  };

  const hamburgerBarBaseStyle: CSSProperties = {
    position: "absolute",
    left: 0,
    height: 1.25,
    width: "100%",
    borderRadius: 4,
    background: "#ffffff", // gray-800
    transition: "all 300ms ease-in-out",
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

  return (
    <header style={headerStyle} suppressHydrationWarning>
      <Link href={`/${locale}`} onClick={handleCloseMobileMenu}>
        <Image
          src="/viz-glass-logo.png"
          alt="VIZ GLASS"
          style={logoStyle}
          width={50}
          height={50}
        />
      </Link>

      {!isMobile && (
        <nav style={navStyle}>
          <Link
            href={`/${locale}/about-us`}
            style={pathname === "/about-us" ? activeLinkStyle : linkStyle}
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
              style={
                pathname.includes("/product") ? activeLinkStyle : linkStyle
              }
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
      )}

      <div style={{ display: "flex", gap: "24px" }}>
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
                        style={{ borderRadius: "100%", display: "block" }}
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
                style={{ borderRadius: "100%", display: "block" }}
              />
            </div>
          </Dropdown>
        </div>

        {isMobile && (
          <div
            style={hamburgerContainerStyle}
            onClick={() => setIsOpenMobileMenu((prev) => !prev)}
          >
            <div style={hamburgerIconStyle}>
              <span
                style={{
                  ...hamburgerBarBaseStyle,
                  top: isOpenMobileMenu ? 9 : 4,
                  transform: isOpenMobileMenu ? "rotate(135deg)" : "rotate(0)",
                }}
              />
              <span
                style={{
                  ...hamburgerBarBaseStyle,
                  top: 9,
                  left: isOpenMobileMenu ? -50 : 0,
                  opacity: isOpenMobileMenu ? 0 : 1,
                }}
              />
              <span
                style={{
                  ...hamburgerBarBaseStyle,
                  top: isOpenMobileMenu ? 9 : 14,
                  transform: isOpenMobileMenu ? "rotate(-135deg)" : "rotate(0)",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {isMobile && (
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
      )}
    </header>
  );
};

export default Header;
