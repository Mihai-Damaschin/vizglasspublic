export interface Dictionary {
  navigation: {
    aboutUs: string;
    products: string;
    caseStudies: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    alt: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: {
      production: {
        title: string;
        description: string;
      };
      professionalInstallation: {
        title: string;
        description: string;
      };
      energyEfficiency: {
        title: string;
        description: string;
      };
      experiencedTeam: {
        title: string;
        description: string;
      };
      fastDelivery: {
        title: string;
        description: string;
      };
      afterSalesSupport: {
        title: string;
        description: string;
      };
    };
  };
  pvcWindowsProductCarouselTitle: string;
  pvcDoorsProductCarouselTitle: string;
  caseStudies: string;
  keyFeatures: string;
  specifications: string;
  colors: string;
  accessories: string;
  gallery: string;
  caseStudiesDescription: string;
  about: {
    logoAlt: string;
    title: string;
    subtitle: string;
    description: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      location: string;
      rating: number;
      text: string;
    }>;
  };
  cta: {
    title: string;
    descPrefix: string;
    forYour: string;
    forYourSuffix: string;
    descSuffix: string;
    contactUs: string;
    viewCaseStudies: string;
  };
  locations: {
    countries: {
      moldova: {
        name: string;
        address: string;
        phones: string[];
      };
      italy: {
        name: string;
        addressPiatraNeamt: string;
        addressMilano: string;
        phones: string[];
      };
    };
    hours: {
      weekdays_9_18: string;
      weekdays_8_17: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
  };
  relatedProducts: string;
  clickToView: string;
  dynamicPageDescription: string;
  glasses: string;
}
