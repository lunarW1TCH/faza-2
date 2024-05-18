import { LoaderPinwheel } from 'lucide-react';
import FONT_SIZES from '~/styles/tokens/font-sizes';

import { keyframes } from '@emotion/react';

import VStack from './containers/v-stack';

const LoadingFallback = () => {
  return (
    <VStack
      css={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        css={{
          fontSize: FONT_SIZES.xl,
        }}
      >
        Wczytywanie
      </h1>
      <span
        css={{
          animation: `${rotate} 1s linear infinite`,
        }}
      >
        <LoaderPinwheel />
      </span>
    </VStack>
  );
};

export default LoadingFallback;

const rotate = keyframes`
  0% {
    transform: rotate( 0deg )
  }

  50% {
    transform: rotate( 180deg )
  }

  100% {
    transform: rotate( 360deg )
  }
`;
