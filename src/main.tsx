import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme.tsx';
import Home from './routes/Home/Home.tsx';
import Repos from './routes/Repos/Repos.tsx';
import { getGithubRepositories, getGithubUser, orderByOption } from './services/githubUserAPI.tsx';
import { clamp } from 'date-fns';


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
        loader: async ({params, request}) => {
          const { loginId } = params;

          const url = new URL(request.url);
          const page = Number(url.searchParams.get("page"));
          const order = url.searchParams.get("order");
          const perPage = 30;

          return await getGithubRepositories(loginId, perPage, page, order as orderByOption);
        }
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
