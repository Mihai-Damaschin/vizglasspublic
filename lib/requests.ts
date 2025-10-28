import qs from "qs";

export const strapiFetch = (url: string, params: Record<string, any>) =>
  fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${url}?${qs.stringify(params)}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_READ_TOKEN}`,
      },
    },
  )
    .then((response) => response.json())
    .catch((e) => console.log(e, "e strapiFetch"));
