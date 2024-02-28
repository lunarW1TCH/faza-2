import LinkButton from './link-button';

const Navigation = () => {
  return (
    <nav
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottom: 'solid 1px #eeeeee',
      }}
    >
      <LinkButton to='/'>Home</LinkButton>
      <LinkButton to='/todo1'>TODO1</LinkButton>
      <LinkButton to='/todo2'>TODO2</LinkButton>
      <LinkButton to='/todo3'>TODO3</LinkButton>
    </nav>
  );
};

export default Navigation;
