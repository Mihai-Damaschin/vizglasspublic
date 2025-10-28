import { colors } from "@/lib/colors";
import { CSSProperties } from "react";
import { CaseStudies } from "@/components/CaseStudies";
import { strapiFetch } from "@/lib/requests";

const CaseStudiesListPage = async () => {
  const caseStudiesData = await strapiFetch("case-studies", {
    populate: "*",
    sort: "createdAt:desc",
  });

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    padding: "9rem 0 4rem",
    background: colors.background.light,
  };

  return (
    <>
      <div style={containerStyle}>
        <CaseStudies
          caseStudies={caseStudiesData?.data}
          title="Case Studies"
          description="Explore our portfolio of successful window installations and
          transformations"
          titleColor={"black"}
        />
      </div>
    </>
  );
};

export default CaseStudiesListPage;
