import { css } from '@emotion/react';

import { SEMANTIC_COLORS } from '../colors';
import CONDITIONS from '../tokens/conditions';
import DURATIONS from '../tokens/durations';
import EASINGS from '../tokens/easings';
import FONT_SIZES from '../tokens/font-sizes';
import RADII from '../tokens/radii';
import SIZES from '../tokens/sizes';

const inputRecipe = css({
  appearance: 'none',
  background: 'none',
  borderColor: SEMANTIC_COLORS.border.default,
  borderRadius: RADII.l2,
  borderWidth: '1px',
  color: SEMANTIC_COLORS.fg.default,
  outline: 0,
  outlineWidth: SIZES[10],
  position: 'relative',
  transitionDuration: DURATIONS.normal,
  transitionProperty: 'box-shadow, border-color',
  transitionTimingFunction: EASINGS.default,
  width: '100%',
  [CONDITIONS._disabled]: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  [CONDITIONS._focus]: {
    borderColor: SEMANTIC_COLORS.border.default,
    boxShadow: `0 0 0 1px ${SEMANTIC_COLORS.fg.default}`,
  },
  paddingLeft: SIZES[3],
  paddingRight: SIZES[3],
  height: SIZES[10],
  minWidth: SIZES[10],
  fontSize: FONT_SIZES.md,
});

export default inputRecipe;
