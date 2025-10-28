export const getStrapiImageLink = (url: string) => {
  if (!url) return "/viz-glass-logo.png";

  return process.env.NEXT_PUBLIC_STRAPI_URL + url;
};
