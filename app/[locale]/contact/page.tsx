import { CSSProperties } from "react";
import { colors } from "@/lib/colors";
import { TLocales } from "@/lib/constants";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { ContactContent } from "@/app/[locale]/contact/ContactContent";

const ContactPage = async ({
  params,
}: {
  params: Promise<{ locale: TLocales }>;
}) => {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  const countries = [
    {
      name: dict.locations.countries.moldova.name,
      address: dict.locations.countries.moldova.address,
      phone: dict.locations.countries.moldova.phones,
      hours: dict.locations.hours.weekdays_9_18,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.12258553384!2d28.7570138367765!3d47.038037647956266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97df8a72c0b15%3A0xc692862f891027cc!2sConstruct%20Depo!5e1!3m2!1sro!2s!4v1759251321854!5m2!1sro!2s",
      lat: 47.0105,
      lng: 28.8638,
    },
    {
      name: dict.locations.countries.italy.name,
      address: dict.locations.countries.italy.addressPiatraNeamt,
      phone: dict.locations.countries.italy.phones,
      hours: dict.locations.hours.weekdays_8_17,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22505.650674858505!2d28.814637606108146!3d47.019919532674855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1761837694923!5m2!1sen!2s",
      lat: 46.9161,
      lng: 26.3884,
    },
    {
      name: dict.locations.countries.italy.name,
      address: dict.locations.countries.italy.addressMilano,
      phone: dict.locations.countries.italy.phones,
      hours: dict.locations.hours.weekdays_9_18,
      lat: 45.4642,
      lng: 9.19,
    },
  ];

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    paddingTop: "94px",
    background: colors.background.light,
  };

  return (
    <>
      <div style={containerStyle}>
        {/* Map Section */}

        <ContactContent dict={dict} countries={countries} />
      </div>
    </>
  );
};

export default ContactPage;
