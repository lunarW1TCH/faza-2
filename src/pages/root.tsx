import { Outlet } from 'react-router-dom';
import Navigation from '../components/layout/navigation';
import Footer from '../components/layout/footer';

const Root = () => {
  return (
    <main
      css={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flexGrow: 1,
      }}
    >
      <Navigation />
      <div
        css={{
          flexGrow: 1,
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Root;
