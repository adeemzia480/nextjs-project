import { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Hero from 'components/Hero';

import AOS from 'aos';
import AccountCreate__1 from 'components/AccountCreate__1';
import AccountLinkAcct__7 from 'components/AccountLinkAcct__7';
import AccountLogin__3 from 'components/AccountLogin__3';
import AccountStarted__5 from 'components/AccountStarted__5';
import ForgetPassword__2 from 'components/ForgetPassword__2';
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
              <Link to="/Hero">Hero</Link>
              <br />
              <Link to="/ForgetPassword__2">ForgetPassword__2</Link>
              <br />
              <Link to="/AccountStarted__5">AccountStarted__5</Link>
              <br />
              <Link to="/AccountLogin__3">AccountLogin__3</Link>
              <br />
              <Link to="/AccountLinkAcct__7">AccountLinkAcct__7</Link>
              <br />
              <Link to="/AccountCreate__1">AccountCreate__1</Link>
            </div>
          </Route>

          <Route exact path="/Hero" component={Hero} />

          <Route
            exact
            path="/ForgetPassword__2"
            component={ForgetPassword__2}
          />
          <Route
            exact
            path="/AccountStarted__5"
            component={AccountStarted__5}
          />
          <Route exact path="/AccountLogin__3" component={AccountLogin__3} />
          <Route
            exact
            path="/AccountLinkAcct__7"
            component={AccountLinkAcct__7}
          />
          <Route exact path="/AccountCreate__1" component={AccountCreate__1} />
        </Switch>
      </Router>
    );
  }
}

export default App;
