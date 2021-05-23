import logo from './logo.svg';
import './App.css';
import { Menu } from './components/Menu';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { BackgroundContainer, ContentContainer } from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ballet">
          <BackgroundContainer>
            <ContentContainer>
            </ContentContainer>
            <Menu>
            </Menu>
          </BackgroundContainer>
        </Route>
        <Route path="/splash">
          <h1>splash</h1>
        </Route>
        <Route path="/">
          <h1>default</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
