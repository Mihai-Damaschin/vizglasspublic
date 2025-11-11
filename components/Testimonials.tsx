"use client";

import { useStyleRegister } from "@ant-design/cssinjs";
import { Card, theme } from "antd";
import { StarFilled } from "@ant-design/icons";
import { colors } from "@/lib/colors";

const { useToken } = theme;

interface ITestimonials {
  dict: any;
}

export const Testimonials = ({ dict }: ITestimonials) => {
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister(
    { theme, token, path: ["Testimonials"] },
    () => ({
      ".testimonials-section": {
        paddingTop: "4rem",
        paddingBottom: "6rem",
        background: "var(--background)",
      },
      ".container": {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 1rem",
      },
      ".heading": {
        textAlign: "center",
        marginBottom: "3rem",
      },
      ".title": {
        fontSize: "2rem",
        fontWeight: 700,
        color: "var(--foreground)",
        marginBottom: "1rem",
      },
      ".subtitle": {
        fontSize: "1.125rem",
        color: colors.primary,
        opacity: 0.8,
      },
      ".cards": {
        display: "flex",
        flexDirection: "row",
        gap: "1.5rem",
      },
      "@media (max-width: 767px)": {
        ".cards": {
          flexDirection: "column",
        },
      },
      ".card": {
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        background: "var(--card)",
        position: "relative",
        transition: "box-shadow 0.3s, transform 0.3s",
        fontSize: "1rem",
        flex: 1,
        padding: "1.5rem",
        "&:hover": {
          boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
          transform: "translateY(-4px)",
        },
      },
      ".quote-icon": {
        width: "2.5rem",
        height: "2.5rem",
        color: "rgba(var(--primary),0.2)",
        position: "absolute",
        top: "1rem",
        right: "1rem",
        stroke: colors.primary,
      },
      ".stars": {
        display: "flex",
        gap: "0.75rem",
        marginBottom: "1rem",
      },
      ".text": {
        color: "var(--muted-foreground)",
        marginBottom: "1.5rem",
        lineHeight: 1.6,
      },
      ".author": {
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "1rem",
      },
      ".author-name": {
        fontWeight: 600,
        color: "var(--foreground)",
      },
      ".author-location": {
        fontSize: "0.875rem",
        color: "var(--muted-foreground)",
      },
    }),
  );

  return wrapSSR(
    <section className="testimonials-section">
      <div className="container">
        <div className="heading">
          <h2 className="title">{dict.testimonials.title}</h2>
          <p className="subtitle">{dict.testimonials.subtitle}</p>
        </div>

        <div className="cards">
          {dict.testimonials.items.map((testimonial: any, index: number) => (
            <Card key={index} className="card">
              <svg
                className="quote-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              </svg>

              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarFilled
                    key={i}
                    style={{ fontSize: "1.25rem", color: colors.secondary }}
                  />
                ))}
              </div>

              <p className="text">&#34;{testimonial.text}&#34;</p>

              <div className="author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-location">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>,
  );
};
