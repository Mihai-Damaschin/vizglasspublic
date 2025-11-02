import { strapiFetch } from "@/lib/requests";
import { CSSProperties } from "react";
import { colors } from "@/lib/colors";
import Image from "next/image";
import { getStrapiImageLink } from "@/lib/links";

const GlassesPage = async () => {
  const doorProductsData = await strapiFetch("accessories", {
    populate: "*",
    sort: "createdAt:asc",
    filters: {
      type: "glass",
    },
  });

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "100px",
  };

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 0 100px",
  };

  const sectionTitleStyle: CSSProperties = {
    fontSize: "2.625rem",
    fontWeight: 700,
    // color: titleColor,
    marginBottom: "3.125rem",
    textAlign: "center",
  };

  const subtitleStyle: CSSProperties = {
    fontSize: "20px",
    color: colors.text.dark,
    opacity: 0.7,
    margin: "0 auto 60px",
    textAlign: "center",
    width: "70%",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div>
          <h2 style={sectionTitleStyle}>Glasses</h2>

          <p style={subtitleStyle}>
            This page demonstrates dynamically rendered content from a CMS,
            featuring alternating layouts for each section to create visual
            interest and improve readability.
          </p>
        </div>

        {doorProductsData?.data.map((accessory, index) => (
          <div key={accessory.name}>
            <div
              key={accessory.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5rem",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div style={{ width: 500 }}>
                <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  {accessory.name}
                </h3>
                <p
                  style={{
                    textAlign: "justify",
                    opacity: 0.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {accessory.description}
                </p>
              </div>
              <div>
                <Image
                  src={getStrapiImageLink(accessory.cover_photo.url)}
                  alt=""
                  width={400}
                  height={600}
                  style={{ borderRadius: "1rem", objectFit: 'cover' }}
                />
              </div>
            </div>

            {index !== doorProductsData?.data?.length - 1 && (
              <div
                style={{
                  height: 1,
                  backgroundColor: "gray",
                  opacity: 0.2,
                  margin: "5rem",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassesPage;
