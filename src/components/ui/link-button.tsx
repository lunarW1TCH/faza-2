import { css } from '@emotion/react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const LinkButton: FC<LinkButtonProps> = (props) => {
  const { to, children } = props;

  const styles = css({
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    transition: 'all 300ms ease-in-out',
    position: 'relative',
    fontSize: '24px',
    lineHeight: '2rem',
    fontWeight: '200',
    textAlign: 'center',
    width: '96px',
    '&:hover': {
      textDecoration: 'underline',
    },
  });

  return (
    <Link to={to} css={styles}>
      {children}
    </Link>
  );
};

export default LinkButton;

type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
};
