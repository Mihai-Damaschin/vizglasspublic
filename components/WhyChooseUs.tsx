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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[88.5rem] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[2.625rem] font-bold text-gray-900 mb-4">
            {dict.whyChooseUs.title}
          </h2>

          <p className="text-lg text-gray-500 max-w-[600px] mx-auto">
            {dict.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`feature-card bg-white p-6 rounded-xl transition-all
    w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.3%-1rem)] ${isHovered ? "shadow-xl -translate-y-1" : "shadow-md"}`}
              >
                <div className="text-left">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl"
                    style={{
                      backgroundColor: feature.bg,
                      color: feature.color,
                    }}
                  >
                    <Icon />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-base">
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
