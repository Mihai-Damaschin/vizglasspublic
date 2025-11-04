"use client";

import { CSSProperties, useState } from "react";
import { Image } from "antd";
import { getStrapiImageLink } from "@/lib/links";
import { colors } from "@/lib/colors";
import { Property } from "csstype";
import { PlayCircleOutlined } from "@ant-design/icons";

import TextAlign = Property.TextAlign;
import { TMedia } from "@/services/strapi.types";

interface IGallery {
  media: TMedia[];
  titleTextAlign?: TextAlign;
  dict: any;
}

export const Gallery = ({
  media = [],
  titleTextAlign = "center",
  dict
}: IGallery) => {
  const [currentVisible, setCurrentVisible] = useState<number>();

  if (!media) return null;

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
      <h2 style={sectionTitleStyle}>{dict.gallery}</h2>

      <Image.PreviewGroup
        preview={{
          imageRender: (originalNode, info) => {
            const url = info.image?.url;

            if (url?.endsWith(".mp4")) {
              const videoUrl = url.startsWith("/")
                ? `${process.env.REACT_APP_S3_URL}/${url}`
                : url;

              return <video src={videoUrl} controls />;
            }

            return originalNode;
          },
          onChange: (current) => setCurrentVisible(current),
          onVisibleChange: (value) => {
            if (!value) setCurrentVisible(undefined);
          },
          current: currentVisible,
          visible: currentVisible !== undefined,
        }}
      >
        <div style={galleryStyle} className="gallery">
          {media.map((image, index) => (
            <div key={index}>
              {image.url.endsWith("mp4") ? (
                <VideoCell
                  index={index}
                  image={image}
                  setCurrentVisible={setCurrentVisible}
                />
              ) : (
                <div key={index} style={imageWrapperStyle}>
                  <Image
                    src={getStrapiImageLink(image.url)}
                    alt={image.name}
                    style={imageStyle}
                    preview={{
                      mask: "Click to View",
                    }}
                    onClick={() => setCurrentVisible(index)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
};

interface IVideoCell {
  index: number;
  image: TMedia;
  setCurrentVisible: (index: number) => void;
}

const VideoCell = ({ index, image, setCurrentVisible }: IVideoCell) => {
  return (
    <div className="ant-image" style={{ position: "relative" }} key={index}>
      <div
        className="ant-image-mask"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          color: "white",
          fontSize: "14px",
          borderRadius: "1rem",
          transition: "opacity 0.3s",
        }}
        onClick={() => setCurrentVisible(index)}
      >
        Click to View
      </div>

      <PlayCircleOutlined
        style={{
          fontSize: 50,
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textShadow: "0 0 6px rgba(0, 0, 0, 0.5)",
        }}
      />

      <video
        src={getStrapiImageLink(image.url)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 25px",
          borderRadius: "1rem",
        }}
        muted
        playsInline
      />

      <Image src={getStrapiImageLink(image.url)} width={0} height={0} alt="" />
    </div>
  );
};
