"use client";

import { useState, CSSProperties } from "react";
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
  };

  const contentStyle: CSSProperties = {
    maxWidth: "88.5rem",
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
    flexWrap: "wrap",
    gap: "30px",
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
      {/* MAP CONTAINER */}
      <div className="w-full h-[500px] relative">
        <iframe
          src={url}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-[88.5rem] mx-auto py-[60px] pb-[100px]">
        {/* TITLE */}
        <h1 className="text-[48px] font-bold text-[var(--text-dark)] mb-5 text-center">
          {dict.contact.title}
        </h1>

        {/* SUBTITLE */}
        <p className="text-[20px] text-[var(--text-dark)] opacity-70 mb-[60px] text-center">
          {dict.contact.subtitle}
        </p>

        {/* CARDS CONTAINER */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-[30px]">
          {countries.map((country) => (
            <div
              key={country.lat}
              className="
              bg-[var(--light)]
              p-10
              rounded-[12px]
              shadow-[0_4px_20px_rgba(0,0,0,0.1)]
              transition-all duration-300
              cursor-pointer flex-1
              hover:-translate-y-[5px]
              hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
            "
              onClick={() => setUrl(country.mapUrl)}
            >
              {/* COUNTRY TITLE */}
              <h3 className="text-[28px] font-bold text-[var(--color-primary)] mb-[25px] flex items-center gap-[10px]">
                <EnvironmentOutlined />
                {country.name}
              </h3>

              {/* ADDRESS */}
              <div className="flex items-start gap-3 mb-[18px] text-[16px]  leading-[1.6]">
                <EnvironmentOutlined
                  className="text-[20px] mt-[2px]"
                  style={{ color: "var(--color-primary)" }}
                />
                <span>{country.address}</span>
              </div>

              {/* PHONES */}
              {country.phone.map((phone: string) => (
                <div
                  key={phone}
                  className="flex items-start gap-3 mb-[18px] text-[16px] leading-[1.6]"
                >
                  <PhoneOutlined
                    className="text-[20px] mt-[2px]"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <a
                    href={`tel:${phone}`}
                    className="text-[var(--text-dark)] no-underline"
                  >
                    {phone}
                  </a>
                </div>
              ))}

              {/* HOURS */}
              <div className="flex items-start gap-3 mb-[18px] text-[16px]  leading-[1.6]">
                <ClockCircleOutlined
                  className="text-[20px] mt-[2px]"
                  style={{ color: "var(--color-primary)" }}
                />
                <span>{country.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
