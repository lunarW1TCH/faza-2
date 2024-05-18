import { SEMANTIC_COLORS } from '~/styles/colors';

import { css } from '@emotion/react';

const BarLines = () => {
  return (
    <>
      <hr css={[hrStyles, { bottom: '240px' }]} />
      <hr css={[hrStyles, { bottom: '280px' }]} />
      <hr css={[hrStyles, { bottom: '320px' }]} />
      <hr css={[hrStyles, { bottom: '360px' }]} />
      <hr css={[hrStyles, { bottom: '400px' }]} />
      <hr css={[hrStyles, { bottom: '440px' }]} />
      <hr css={[hrStyles, { bottom: '480px' }]} />
      <hr css={[hrStyles, { bottom: '520px' }]} />
      <hr css={[hrStyles, { bottom: '560px' }]} />
    </>
  );
};

export default BarLines;

const hrStyles = css({
  position: 'absolute',
  borderColor: SEMANTIC_COLORS.accent[3],
  width: '100%',
});
