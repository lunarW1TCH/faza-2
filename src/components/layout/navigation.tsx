import LinkButton from '../ui/link-button';

const Navigation = () => {
  return (
    <nav
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: '8px',
        marginBottom: '8px',
        marginLeft: '16px',
        marginRight: '16px',
      }}
    >
      <LinkButton to='/'>Home</LinkButton>
      <LinkButton to='/todo1'>Todo 1</LinkButton>
      <LinkButton to='/todo2'>Todo 2</LinkButton>
      <LinkButton to='/todo3'>Todo 3</LinkButton>
    </nav>
  );
};

export default Navigation;
