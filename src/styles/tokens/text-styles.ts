import FONT_SIZES from './font-sizes';

const TEXT_STYLES = {
  xs: {
    fontSize: FONT_SIZES.xs,
    lineHeight: '1.125rem',
  },
  sm: {
    fontSize: FONT_SIZES.sm,
    lineHeight: '1.25rem',
  },
  md: {
    fontSize: FONT_SIZES.md,
    lineHeight: '1.5rem',
  },
  lg: {
    fontSize: FONT_SIZES.lg,
    lineHeight: '1.75rem',
  },
  xl: {
    fontSize: FONT_SIZES.xl,
    lineHeight: '1.875rem',
  },
  '2xl': {
    fontSize: FONT_SIZES['2xl'],
    lineHeight: '2rem',
  },
  '3xl': {
    fontSize: FONT_SIZES['3xl'],
    lineHeight: '2.375rem',
  },
  '4xl': {
    fontSize: FONT_SIZES['4xl'],
    lineHeight: '2.75rem',
    letterSpacing: '-0.02em',
  },
  '5xl': {
    fontSize: FONT_SIZES['5xl'],
    lineHeight: '3.75rem',
    letterSpacing: '-0.02em',
  },
  '6xl': {
    fontSize: FONT_SIZES['6xl'],
    lineHeight: '4.5rem',
    letterSpacing: '-0.02em',
  },
  '7xl': {
    fontSize: FONT_SIZES['7xl'],
    lineHeight: '5.75rem',
    letterSpacing: '-0.02em',
  },
} as const;

export default TEXT_STYLES;
