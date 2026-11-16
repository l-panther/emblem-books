export const BASE_URL: string = import.meta.env.BASE_URL;

export const page = (path: string = ''): string =>
  `${BASE_URL}${path.replace(/^\/+/, '')}`;

export const asset = (path: string): string =>
  `${BASE_URL}${path.replace(/^\/+/, '')}`;
