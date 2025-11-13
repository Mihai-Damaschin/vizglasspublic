"use client";

import { useState } from "react";
import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";
import { colors } from "@/lib/colors";

const { useToken } = theme;

interface IContactContent {
  dict: any;
  countries: any;
}

export const ContactContent = ({ dict, countries }: IContactContent) => {
  const [url, setUrl] = useState(countries[0].mapUrl);

  const { token, theme } = useToken();
  const wrapSSR = useStyleRegister(
    { theme, token, path: ["ContactContent"] },
    () => ({
      ".map-container": {
        width: "100%",
        height: "500px",
        position: "relative",
        marginBottom: "60px",
      },

      ".content": {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "60px 20px 100px",
      },

      ".title": {
        fontSize: "48px",
        fontWeight: 700,
        color: colors.text.dark,
        marginBottom: "20px",
        textAlign: "center",
      },

      ".subtitle": {
        fontSize: "20px",
        color: colors.text.dark,
        opacity: 0.7,
        marginBottom: "60px",
        textAlign: "center",
      },

      ".cards-container": {
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        marginBottom: "60px",
        "@media (max-width: 767px)": {
          flexDirection: "column",
        },
      },

      ".country-card": {
        background: colors.light,
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        flex: 1,
        minWidth: "350px",

        "@media (max-width: 576px)": {
          minWidth: "100%",
        },
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        },
      },

      ".country-title": {
        fontSize: "28px",
        fontWeight: 700,
        color: colors.primary,
        marginBottom: "25px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },

      ".info-row": {
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "18px",
        fontSize: "16px",
        color: colors.text.dark,
        lineHeight: "1.6",
      },

      ".icon": {
        fontSize: "20px",
        color: colors.primary,
        marginTop: "2px",
      },

      a: {
        color: colors.text.dark,
        textDecoration: "none",
        ":hover": {
          color: colors.primary,
        },
      },
    }),
  );

  return wrapSSR(
    <>
      <div className="map-container">
        <iframe
          src={url}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="content">
        <h1 className="title">{dict.contact.title}</h1>
        <p className="subtitle">{dict.contact.subtitle}</p>

        <div className="cards-container">
          {countries.map((country) => (
            <div
              key={country.lat}
              className="country-card"
              onClick={() => setUrl(country.mapUrl)}
            >
              <h3 className="country-title">
                <EnvironmentOutlined /> {country.name}
              </h3>

              <div className="info-row">
                <EnvironmentOutlined className="icon" />
                <span>{country.address}</span>
              </div>

              {country.phone.map((phone: string) => (
                <div className="info-row" key={phone}>
                  <PhoneOutlined className="icon" />
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              ))}

              <div className="info-row">
                <ClockCircleOutlined className="icon" />
                <span>{country.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>,
  );
};
