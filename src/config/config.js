const API_URL = import.meta.env.VITE_API;

export const endpoints = {
  api: API_URL,
  apiGql: `${API_URL}graphql`,
  categories: `${API_URL}categories`,
  photos: `${API_URL}photos`, // Only works with Graphql
};
