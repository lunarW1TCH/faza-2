import { css } from '@emotion/react';
import type { ClassAttributes, FC, HTMLAttributes } from 'react';

const HStack: FC<HStackProps> = (props) => {
  const { children, ...rest } = props;

  const styles = css({
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    alignItems: 'center',
  });

  return (
    <div css={styles} {...rest}>
      {children}
    </div>
  );
};

export default HStack;

type HStackProps = ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement>;
