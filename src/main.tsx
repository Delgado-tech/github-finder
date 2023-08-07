import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme.tsx';
import Home from './routes/Home/Home.tsx';
import Repos from './routes/Repos/Repos.tsx';
import { getGithubUser } from './services/githubUserAPI.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: async ({params}) => {
      const { loginId } = params;
      return await getGithubUser(loginId);
    },
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/:loginId',
        element: <Home />,

      },
      {
        path: '/:loginId/repos',
        element: <Repos />,
      }
    ]

  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
