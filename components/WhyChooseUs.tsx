"use client";

import { useState } from "react";
import {
  HomeOutlined,
  PhoneOutlined,
  StockOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { Card, theme } from "antd";
import { useStyleRegister } from "@ant-design/cssinjs";

const { useToken } = theme;

export const WhyChooseUs = ({ dict }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["WhyChooseUs"] },
    () => ({
      section: {
        padding: "4rem 0 6rem",
        backgroundColor: "#f9fafb",
      },
      ".container": {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 1rem",
      },
      ".header": {
        textAlign: "center",
        marginBottom: "3rem",
      },
      ".title": {
        fontSize: "2.625rem",
        fontWeight: 700,
        color: "#111827",
        marginBottom: "1rem",
      },
      ".subtitle": {
        fontSize: "1.125rem",
        color: "#6b7280",
        maxWidth: "600px",
        margin: "0 auto",
      },
      ".features": {
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
      },
      ".feature-card": {
        border: "none",
        backgroundColor: "#fff",
        padding: "1.5rem",
        transition: "all 0.3s ease",
        width: "calc(33.3% - 1rem)",
        "@media (max-width: 991px)": {
          width: "calc(50% - 1rem)",
        },
        "@media (max-width: 767px)": {
          width: "100%",
        },
        cursor: "pointer",
        ".icon-wrapper": {
          width: "48px",
          height: "48px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          fontSize: "1.5rem",
        },
        ".feature-title": {
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#111827",
          marginBottom: "0.5rem",
        },
        ".feature-desc": {
          fontSize: "1rem",
          color: "#6b7280",
        },
      },
      ".feature-card-hovered": {
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        transform: "translateY(-4px)",
      },
      ".feature-card-normal": {
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        transform: "translateY(0)",
      },
    }),
  );

  const features = [
    {
      icon: ToolOutlined,
      title: dict.whyChooseUs.items.production.title,
      description: dict.whyChooseUs.items.production.description,
      bg: "rgba(0, 123, 255, 0.1)",
      color: "#007bff",
    },
    {
      icon: HomeOutlined,
      title: dict.whyChooseUs.items.professionalInstallation.title,
      description: dict.whyChooseUs.items.professionalInstallation.description,
      bg: "#F4B34320",
      color: "#F4B343",
    },
    {
      icon: StockOutlined,
      title: dict.whyChooseUs.items.energyEfficiency.title,
      description: dict.whyChooseUs.items.energyEfficiency.description,
      bg: "rgba(0, 123, 255, 0.1)",
      color: "#007bff",
    },
    {
      icon: TeamOutlined,
      title: dict.whyChooseUs.items.experiencedTeam.title,
      description: dict.whyChooseUs.items.experiencedTeam.description,
      bg: "#F4B34320",
      color: "#F4B343",
    },
    {
      icon: ThunderboltOutlined,
      title: dict.whyChooseUs.items.fastDelivery.title,
      description: dict.whyChooseUs.items.fastDelivery.description,
      bg: "rgba(0, 123, 255, 0.1)",
      color: "#007bff",
    },
    {
      icon: PhoneOutlined,
      title: dict.whyChooseUs.items.afterSalesSupport.title,
      description: dict.whyChooseUs.items.afterSalesSupport.description,
      bg: "#F4B34320",
      color: "#F4B343",
    },
  ];

  return wrapSSR(
    <section>
      <div className="container">
        <div className="header">
          <h2 className="title">{dict.whyChooseUs.title}</h2>
          <p className="subtitle">{dict.whyChooseUs.subtitle}</p>
        </div>

        <div className="features">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={index}
                className={`feature-card ${
                  isHovered ? "feature-card-hovered" : "feature-card-normal"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="icon-wrapper"
                  style={{ backgroundColor: feature.bg, color: feature.color }}
                >
                  <Icon />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>,
  );
};
