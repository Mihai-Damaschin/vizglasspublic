"use client";

import { CSSProperties } from "react";
import { Image } from "antd";
import { getStrapiImageLink } from "@/lib/links";
import { colors } from "@/lib/colors";
import { Property } from "csstype";

import TextAlign = Property.TextAlign;

interface IGallery {
  media: any[];
  titleTextAlign?: TextAlign;
}

export const Gallery = ({
  media = [],
  titleTextAlign = "center",
}: IGallery) => {
  if (!media) return null;

  // Gallery Styles
  const galleryStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "25px",
    marginBottom: "80px",
  };

  const imageWrapperStyle: CSSProperties = {
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
    transition: "all 0.3s ease",
    height: "20rem",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const sectionTitleStyle: CSSProperties = {
    fontSize: "40px",
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "20px",
    textAlign: titleTextAlign,
  };

  return (
    <div>
      <h2 style={sectionTitleStyle}>Gallery</h2>

      <Image.PreviewGroup>
        <div style={galleryStyle} className="gallery">
          {media.map((image: string, index: number) => (
            <div key={index} style={imageWrapperStyle}>
              <Image
                src={getStrapiImageLink(image.url)}
                alt={` ${index + 1}`}
                style={imageStyle}
                preview={{
                  mask: "Click to View",
                }}
              />
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
};
