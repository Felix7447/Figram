const API_URL = import.meta.env.VITE_API;

export const endpoints = {
  api: API_URL,
  categories: `${API_URL}categories`,
  apiGql: `${API_URL}graphql`,
  photos: `${API_URL}photos`, // Only works with Graphql
};
