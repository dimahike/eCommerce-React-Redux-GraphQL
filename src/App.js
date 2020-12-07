import Header from './components/Header';
import Homepage from './pages/Homepage';

import './default.scss';
import Registration from './pages/Registration';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div> */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route path="/registration">
          <MainLayout>
            <Registration />
          </MainLayout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
