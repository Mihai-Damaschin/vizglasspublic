"use client";

import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import { colors } from "@/lib/colors";
import { Dictionary } from "@/lib/types";

interface ITestimonials {
  dict: Dictionary;
}

export const Testimonials = ({ dict }: ITestimonials) => {
  return (
    <section className="pt-16 pb-24 bg-[var(--background)]">
      <div className="max-w-[88.5rem] mx-auto px-4">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[2.625rem] font-bold text-[var(--foreground)] mb-4">
              {dict.testimonials.title}
            </h2>
            <p
              className="text-lg"
              style={{ color: colors.primary, opacity: 0.8 }}
            >
              {dict.testimonials.subtitle}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {dict.testimonials.items.map((testimonial, index) => (
              <Card
                key={index}
                className="
              relative flex-1 rounded-xl bg-[var(--card)]
              shadow-md transition-all duration-300
              text-base
            "
              >
                {/* Quote Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                w-10 h-10 absolute top-4 right-4
              "
                  style={{
                    color: "rgba(var(--primary),0.2)",
                    stroke: colors.primary,
                  }}
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>

                {/* Rating */}
                <div className="flex gap-3 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled
                      key={i}
                      className="text-xl"
                      style={{ color: colors.secondary }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  “{testimonial.text}”
                </p>

                {/* Name + Location */}
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-[var(--foreground)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
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
