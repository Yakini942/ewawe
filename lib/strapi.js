export const fetchStrapi = async (endpoint) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const url = `${baseUrl}/api/${endpoint}?populate=*`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  const data = await res.json();
  return data.data?.attributes;
};


