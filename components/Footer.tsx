import { CSSProperties } from "react";
import { colors } from "@/lib/colors";
import Image from "next/image";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";

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

  const iconStyle: CSSProperties = {
    fontSize: "20px",
    color: colors.primary,
    marginTop: "2px",
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div>
          <Image
            src="/viz-glass-logo.png"
            alt="VIZ GLASS"
            style={logoStyle}
            width={150}
            height={150}
          />
        </div>

        <div style={infoStyle}>
          <p style={{ margin: 0, fontSize: "16px" }}>Moldova</p>
          <p style={{ margin: 0, opacity: 0.8 }}>
            <EnvironmentOutlined style={iconStyle} /> Strada Codrilor 16,
            Chișinău
          </p>
          <p style={{ margin: 0, opacity: 0.8 }}>
            <PhoneOutlined style={iconStyle} />{" "}
            <a
              href="tel:+37379977227"
              style={{
                color: colors.text.primary,
              }}
            >
              +373 79 977 227
            </a>
          </p>
          <p style={{ margin: 0, opacity: 0.8 }}>
            <PhoneOutlined style={iconStyle} />{" "}
            <a
              href="tel:+37369916008"
              style={{
                color: colors.text.primary,
              }}
            >
              +373 69 916 008
            </a>
          </p>
        </div>

        <div style={infoStyle}>
          <p style={{ margin: 0, fontSize: "16px" }}>Italy</p>
          <p style={{ margin: 0, opacity: 0.8 }}>
            <PhoneOutlined style={iconStyle} />{" "}
            <a
              href="tel:+393899188936"
              style={{
                color: colors.text.primary,
              }}
            >
              +39 38 991 88 936
            </a>
          </p>
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
