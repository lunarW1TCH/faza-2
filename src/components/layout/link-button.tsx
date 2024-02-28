import { Link } from 'react-router-dom';

const LinkButton = (props: LinkButtonProps) => {
  const { children, to } = props;

  return (
    <Link
      css={{
        '&:hover': {
          textDecoration: 'underline',
          backgroundColor: '#eeeeee',
          opacity: 0.7,
        },
        width: '100%',
        maxWidth: '150px',
        height: '50px',
        transition: 'all 0.1s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#666666',
        borderRadius: '4px',
      }}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkButton;

type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
};
