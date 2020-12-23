import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from '../Header';
import { HomePage, FavoritePage, DetailsPage } from '../Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/favorites" component={FavoritePage} />
        <Route path="/details" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
