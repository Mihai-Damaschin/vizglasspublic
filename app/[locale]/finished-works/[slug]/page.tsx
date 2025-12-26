import { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { colors } from "@/lib/colors";
import { strapiFetch } from "@/lib/requests";
import { CaseStudiesItem } from "@/components/CaseStudiesItem";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { TLocales } from "@/lib/constants";

const CaseStudyPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: TLocales }>;
}) => {
  const { slug, locale } = await params;

  const caseStudyData = await strapiFetch("case-studies", {
    populate: "*",
    filters: {
      slug: {
        $eq: slug,
      },
    },
    locale,
  });
  const dict = await getDictionary(locale);
  const caseStudy = caseStudyData?.data?.[0];

  if (!caseStudy) {
    notFound();
  }

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "100px",
    backgroundColor: colors.background.light,
  };

  return (
    <div style={containerStyle}>
      <CaseStudiesItem caseStudy={caseStudy} dict={dict} />
    </div>
  );
};

export default CaseStudyPage;
