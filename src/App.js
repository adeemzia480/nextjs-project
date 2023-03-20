import SupportPage from 'components/SupportPage';
import { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import SettingPage from 'components/SettingPage';

import Resuable23 from 'components/Resuable23';

import ForgetPasswordPage from 'components/ForgetPasswordPage';

import CompanyForCreators from 'components/CompanyForCreators';
import CompanyForPost from 'components/CompanyForPost';
import CreatorProfilePage from 'components/CreatorProfilePage';
import CreatorProfilePage1 from 'components/CreatorProfilePage1';
import DashboardData from 'components/DashboardData';

import AOS from 'aos';
import AccountCreatePage from 'components/AccountCreatePage';
import AccountLinkPage from 'components/AccountLinkPage';
import AccountLoginPage from 'components/AccountLoginPage';
import AccountStarterPage from 'components/AccountStarterPage';
import AdMenuPage from 'components/AdMenuPage';
import AfterLoginPage from 'components/AfterLoginPage';
import BeforeLoginPage from 'components/BeforeLoginPage';
import BeforeLoginPage02 from 'components/BeforeLoginPage02';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './fonts.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              Screen List: <br />
              <Link to="/SupportPage">SupportPage</Link>
              <br />
              <Link to="/SettingPage">SettingPage</Link>
              <br />
              <Link to="/Resuable23">Resuable23</Link>
              <br />
              <Link to="/ForgetPasswordPage">ForgetPasswordPage</Link>
              <br />
              <Link to="/DashboardData">DashboardData</Link>
              <br />
              <Link to="/CreatorProfilePage1">CreatorProfilePage1</Link>
              <br />
              <Link to="/CreatorProfilePage">CreatorProfilePage</Link>
              <br />
              <Link to="/CompanyForPost">CompanyForPost</Link>
              <br />
              <Link to="/CompanyForCreators">CompanyForCreators</Link>
              <br />
              <Link to="/BeforeLoginPage02">BeforeLoginPage02</Link>
              <br />
              <Link to="/BeforeLoginPage">BeforeLoginPage</Link>
              <br />
              <Link to="/AfterLoginPage">AfterLoginPage</Link>
              <br />
              <Link to="/AdMenuPage">AdMenuPage</Link>
              <br />
              <Link to="/AccountStarterPage">AccountStarterPage</Link>
              <br />
              <Link to="/AccountLoginPage">AccountLoginPage</Link>
              <br />
              <Link to="/AccountLinkPage">AccountLinkPage</Link>
              <br />
              <Link to="/AccountCreatePage">AccountCreatePage</Link>
            </div>
          </Route>

          <Route exact path="/SupportPage" component={SupportPage} />

          <Route exact path="/SettingPage" component={SettingPage} />

          <Route exact path="/Resuable23" component={Resuable23} />

          <Route
            exact
            path="/ForgetPasswordPage"
            component={ForgetPasswordPage}
          />

          <Route exact path="/DashboardData" component={DashboardData} />
          <Route
            exact
            path="/CreatorProfilePage1"
            component={CreatorProfilePage1}
          />
          <Route
            exact
            path="/CreatorProfilePage"
            component={CreatorProfilePage}
          />
          <Route exact path="/CompanyForPost" component={CompanyForPost} />
          <Route
            exact
            path="/CompanyForCreators"
            component={CompanyForCreators}
          />

          <Route
            exact
            path="/BeforeLoginPage02"
            component={BeforeLoginPage02}
          />
          <Route exact path="/BeforeLoginPage" component={BeforeLoginPage} />
          <Route exact path="/AfterLoginPage" component={AfterLoginPage} />
          <Route exact path="/AdMenuPage" component={AdMenuPage} />
          <Route
            exact
            path="/AccountStarterPage"
            component={AccountStarterPage}
          />
          <Route exact path="/AccountLoginPage" component={AccountLoginPage} />
          <Route exact path="/AccountLinkPage" component={AccountLinkPage} />
          <Route
            exact
            path="/AccountCreatePage"
            component={AccountCreatePage}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
