import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from '../Header';
import { HomePage } from '../Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
