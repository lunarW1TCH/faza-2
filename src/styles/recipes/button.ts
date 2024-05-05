import { css } from '@emotion/react';

import { SEMANTIC_COLORS } from '../colors';
import CONDITIONS from '../tokens/conditions';
import DURATIONS from '../tokens/durations';
import EASINGS from '../tokens/easings';
import FONT_WEIGHTS from '../tokens/font-weights';
import RADII from '../tokens/radii';
import SIZES from '../tokens/sizes';
import SPACING from '../tokens/spacing';
import TEXT_STYLES from '../tokens/text-styles';

const base = css({
  alignItems: 'center',
  appearance: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  fontWeight: FONT_WEIGHTS.semibold,
  justifyContent: 'center',
  outline: 'none',
  borderRadius: RADII.l2,
  transitionDuration: DURATIONS.normal,
  transitionProperty: 'background, border-color, color, box-shadow',
  transitionTimingFunction: EASINGS.default,
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  height: SIZES[10],
  minWidth: SIZES[10],
  ...TEXT_STYLES.sm,
  paddingLeft: SPACING[4],
  paddingRight: SPACING[4],
  gap: SPACING[2],
  '& svg': {
    width: SIZES[5],
    height: SIZES[5],
  },
});

const ghost = css({
  color: SEMANTIC_COLORS.fg.default,
  [CONDITIONS._hover]: {
    backgroundColor: SEMANTIC_COLORS.accent.a3,
  },
  [CONDITIONS._selected]: {
    backgroundColor: SEMANTIC_COLORS.accent.a3,
  },
  [CONDITIONS._disabled]: {
    color: SEMANTIC_COLORS.fg.disabled,
    cursor: 'not-allowed',
    [CONDITIONS._hover]: {
      backgroundColor: 'transparent',
      color: 'fg.disabled',
    },
  },
  [CONDITIONS._focusVisible]: {
    outline: '2px solid',
    outlineColor: SEMANTIC_COLORS.fg.default,
    outlineOffset: '2px',
  },
});

const solid = css({
  backgroundColor: SEMANTIC_COLORS.fg.default,
  color: SEMANTIC_COLORS.bg.default,
  [CONDITIONS._hover]: {
    backgroundColor: '#303030',
  },
  [CONDITIONS._focusVisible]: {
    outline: '2px solid',
    outlineColor: SEMANTIC_COLORS.fg.default,
    outlineOffset: '2px',
  },
  [CONDITIONS._disabled]: {
    color: SEMANTIC_COLORS.fg.disabled,
    backgroundColor: SEMANTIC_COLORS.bg.disabled,
    cursor: 'not-allowed',
    [CONDITIONS._hover]: {
      color: SEMANTIC_COLORS.fg.disabled,
      backgroundColor: SEMANTIC_COLORS.bg.disabled,
    },
  },
});

const buttonRecipe = {
  base,
  ghost,
  solid,
};

export default buttonRecipe;
