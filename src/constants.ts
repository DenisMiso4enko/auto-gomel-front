// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const PATHDOMAIN =
import.meta.env.VITE_IS_PROD === 'yes'
  ? import.meta.env.VITE_PROD_BASE_URL
  : import.meta.env.VITE_DEV_BASE_URL