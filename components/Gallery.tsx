"use client";

import { useState } from "react";
import { Image } from "antd";
import { getStrapiImageLink } from "@/lib/links";
import { colors } from "@/lib/colors";
import { useStyleRegister } from "@ant-design/cssinjs";
import { theme } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { TMedia } from "@/services/strapi.types";

const { useToken } = theme;

interface IGallery {
  media: TMedia[];
  titleTextAlign?: "left" | "center" | "right";
  dict: any;
}

export const Gallery = ({
  media = [],
  titleTextAlign = "center",
  dict,
}: IGallery) => {
  const [currentVisible, setCurrentVisible] = useState<number>();
  const { token, theme } = useToken();

  const wrapSSR = useStyleRegister({ theme, token, path: ["Gallery"] }, () => ({
    ".gallery-title": {
      fontSize: "2.5rem", // 40px
      fontWeight: 700,
      color: colors.text.dark,
      marginBottom: "1.25rem", // 20px
      textAlign: titleTextAlign,
    },
    ".gallery-box": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))", // 320px → 20rem
      gap: "1.5625rem", // 25px
      marginBottom: "5rem", // 80px
    },
    ".gallery-item": {
      borderRadius: "1rem", // 16px
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "0 0.375rem 1.5625rem rgba(0,0,0,0.12)", // 0 6px 25px
      transition: "all 0.3s ease",
      height: "20rem",
      position: "relative",
    },
    ".gallery-image": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    ".video-mask": {
      position: "absolute",
      inset: 0,
      zIndex: 2,
      color: colors.light,
      fontSize: "0.875rem", // 14px
      borderRadius: "1rem",
      transition: "opacity 0.3s",
      cursor: "pointer",
    },
    ".video-play-icon": {
      fontSize: "3.125rem", // 50px
      color: colors.light,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
      textShadow: "0 0 6px rgba(0,0,0,0.5)",
    },
    ".video-element": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      boxShadow: "0 0.375rem 1.5625rem rgba(0,0,0,0.12)",
      borderRadius: "1rem",
    },
    "@media (max-width: 767px)": {
      ".gallery-title": {
        fontSize: "2rem",
      },
      ".gallery-box": {
        gridTemplateColumns: "repeat(auto-fill, minmax(18.75, 1fr))", // 300px
      },
      ".gallery-item": {
        height: "18rem",
      },
    },
  }));

  if (!media?.length) return null;

  return wrapSSR(
    <div>
      <h2 className="gallery-title">{dict?.gallery}</h2>

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
        <div className="gallery gallery-box">
          {media.map((image, index) => (
            <div key={index} className="gallery-item">
              {image.url.endsWith("mp4") ? (
                <VideoCell
                  index={index}
                  image={image}
                  setCurrentVisible={setCurrentVisible}
                />
              ) : (
                <Image
                  className="gallery-image"
                  src={getStrapiImageLink(image.url)}
                  alt={image.name}
                  preview={{ mask: "Click to View" }}
                  onClick={() => setCurrentVisible(index)}
                />
              )}
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>,
  );
};

interface IVideoCell {
  index: number;
  image: TMedia;
  setCurrentVisible: (index: number) => void;
}

const VideoCell = ({ index, image, setCurrentVisible }: IVideoCell) => {
  return (
    <div className="ant-image gallery-item" key={index}>
      <div
        className="ant-image-mask video-mask"
        onClick={() => setCurrentVisible(index)}
      >
        Click to View
      </div>
      <PlayCircleOutlined className="video-play-icon" />
      <video
        className="video-element"
        src={getStrapiImageLink(image.url)}
        muted
        playsInline
      />
      <Image src={getStrapiImageLink(image.url)} width={0} height={0} alt="" />
    </div>
  );
};
