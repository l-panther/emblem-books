export const BASE_URL = import.meta.env.BASE_URL;

export const asset = (path: string) =>
  `${BASE_URL}${path.replace(/^\/+/, '')}`;
