import { colors } from "@/lib/colors";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTASection } from "@/components/CTASection";
import { TLocales } from "@/lib/constants";
import { getDictionary } from "@/app/[locale]/dictionaries";

const AboutUsPage = async ({
  params,
}: {
  params: Promise<{ locale: TLocales }>;
}) => {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <>
      <section
        style={{
          position: "relative",
          background:
            "linear-gradient(135deg, rgba(var(--primary),0.05), var(--background), rgba(var(--secondary),0.05))",
          paddingTop: "10rem",
          paddingBottom: "8rem",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "56rem",
              margin: "0 auto",
            }}
          >
            <img
              src="/images/logo.png"
              alt={dict.about.logoAlt}
              style={{
                width: "8rem",
                height: "8rem",
                marginBottom: "2rem",
                animation: "fade-in 1s ease-in-out",
              }}
            />
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "var(--foreground)",
                marginBottom: "1.5rem",
                animation: "fade-in 1s ease-in-out",
              }}
            >
              {dict.about.title}
            </h1>
            <p
              style={{
                fontSize: "1.375rem",
                fontWeight: 600,
                color: "var(--primary)",
                marginBottom: "1.5rem",
                animation: "fade-in 1s ease-in-out",
              }}
            >
              {dict.about.subtitle}
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "var(--muted-foreground)",
                animation: "fade-in 1s ease-in-out",
              }}
            >
              {dict.about.description}
            </p>
          </div>
        </div>

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "2.5rem",
            width: "5rem",
            height: "5rem",
            background: colors.primary,
            borderRadius: "9999px",
            filter: "blur(40px)",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "2.5rem",
            width: "8rem",
            height: "8rem",
            background: colors.primary,
            borderRadius: "9999px",
            filter: "blur(40px)",
            opacity: 0.4,
          }}
        />
      </section>

      <WhyChooseUs dict={dict} />

      <Testimonials dict={dict} />

      <CTASection styles={{ borderRadius: "0" }} dict={dict} />
    </>
  );
};

export default AboutUsPage;
