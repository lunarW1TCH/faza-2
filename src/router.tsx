import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/root';
import App from './App';

const router = createBrowserRouter([
  {
    path: '',
    Component: Root,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: 'todo1',
      },
      {
        path: 'todo2',
      },
      {
        path: 'todo3',
      },
    ],
  },
]);

export default router;
