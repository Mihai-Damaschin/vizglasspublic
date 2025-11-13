import { colors } from "@/lib/colors";
import { CSSProperties } from "react";
import { CaseStudies } from "@/components/CaseStudies";
import { strapiFetch } from "@/lib/requests";
import { TLocales } from "@/lib/constants";
import { getDictionary } from "@/app/[locale]/dictionaries";

const CaseStudiesListPage = async ({
  params,
}: {
  params: Promise<{ locale: TLocales }>;
}) => {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  const caseStudiesData = await strapiFetch("case-studies", {
    populate: "*",
    sort: "createdAt:desc",
    locale: locale,
  });

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    padding: "11rem 1.50rem 4rem",
    background: colors.background.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <CaseStudies
          caseStudies={caseStudiesData?.data}
          title={dict.caseStudies}
          description={dict.caseStudiesDescription}
          titleColor={"black"}
        />
      </div>
    </div>
  );
};

export default CaseStudiesListPage;
