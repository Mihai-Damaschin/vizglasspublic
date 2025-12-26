"use client";

import { CSSProperties, useState, useEffect } from "react";
import Image from "next/image";
import { Dropdown, MenuProps, Drawer, Menu } from "antd";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { strapiQueries } from "@/services/strapi";
import { colors } from "@/lib/colors";
import { locales } from "@/lib/constants";
import { Dictionary } from "@/lib/types";

const HEADER_OFFSET = 90;

interface IHeader {
  dict: Dictionary;
}

const Header = ({ dict }: IHeader) => {
  const pathname = usePathname();
  const { locale = "en" } = useParams();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

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
      sort: "order:asc",
      locale,
    }),
  );

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

  const hamburgerContainerStyle: CSSProperties = {
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
    background: "#ffffff",
    transition: "all 300ms ease-in-out",
  };

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
            style: { padding: "10px 14px" },
            children: product_category.header_brands.length
              ? product_category.header_brands.map((header_brand) => ({
                  key:
                    "" + productType.id + product_category.id + header_brand.id,
                  label: getLinkIfExists(
                    `/${locale}/brand/${header_brand.brand?.slug}`,
                    header_brand.name,
                    header_brand.brand?.slug,
                  ),
                  style: { padding: "10px 14px" },
                  children: header_brand.products.map((product) => ({
                    key:
                      "" +
                      productType.id +
                      product_category.id +
                      header_brand.id +
                      product.id,
                    label: getLinkIfExists(
                      `/${locale}/product/${product?.slug}`,
                      product.name,
                      product.slug,
                    ),
                    style: { padding: "10px 14px" },
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
      key: "finished-works",
      label: (
        <Link href={`/${locale}/finished-works`} onClick={handleCloseMobileMenu}>
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
    <header
      style={headerStyle}
      className="px-[20px] py-[20px] md:py-[20px] md:px-[60px] fade-down"
    >
      <Link href={`/${locale}`} onClick={handleCloseMobileMenu}>
        <Image
          src="/viz-glass-logo.png"
          alt="VIZ GLASS"
          style={logoStyle}
          width={50}
          height={50}
        />
      </Link>

      <nav style={navStyle} className="hidden md:flex">
        <Link
          href={`/${locale}/about-us`}
          onMouseEnter={() => setHoveredKey("about")}
          onMouseLeave={() => setHoveredKey(null)}
          style={
            pathname.startsWith(`/${locale}/about-us`) || hoveredKey === "about"
              ? activeLinkStyle
              : linkStyle
          }
        >
          {dict.navigation.aboutUs}
        </Link>

        <Dropdown
          menu={{
            items: productsMenu,
            style: { padding: "12px 6px" }
          }}
          trigger={["hover"]}
          overlayStyle={{ minWidth: "220px" }}
          placement="bottomRight"
        >
          <span
            onMouseEnter={() => setHoveredKey("products")}
            onMouseLeave={() => setHoveredKey(null)}
            style={
              pathname.startsWith(`/${locale}/product`) ||
              hoveredKey === "products"
                ? activeLinkStyle
                : linkStyle
            }
          >
            {dict.navigation.products}
          </span>
        </Dropdown>

        <Link
          href={`/${locale}/finished-works`}
          onMouseEnter={() => setHoveredKey("finished-works")}
          onMouseLeave={() => setHoveredKey(null)}
          style={
            pathname.startsWith(`/${locale}/finished-works`) ||
            hoveredKey === "finished-works"
              ? activeLinkStyle
              : linkStyle
          }
        >
          {dict.navigation.caseStudies}
        </Link>

        <Link
          href={`/${locale}/gallery`}
          onMouseEnter={() => setHoveredKey("gallery")}
          onMouseLeave={() => setHoveredKey(null)}
          style={
            pathname.startsWith(`/${locale}/gallery`) ||
            hoveredKey === "gallery"
              ? activeLinkStyle
              : linkStyle
          }
        >
          {dict.gallery}
        </Link>

        <Link
          href={`/${locale}/contact`}
          onMouseEnter={() => setHoveredKey("contact")}
          onMouseLeave={() => setHoveredKey(null)}
          style={
            pathname.startsWith(`/${locale}/contact`) ||
            hoveredKey === "contact"
              ? activeLinkStyle
              : linkStyle
          }
        >
          {dict.navigation.contact}
        </Link>
      </nav>

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
                        width={32}
                        height={32}
                        style={{ borderRadius: "100%", display: "block" }}
                        className="w-[32px] h-[32px] my-1"
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
                width={32}
                height={32}
                style={{ borderRadius: "100%", display: "block" }}
                className="w-[32px] h-[32px]"
              />
            </div>
          </Dropdown>
        </div>

        <div style={hamburgerContainerStyle} className="flex md:hidden">
          <div
            onClick={() => setIsOpenMobileMenu((prev) => !prev)}
            style={hamburgerIconStyle}
          >
            <span
              style={{
                ...hamburgerBarBaseStyle,
                top: isOpenMobileMenu ? 9 : 3,
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
    </header>
  );
};

export default Header;
