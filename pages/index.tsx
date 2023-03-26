import { Component } from 'react';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import AOS from 'aos';
import Link from 'next/link';
import 'normalize.css';
import { isMobile } from 'react-device-detect';

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
      <>
        Screen List: <br />
        <Link href="/SupportPage">SupportPage</Link>
        <br />
        <Link href="/SettingPage">SettingPage</Link>
        <br />
        <Link href="/Resuable23">Resuable23</Link>
        <br />
        <Link href="/ForgetPasswordPage">ForgetPasswordPage</Link>
        <br />
        <Link href="/DashboardData">DashboardData</Link>
        <br />
        <Link href="/CreatorProfilePage1">CreatorProfilePage1</Link>
        <br />
        <Link href="/CreatorProfilePage">CreatorProfilePage</Link>
        <br />
        <Link href="/CompanyForPost">CompanyForPost</Link>
        <br />
        <Link href="/CompanyForCreators">CompanyForCreators</Link>
        <br />
        <Link href="/BeforeLoginPage02">BeforeLoginPage02</Link>
        <br />
        <Link href="/BeforeLoginPage">BeforeLoginPage</Link>
        <br />
        <Link href="/AfterLoginPage">AfterLoginPage</Link>
        <br />
        <Link href="/AdMenuPage">AdMenuPage</Link>
        <br />
        <Link href="/AccountStarterPage">AccountStarterPage</Link>
        <br />
        <Link href="/AccountLoginPage">AccountLoginPage</Link>
        <br />
        <Link href="/AccountLinkPage">AccountLinkPage</Link>
        <br />
        <Link href="/AccountCreatePage">AccountCreatePage</Link>
        <br />
        <Link href="/ChatPage">Chat Page</Link>
      </>

    );
  }
}

export default App;
