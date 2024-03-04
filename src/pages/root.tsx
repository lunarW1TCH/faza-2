import { Outlet } from 'react-router-dom';
import Navigation from '../components/layout/navigation';
import Footer from '../components/layout/footer';
import VStack from '../components/containers/v-stack';

const Root = () => {
  return (
    <>
      <Navigation />
      <main
        css={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
  return (
    <main
      css={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <Navigation />
      <VStack>
        <Outlet />
      </VStack>

      <Footer />
    </main>
  );
};

export default Root;
