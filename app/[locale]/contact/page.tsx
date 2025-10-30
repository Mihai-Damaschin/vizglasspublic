"use client";

import {
  EnvironmentOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { CSSProperties, useState } from "react";
import { colors } from "@/lib/colors";

const ContactPage = () => {
  const countries = [
    {
      name: "Moldova",
      address: "Strada Codrilor 16, Chișinău",
      phone: ["+373 79 977 227", "+373 69 916 008"],
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.12258553384!2d28.7570138367765!3d47.038037647956266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97df8a72c0b15%3A0xc692862f891027cc!2sConstruct%20Depo!5e1!3m2!1sro!2s!4v1759251321854!5m2!1sro!2s",
      lat: 47.0105,
      lng: 28.8638,
    },
    {
      name: "Italy",
      address: "Strada Dimitrie Leonida 113C, Piatra Neamț 610183",
      phone: ["+39 38 991 88 936"],
      hours: "Monday - Friday: 8:00 AM - 5:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22505.650674858505!2d28.814637606108146!3d47.019919532674855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1761837694923!5m2!1sen!2s",
      lat: 46.9161,
      lng: 26.3884,
    },
    {
      name: "Italy",
      address: "Via Roma 45, 20121 Milano",
      phone: ["+39 38 991 88 936"],
      hours: "Monday - Friday: 9:00 AM - 6:00 PM",
      lat: 45.4642,
      lng: 9.19,
    },
  ];

  const [url, setUrl] = useState(countries[0].mapUrl);

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "94px",
    background: colors.background.light,
  };

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
      <div style={containerStyle}>
        {/* Map Section */}
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
          <h1 style={titleStyle}>Contact Us</h1>
          <p style={subtitleStyle}>
            We&#39;re here to help across multiple locations
          </p>

          {/* Country Cards */}
          <div style={cardsContainerStyle}>
            {countries.map((country) => (
              <div
                key={country.lat}
                style={countryCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.1)";
                }}
                onClick={() => setUrl(country.mapUrl)}
              >
                <h3 style={countryTitleStyle}>
                  <EnvironmentOutlined />
                  {country.name}
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

                {/*<div style={infoRowStyle}>*/}
                {/*  <MailOutlined style={iconStyle} />*/}
                {/*  <a*/}
                {/*    href={`mailto:${country.email}`}*/}
                {/*    style={{ color: colors.text.dark, textDecoration: "none" }}*/}
                {/*  >*/}
                {/*    {country.email}*/}
                {/*  </a>*/}
                {/*</div>*/}

                <div style={infoRowStyle}>
                  <ClockCircleOutlined style={iconStyle} />
                  <span>{country.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
