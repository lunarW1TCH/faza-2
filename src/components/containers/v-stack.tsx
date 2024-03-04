import { css } from '@emotion/react';
import type { ClassAttributes, FC, HTMLAttributes } from 'react';

const VStack: FC<VStackProps> = (props) => {
  const { children, ...rest } = props;

  const styles = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
  });

  return (
    <div css={styles} {...rest}>
      {children}
    </div>
  );
};

export default VStack;

type VStackProps = ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement>;
