import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { SplashScreen } from './Splash';
import { MyWallet } from './wallet';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/my-wallet">
            <MyWallet></MyWallet>
          </Route>
          <Route path="/splash">
            <h1>splash</h1>
          </Route>
          <Route path="/generator">
            <h1>generator</h1>
          </Route>
          <Route path="/">
            <SplashScreen></SplashScreen>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
