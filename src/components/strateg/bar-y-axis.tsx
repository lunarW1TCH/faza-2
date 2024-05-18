import SPACING from '~/styles/tokens/spacing';

import { css } from '@emotion/react';

const BarYAxis = () => {
  return (
    <>
      <span css={[labelStyles, { bottom: '232px' }]}>10%</span>
      <span css={[labelStyles, { bottom: '272px' }]}>20%</span>
      <span css={[labelStyles, { bottom: '312px' }]}>30%</span>
      <span css={[labelStyles, { bottom: '352px' }]}>40%</span>
      <span css={[labelStyles, { bottom: '392px' }]}>50%</span>
      <span css={[labelStyles, { bottom: '432px' }]}>60%</span>
      <span css={[labelStyles, { bottom: '472px' }]}>70%</span>
      <span css={[labelStyles, { bottom: '512px' }]}>80%</span>
      <span css={[labelStyles, { bottom: '552px' }]}>90%</span>
    </>
  );
};

export default BarYAxis;

const labelStyles = css({
  position: 'absolute',
  width: '100%',
  left: `-${SPACING['6']}`,
  fontSize: '10px',
});
