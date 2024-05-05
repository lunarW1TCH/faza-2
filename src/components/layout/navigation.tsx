import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEMANTIC_COLORS } from '~/styles/colors';
import buttonRecipe from '~/styles/recipes/button';
import CONDITIONS from '~/styles/tokens/conditions';
import FONT_WEIGHTS from '~/styles/tokens/font-weights';
import SPACING from '~/styles/tokens/spacing';

import { css } from '@emotion/react';

import textStyles from '../../styles/tokens/text-styles';

const Navigation = () => {
  return (
    <nav
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: SPACING[2],
        paddingBottom: SPACING[2],
        paddingLeft: SPACING[4],
        paddingRight: SPACING[4],
        borderBottom: '1px solid',
        borderColor: SEMANTIC_COLORS.border.subtle,
        backgroundColor: SEMANTIC_COLORS.bg.default,
        gap: SPACING[2],
      }}
    >
      <Link to='/'>
        <button css={[buttonRecipe.base, buttonRecipe.ghost, linkButtonStyles]}>
          <Home />
        </button>
      </Link>
      <Link to='/indicator-1'>
        <button css={[buttonRecipe.base, buttonRecipe.ghost, linkButtonStyles]}>
          Wskaźnik 1
        </button>
      </Link>
      <Link to='/indicator-2'>
        <button css={[buttonRecipe.base, buttonRecipe.ghost, linkButtonStyles]}>
          Wskaźnik 2
        </button>
      </Link>
      <Link to='/indicator-3'>
        <button css={[buttonRecipe.base, buttonRecipe.ghost, linkButtonStyles]}>
          Wskaźnik 3
        </button>
      </Link>
      <Link to='/klient'>
        <button css={[buttonRecipe.base, buttonRecipe.ghost, linkButtonStyles]}>
          Klient
        </button>
      </Link>
    </nav>
  );
};

export default Navigation;

const linkButtonStyles = css({
  ...textStyles.sm,
  fontWeight: FONT_WEIGHTS.light,
  [CONDITIONS._active]: {
    backgroundColor: SEMANTIC_COLORS.accent[5],
  },
});
