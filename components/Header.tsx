"use client";

import { useState, useEffect, CSSProperties } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { colors } from "@/lib/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pvcWindowsMenu: MenuProps["items"] = [
    { key: "smart", label: <Link href="/product/smart">Smart Windows</Link> },
    {
      key: "premium",
      label: <Link href="/product/premium">Premium Windows</Link>,
    },
    { key: "optim", label: <Link href="/product/optim">Optim Windows</Link> },
  ];

  const aluminiumWindowsMenu: MenuProps["items"] = [
    {
      key: "alu-classic",
      label: <Link href="/product/alu-classic">Classic Aluminium</Link>,
    },
    {
      key: "alu-modern",
      label: <Link href="/product/alu-modern">Modern Aluminium</Link>,
    },
  ];

  const productsMenu: MenuProps["items"] = [
    {
      key: "pvc",
      label: "PVC Windows",
      children: pvcWindowsMenu,
    },
    {
      key: "aluminium",
      label: "Aluminium Windows",
      children: aluminiumWindowsMenu,
    },
  ];

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

  return (
    <header style={headerStyle}>
      <Link href="/">
        <img src="/viz-glass-logo.png" alt="VIZ GLASS" style={logoStyle} />
      </Link>

      <nav style={navStyle}>
        <Dropdown
          menu={{ items: productsMenu }}
          trigger={["hover"]}
          overlayStyle={{ minWidth: "200px" }}
          placement="bottomRight"
        >
          <span
            style={pathname.includes("/product") ? activeLinkStyle : linkStyle}
          >
            Products
          </span>
        </Dropdown>
        <Link
          href="/case-studies"
          style={pathname === "/case-studies" ? activeLinkStyle : linkStyle}
        >
          Case Studies
        </Link>
        <Link
          href="/contact"
          style={pathname === "/contact" ? activeLinkStyle : linkStyle}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
