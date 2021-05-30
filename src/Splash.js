import React from 'react';
import { useHistory } from 'react-router-dom';
import './Splash.scss';
import { Button } from './components/Button';


const SplashScreen = ({ children }) => {
  const history = useHistory();

  const onCreateWallet = () => {
    history.push('/generator');
  };

  const goTo = (route) => {
    history.push(route);
  };

  return (
    <div className="splash-screen">
      <div className="header">
        <h1>SUCRE</h1>
      </div>
      <div className="logo">
        <h2>S</h2>
      </div>
      <div className="buttons">
        <div>
          <Button onClick={() => {goTo('/my-wallet')}}>
            My Wallet
          </Button>
        </div>
        <div>
          <Button onClick={() => {goTo('/generator')}}>
            Create Wallet
          </Button>
        </div>
        <div>
          <Button onClick={goTo('/import')}>
            Import
          </Button>
        </div>
      </div>
      <div className="footer">
        <span>DIGITAL SMART WALLET</span>
      </div>
    </div>
  );
};

export { SplashScreen };
