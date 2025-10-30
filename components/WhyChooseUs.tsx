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
import { wrap } from "node:module";

const features = [
  {
    icon: ToolOutlined,
    title: "Producție proprie",
    description:
      "Materiale certificate și control al calității în toate etapele producției",
    bg: "rgba(0, 123, 255, 0.1)",
    color: "#007bff",
  },
  {
    icon: HomeOutlined,
    title: "Montaj profesionist",
    description:
      "Echipă calificată și garanție reală pentru toate lucrările efectuate",
    bg: "#F4B34320",
    color: "#F4B343",
  },
  {
    icon: StockOutlined,
    title: "Eficiență energetică",
    description:
      "Profiluri moderne, geam termopan și izolare fonică superioară",
    bg: "rgba(0, 123, 255, 0.1)",
    color: "#007bff",
  },
  {
    icon: TeamOutlined,
    title: "Echipă cu experiență",
    description: "Personal instruit continuu și dedicat excelenței în servicii",
    bg: "#F4B34320",
    color: "#F4B343",
  },
  {
    icon: ThunderboltOutlined,
    title: "Livrare rapidă",
    description: "Respectăm termenele promise și comunicăm transparent",
    bg: "rgba(0, 123, 255, 0.1)",
    color: "#007bff",
  },
  {
    icon: PhoneOutlined,
    title: "Asistență post-vânzare",
    description:
      "Service garantat și suport continuu pentru toți clienții noștri",
    bg: "#F4B34320",
    color: "#F4B343",
  },
];

export const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
              fontSize: "2rem",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "1rem",
            }}
          >
            De ce să alegi VizGlass?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Oferim soluții complete pentru uși și ferestre, cu accent pe
            calitate, durabilitate și satisfacția clientului
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
                  width: "calc(33.3% - 1rem)"
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
