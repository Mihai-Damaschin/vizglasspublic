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
import { Card } from "antd";

export const WhyChooseUs = ({ dict }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  return (
    <section
      style={{
        padding: "4rem 0 6rem",
        backgroundColor: "#f9fafb",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.625rem", // 42px
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1rem",
            }}
          >
            {dict.whyChooseUs.title}
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {dict.whyChooseUs.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={index}
                style={{
                  border: "none",
                  boxShadow: isHovered
                    ? "0 8px 24px rgba(0, 0, 0, 0.1)"
                    : "0 4px 12px rgba(0, 0, 0, 0.05)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  backgroundColor: "#fff",
                  padding: "1.5rem",
                  width: "calc(33.3% - 1rem)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "8px",
                      backgroundColor: feature.bg,
                      color: feature.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: "#111827",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "#6b7280", fontSize: "1rem" }}>
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
