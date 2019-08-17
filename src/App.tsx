import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';
import Atzoatl from './components/Atzoatl';
import Currency from './components/Currency';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="header-ctr">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                상점 환율
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/atzoatl/">
                앗조아틀
              </Link>
            </li>
            <li>신디케이트</li>
          </ul>
        </nav>
      </div>

      <Route path="/" exact component={Currency} />
      <Route path="/atzoatl/" component={Atzoatl} />
    </Router>
  );
};

export default App;

/*
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyFlaskQuality.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyWeaponQuality.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyIdentification.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyArmourQuality.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyDuplicate.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeRandomly.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyPassiveSkillRefund.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeRandomly.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeMagicToRare.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyPortal.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyFlaskQuality.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyGemQuality.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketColours.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketLinks.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollSocketNumbers.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyModValues.png
https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyMapQuality.png
 */
