import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';


import App from './App.jsx';
import About from './components/pages/About.jsx';
import Portfolio from './components/pages/Portfolio.jsx'; 
import Error from './components/pages/Error.jsx';
import Contact from './components/pages/Contact.jsx';
import Resume from './components/pages/Resume.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{
    backgroundColor: '#364e68',
    height: '100vh',
  }}>
  <RouterProvider router={router} />
  </div>
);