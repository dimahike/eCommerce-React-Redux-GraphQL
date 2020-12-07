import Header from './components/Header';
import Hompage from './pages/Homepage';

import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Hompage />
      </div>
    </div>
  );
}

export default App;
