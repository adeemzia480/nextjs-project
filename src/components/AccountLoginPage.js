import React from 'react';
import cn from 'classnames';
import LoginLeft from 'components/LoginLeft';
import Input from 'antd/es/input';
import 'antd/dist/antd.css';
import Headroom from 'react-headroom';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';

import styles from './AccountLoginPage.module.scss';

export default function AccountLoginPage(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show lg:hide">
          <Header />
        </nav>
        <nav className="lg:show">
          <HeaderMobile />
        </nav>
      </Headroom>

      <div className={cn(styles.root, 'account-login-page')}>
        <div className={styles.root__item}>
          <div className={styles.box}>
            <LoginLeft />
          </div>
        </div>
        <div className={styles.root__item1}>
          <px-grid
            track-style="flex-grow: 1;"
            x="0px 506fr 0px"
            y="1fr minmax(0px, max-content) 1fr"
            lg-x="20px 506fr 20px"
            lg-y="1fr minmax(0px, max-content) 1fr"
            md-x="20px 506fr 20px"
            md-y="1fr minmax(0px, max-content) 1fr">
            <div className={styles.flexCol}>
              <div className={styles.flexCol__item}>
                <h1 className={styles.hero_title}>Account Log In</h1>
              </div>
              <h4 className={styles.highlights2_box}>
                <span className={styles.highlights2}>
                  <span className={styles.highlights2_span0}>
                    {
                      'Welcome back! Log in with your email and password. Forgot your password? Click "forgot password".  Not a member? '
                    }
                  </span>
                  <span className={styles.highlights2_span1}>Sign up now</span>
                  <span className={styles.highlights2_span2}>!</span>
                </span>
              </h4>

              <div className={styles.flexCol1}>
                <h5 className={styles.highlights3}>Email / Username</h5>
                <div className={styles.box1}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>

              <div className={styles.flexCol2}>
                <h5 className={styles.highlights31}>Password</h5>
                <div className={styles.box2}>
                  <Input.Password style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>

              <h4 className={styles.highlights1}>Forgot Password?</h4>

              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Continue</span>
              </button>

              <h4 className={styles.highlights_box}>
                <span className={styles.highlights}>
                  <span className={styles.highlights_span0}>Clicked on the wrong page? </span>
                  <span className={styles.highlights_span1}>Go back</span>
                </span>
              </h4>
            </div>
          </px-grid>
        </div>
      </div>
    </React.Fragment>
  );
}

AccountLoginPage.inStorybook = true;
