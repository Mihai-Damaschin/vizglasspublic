"use client";

import { CSSProperties, useState } from "react";
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { colors } from "@/lib/colors";

interface IContactContent {
  dict: any;
  countries: any;
}

export const ContactContent = ({ dict, countries }: IContactContent) => {
  const [url, setUrl] = useState(countries[0].mapUrl);

  const mapContainerStyle: CSSProperties = {
    width: "100%",
    height: "500px",
    position: "relative",
    marginBottom: "60px",
  };

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 0 100px",
  };

  const titleStyle: CSSProperties = {
    fontSize: "48px",
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "20px",
    textAlign: "center",
  };

  const subtitleStyle: CSSProperties = {
    fontSize: "20px",
    color: colors.text.dark,
    opacity: 0.7,
    marginBottom: "60px",
    textAlign: "center",
  };

  const cardsContainerStyle: CSSProperties = {
    display: "flex",
    gap: "30px",
    marginBottom: "60px",
  };

  const countryCardStyle: CSSProperties = {
    background: colors.light,
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    flex: 1,
  };

  const countryTitleStyle: CSSProperties = {
    fontSize: "28px",
    fontWeight: 700,
    color: colors.primary,
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const infoRowStyle: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "18px",
    fontSize: "16px",
    color: colors.text.dark,
    lineHeight: "1.6",
  };

  const iconStyle: CSSProperties = {
    fontSize: "20px",
    color: colors.primary,
    marginTop: "2px",
  };

  return (
    <>
      <div style={mapContainerStyle}>
        <iframe
          src={url}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div style={contentStyle}>
        <h1 style={titleStyle}>{dict.contact.title}</h1>{" "}
        <p style={subtitleStyle}>{dict.contact.subtitle}</p>
        {/* Country Cards */}
        <div style={cardsContainerStyle}>
          {countries.map((country) => (
            <div
              key={country.lat}
              style={countryCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
              }}
              onClick={() => setUrl(country.mapUrl)}
            >
              <h3 style={countryTitleStyle}>
                <EnvironmentOutlined /> {country.name}
              </h3>
              <div style={infoRowStyle}>
                <EnvironmentOutlined style={iconStyle} />
                <span>{country.address}</span>
              </div>
              {country.phone.map((phone) => (
                <div style={infoRowStyle} key={phone}>
                  <PhoneOutlined style={iconStyle} />
                  <a
                    href={`tel:${phone}`}
                    style={{
                      color: colors.text.dark,
                      textDecoration: "none",
                    }}
                  >
                    {phone}
                  </a>
                </div>
              ))}
              <div style={infoRowStyle}>
                <ClockCircleOutlined style={iconStyle} />
                <span>{country.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
