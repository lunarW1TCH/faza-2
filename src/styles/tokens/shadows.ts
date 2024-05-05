import { COLORS } from '../colors';

const SHADOWS = {
  xs: `0px 1px 2px ${COLORS.a5}, 0px 0px 1px ${COLORS.a7}`,
  sm: `0px 2px 4px ${COLORS.a3}, 0px 0px 1px ${COLORS.a7}`,
  md: `0px 4px 8px ${COLORS.a3}, 0px 0px 1px ${COLORS.a7}`,
  lg: `0px 8px 16px ${COLORS.a3}, 0px 0px 1px ${COLORS.a7}`,
  xl: `0px 16px 24px ${COLORS.a3}, 0px 0px 1px ${COLORS.a7}`,
  '2xl': `0px 24px 40px ${COLORS.a3}, 0px 0px 1px ${COLORS.a7}`,
} as const;

export default SHADOWS;
