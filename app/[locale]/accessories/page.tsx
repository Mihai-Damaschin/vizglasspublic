import { strapiFetch } from "@/lib/requests";
import { CSSProperties } from "react";
import { colors } from "@/lib/colors";
import { getStrapiImageLink } from "@/lib/links";
import AccessoryItem from "@/components/AccessoryItem";

const AccessoriesPage = async () => {
  const doorProductsData = await strapiFetch("accessories", {
    populate: "*",
    sort: "createdAt:asc",
    filters: {
      type: ["net", "sill"],
    },
  });

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "100px",
  };

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "60px 20px 100px",
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
          <h2 style={sectionTitleStyle}>Accessories</h2>

          <p style={subtitleStyle}>
            This page demonstrates dynamically rendered content from a CMS,
            featuring alternating layouts for each section to create visual
            interest and improve readability.
          </p>
        </div>

        {doorProductsData?.data.map(
          (accessory: Record<string, any>, index: number) => (
            <AccessoryItem
              key={accessory.name}
              name={accessory.name}
              description={accessory.description}
              imageUrl={getStrapiImageLink(accessory.cover_photo.url)}
              isEven={index % 2 === 0}
              showDivider={index !== doorProductsData?.data?.length - 1}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default AccessoriesPage;
