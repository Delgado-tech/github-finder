import { Outlet, useLoaderData } from 'react-router-dom';
import { AppContainer } from './App.style';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { githubUserParams, invalidUserReason } from './services/githubUserAPI';

function App() {

  const githubUser = useLoaderData() as githubUserParams | invalidUserReason.userNotFound;
  
  return (
    <AppContainer>
      <Header />
        {
          githubUser === invalidUserReason.userNotFound ? (
            <div className="app_userNotFound">
              <h2 className="font_display">404</h2>
              <p className="font_display">Usuário não encontrado!</p>
            </div>
          ) : (
            <main>
              <div className="app_sidebar">
                <Sidebar props={githubUser.props} />
              </div>
              <Outlet context={ githubUser }/>
            </main> 
          )
        }
    </AppContainer>
  )
}

export default App;
