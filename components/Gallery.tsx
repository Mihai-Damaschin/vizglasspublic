"use client";

import { useState } from "react";
import { Image } from "antd";
import { getStrapiImageLink } from "@/lib/links";
import { colors } from "@/lib/colors";
import { PlayCircleOutlined } from "@ant-design/icons";
import { TMedia } from "@/services/strapi.types";

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

  if (!media?.length) return null;

  return (
    <div>
      <h2
        style={{
          fontSize: "2.5rem", // 40px
          fontWeight: 700,
          color: colors.text.dark,
          marginBottom: "1.25rem", // 20px
          textAlign: titleTextAlign,
        }}
      >
        {dict?.gallery}
      </h2>

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
        <div
          className="gallery gallery-box"
          style={{
            display: "grid",
            gap: "1.5625rem", // 25px
            marginBottom: "5rem", // 80px
          }}
        >
          {media.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: "1rem", // 16px
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 0.375rem 1.5625rem rgba(0,0,0,0.12)", // 0 6px 25px
                transition: "all 0.3s ease",
                height: "20rem",
                position: "relative",
              }}
            >
              {image.url.endsWith("mp4") ? (
                <VideoCell
                  index={index}
                  image={image}
                  setCurrentVisible={setCurrentVisible}
                />
              ) : (
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
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
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          color: "white",
          fontSize: "14px",
          borderRadius: "1rem",
          transition: "opacity 0.3s",
        }}
        className="ant-image-mask video-mask"
        onClick={() => setCurrentVisible(index)}
      >
        Click to View
      </div>
      <PlayCircleOutlined
        style={{
          fontSize: "3.125rem", // 50px
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
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 25px",
          borderRadius: "1rem",
        }}
        src={getStrapiImageLink(image.url)}
        muted
        playsInline
      />
      <Image src={getStrapiImageLink(image.url)} width={0} height={0} alt="" />
    </div>
  );
};
