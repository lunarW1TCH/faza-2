import { css } from '@emotion/react';

import { SEMANTIC_COLORS } from '../colors';
import CONDITIONS from '../tokens/conditions';
import DURATIONS from '../tokens/durations';
import EASINGS from '../tokens/easings';
import FONT_WEIGHTS from '../tokens/font-weights';
import SPACING from '../tokens/spacing';

const linkRecipe = css({
  alignItems: 'center',
  color: SEMANTIC_COLORS.fg.default,
  cursor: 'pointer',
  display: 'inline-flex',
  fontWeight: FONT_WEIGHTS.medium,
  gap: SPACING[2],
  textDecoration: 'underline 0.1em transparent',
  textUnderlineOffset: '0.125em',
  transitionDuration: DURATIONS.normal,
  transitionProperty: 'text-decoration-color',
  transitionTimingFunction: EASINGS.default,
  [CONDITIONS._hover]: {
    textDecorationColor: SEMANTIC_COLORS.fg.default,
  },
  '& svg': {
    width: '1em',
    height: '1em',
  },
});

export default linkRecipe;
