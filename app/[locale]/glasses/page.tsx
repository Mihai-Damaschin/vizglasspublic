import { strapiFetch } from "@/lib/requests";
import { colors } from "@/lib/colors";
import { getStrapiImageLink } from "@/lib/links";
import { TLocales } from "@/lib/constants";
import GlassesItem from "@/components/GlassesItem";
import { getDictionary } from "@/app/[locale]/dictionaries";

const GlassesPage = async ({
  params,
}: {
  params: Promise<{ locale: TLocales }>;
}) => {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  const doorProductsData = await strapiFetch("accessories", {
    populate: "*",
    sort: "createdAt:asc",
    filters: {
      type: "glass",
    },
    locale,
  });

  return (
    <div className="min-h-screen pt-[100px]">
      <div className="max-w-[88.5rem] mx-auto px-[20px] pt-[60px] pb-[100px]">
        <div>
          <h2 className="text-[2.625rem] font-bold mb-[3.125rem] text-center">
            {dict.glasses}
          </h2>

          <p
            className={`
            text-lg md:text-[20px]
            text-[${colors.text.dark}]
            opacity-70
            mx-auto
            mb-30 md:mb-[60px]
            text-center
            w-full md:w-[70%]
          `}
          >
            {dict.dynamicPageDescription}
          </p>
        </div>

        {doorProductsData?.data.map(
          (accessory: Record<string, any>, index: number) => (
            <GlassesItem
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

export default GlassesPage;
