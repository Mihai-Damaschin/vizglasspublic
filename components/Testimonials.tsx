"use client";

import { Card, Grid } from "antd";
import { colors } from "@/lib/colors";
import { StarFilled } from "@ant-design/icons";

const { useBreakpoint } = Grid;

interface ITestimonials {
  dict: any;
}

export const Testimonials = ({ dict }: ITestimonials) => {
  const screens = useBreakpoint();

  return (
    <section
      style={{
        paddingTop: "4rem",
        paddingBottom: "6rem",
        background: "var(--background)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--foreground)",
                marginBottom: "1rem",
              }}
            >
              {dict.testimonials.title}
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: colors.primary,
                opacity: 0.8,
              }}
            >
              {dict.testimonials.subtitle}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: !screens.md ? "column" : "row",
              gap: "1.5rem",
            }}
          >
            {dict.testimonials.items.map((testimonial, index) => (
              <Card
                key={index}
                style={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                  background: "var(--card)",
                  position: "relative",
                  transition: "box-shadow 0.3s, transform 0.3s",
                  fontSize: "1rem",
                  flex: 1,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    color: "rgba(var(--primary),0.2)",
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    // fill: colors.secondary,
                    stroke: colors.primary,
                  }}
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>

                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled
                      key={i}
                      style={{
                        fontSize: "1.25rem",
                        color: colors.secondary,
                      }}
                    />
                  ))}
                </div>

                <p
                  style={{
                    color: "var(--muted-foreground)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  &#34;{testimonial.text}&#34;
                </p>

                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "1rem",
                  }}
                >
                  <p style={{ fontWeight: 600, color: "var(--foreground)" }}>
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
