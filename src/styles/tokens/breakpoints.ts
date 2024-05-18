const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export default BREAKPOINTS;

export const MEDIA_QUERY = {
  smDown: `@media (max-width: ${BREAKPOINTS.sm})`,
  mdDown: `@media (max-width: ${BREAKPOINTS.md})`,
  lgDown: `@media (max-width: ${BREAKPOINTS.lg})`,
  xlDown: `@media (max-width: ${BREAKPOINTS.xl})`,
  '2xlDown': `@media (max-width: ${BREAKPOINTS['2xl']})`,
};
