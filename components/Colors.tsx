import { CSSProperties } from "react";
import { colors as $colors } from "@/lib/colors";
import Image from "next/image";

interface IColors {
  colors: any[];
  dict: any;
}

export const Colors = ({ colors, dict }: IColors) => {
  const titleStyle: CSSProperties = {
    fontSize: "2.625rem", // 42px
    fontWeight: 700,
    color: $colors.text.dark,
    marginBottom: "3.125rem", // 50px
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={titleStyle}>{dict.colors}</h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        {colors.map((color) => (
          <div
            style={{
              background: $colors.light,
              borderRadius: "0.75rem", // 12px
              overflow: "hidden",
              boxShadow: "0 0.25rem 1.25rem rgba(0,0,0,0.1)", // 0 4px 20px
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              flexShrink: 0,
              position: "relative",
              width: "12rem",
              height: "12rem",
            }}
            key={color.id}
          >
            <Image
              src={
                color.cover_photo?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL + color.cover_photo?.url
                  : "/viz-glass-logo.png"
              }
              alt={color.name}
              style={{
                width: "100%",
                height: "100%", // 300px
                objectFit: "cover",
              }}
              width={350}
              height={300}
            />

            <div
              style={{
                padding: "0.5rem", // 30px
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                backgroundColor: $colors.primary,
                borderRadius: "0.75rem",
                color: $colors.light,
                fontWeight: "bold",
              }}
            >
              {color.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
