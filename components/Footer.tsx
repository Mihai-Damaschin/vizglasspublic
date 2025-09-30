import { CSSProperties } from "react";
import { colors } from "@/lib/colors";
import Image from "next/image";

const Footer = () => {
  const footerStyle: CSSProperties = {
    background: colors.dark,
    padding: "60px 60px 30px",
    color: colors.text.primary,
  };

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "40px",
  };

  const logoStyle: CSSProperties = {
    height: "150px",
  };

  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const copyrightStyle: CSSProperties = {
    textAlign: "center",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: `1px solid ${colors.background.overlay}`,
    opacity: 0.7,
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div>
          <img src="/viz-glass-logo.png" alt="VIZ GLASS" style={logoStyle} />
        </div>

        <div style={infoStyle}>
          <p style={{ margin: 0, fontSize: "16px" }}>Premium Windows & Doors</p>
          <p style={{ margin: 0, opacity: 0.8 }}>Email: info@vizglass.com</p>
          <p style={{ margin: 0, opacity: 0.8 }}>Phone: +1 (555) 123-4567</p>
        </div>

        <div style={infoStyle}>
          <p style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>
            Follow Us
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a
              href="https://www.facebook.com/p/Vizglass-100063707346313/"
              style={{ color: colors.primary }}
            >
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com/vizglass.md/"
              style={{ color: colors.primary }}
            >
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} VIZ GLASS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
