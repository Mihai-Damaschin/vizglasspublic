import { strapiFetch } from "@/lib/requests";
import { TLocales } from "@/lib/constants";
import { Gallery } from "@/components/Gallery";
import { CSSProperties } from "react";
import { colors } from "@/lib/colors";

const GalleryPage = async ({
  params,
}: {
  params: Promise<{ locale: TLocales }>;
}) => {
  const { locale } = await params;

  const galleryData = await strapiFetch("galleries", {
    populate: "*",
    locale,
  });

  const media = galleryData?.data[0];

  console.log(media, "media");

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "100px",
    backgroundColor: colors.background.light,
  };

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 0 100px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <Gallery media={media.media} />
      </div>
    </div>
  );
};

export default GalleryPage;
