import { css } from '@emotion/react';

import { SEMANTIC_COLORS } from '../colors';
import FONT_WEIGHTS from '../tokens/font-weights';
import RADII from '../tokens/radii';
import SHADOWS from '../tokens/shadows';
import SPACING from '../tokens/spacing';
import TEXT_STYLES from '../tokens/text-styles';

const root = css({
  backgroundColor: SEMANTIC_COLORS.bg.default,
  borderRadius: RADII.l3,
  boxShadow: SHADOWS.lg,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
});

const header = css({
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING[1],
  padding: SPACING[6],
});

const body = css({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  paddingBottom: SPACING[6],
  paddingLeft: SPACING[6],
  paddingRight: SPACING[6],
});

const footer = css({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: SPACING[2],
  paddingBottom: SPACING[6],
  paddingLeft: SPACING[6],
  paddingRight: SPACING[6],
});

const title = css({
  color: SEMANTIC_COLORS.fg.default,
  ...TEXT_STYLES.lg,
  fontWeight: FONT_WEIGHTS.semibold,
});

const description = css({
  color: SEMANTIC_COLORS.fg.muted,
  ...TEXT_STYLES.sm,
});

const cardRecipe = {
  root,
  header,
  body,
  footer,
  title,
  description,
};

export default cardRecipe;
