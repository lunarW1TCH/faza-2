import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

import Footer from './components/layout/footer';
import Navigation from './components/layout/navigation';
import LoadingFallback from './components/loading-fallback';

function App() {
  return (
    <Suspense
      fallback={
        <main>
          <LoadingFallback />
        </main>
      }
    >
      <Navigation />
      <main>{useRoutes(routes)}</main>
      <Footer />
    </Suspense>
  );
}

export default App;
