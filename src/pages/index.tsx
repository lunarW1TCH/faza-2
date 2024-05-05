import HStack from '~/components/containers/h-stack';
import FONT_WEIGHTS from '~/styles/tokens/font-weights';
import SPACING from '~/styles/tokens/spacing';

import { css } from '@emotion/react';

import VStack from '../components/containers/v-stack';
import cardRecipe from '../styles/recipes/card';
import linkRecipe from '../styles/recipes/link';

const Root = () => {
  return (
    <VStack css={{ height: '100%' }}>
      <div css={[cardRecipe.root, css({ minWidth: '300px' })]}>
        <div css={cardRecipe.header}>
          <h3 css={cardRecipe.title}>Faza 2</h3>
          <p css={cardRecipe.description}>
            Aplikacja fazy 2 do pracy {'"..."'}
          </p>
        </div>
        <div css={cardRecipe.body}>
          <h5
            css={{
              fontWeight: FONT_WEIGHTS.semibold,
              marginBottom: SPACING[2],
            }}
          >
            Pozostałe aplikacje:
          </h5>
          <HStack css={{ width: '100%', justifyContent: 'space-between' }}>
            <span>Faza 1:</span>
            <a css={[linkRecipe, css({ textDecoration: 'underline' })]}>
              todo.vercel.app
            </a>
          </HStack>
          <HStack css={{ width: '100%', justifyContent: 'space-between' }}>
            <span>Faza 3:</span>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://faza-3.vercel.app/'
              css={[linkRecipe, css({ textDecoration: 'underline' })]}
            >
              faza-3.vercel.app
            </a>
          </HStack>
        </div>
      </div>
    </VStack>
  );
};

export default Root;
