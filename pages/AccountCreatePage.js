// import 'antd/dist/antd.css';
import { Input } from 'antd';
import cn from 'classnames';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import LoginLeft from 'components/LoginLeft';
import Image from 'next/Image';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './AccountCreatePage.module.scss';

export default function AccountCreatePage(props) {
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

      <div className={cn(styles.root, 'account-create-page')}>
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
                <h1 className={styles.hero_title}>Create Account</h1>
              </div>
              <h4 className={styles.highlights1}>
                {
                  "To access all of our exclusive features and benefits, please create an account. It's quick, easy, and free. We can't wait to have you join our community!"
                }
              </h4>

              <div className={styles.box3}>
                <div className={styles.box3__item}>
                  <div className={styles.box4}>
                    <div className={styles.box4__item}>
                      <Image
                        src={require('assets/ae40dae4c89e57d262be1bf5c9a6c051.png')}
                        alt="alt text"
                        className={styles.icon1}
                      />
                    </div>
                    <div className={styles.box4__spacer} />
                    <div className={styles.box4__item1}>
                      <h5 className={styles.highlights4}>Agency</h5>
                    </div>
                  </div>
                </div>
                <div className={styles.box3__spacer} />
                <div className={styles.box3__item1}>
                  <h5 className={styles.highlights5}>Brand</h5>
                </div>
              </div>

              <div className={styles.flexCol1}>
                <h5 className={styles.highlights2}>Email address</h5>
                <div className={styles.box1}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="Enter email id" />
                </div>
              </div>

              <div className={styles.flexCol2}>
                <h5 className={styles.highlights21}>Company Name</h5>
                <div className={styles.box1}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="Enter company name" />
                </div>
              </div>

              <div className={styles.flexCol2}>
                <h5 className={styles.highlights22}>Website</h5>
                <div className={styles.box1}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="Enter email id" />
                </div>
              </div>

              <div className={styles.flexCol2}>
                <h5 className={styles.highlights23}>Full Name</h5>
                <div className={styles.box1}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="Enter full name" />
                </div>
              </div>

              <div className={styles.flexCol2}>
                <h5 className={styles.highlights24}>Password</h5>
                <div className={styles.box1}>
                  <Input.Password style={{ width: '100%', height: '100%' }} placeholder="Enter password" />
                </div>
              </div>

              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Continue</span>
              </button>

              <px-grid
                x="107fr minmax(0px, max-content) 61fr"
                y="28px 21fr 0px"
                tn-x="107fr minmax(0px, max-content) 61fr"
                tn-y="28px 21fr 0px">
                <h4 className={styles.highlights_box}>
                  <span className={styles.highlights}>
                    <span className={styles.highlights_span0}>Clicked on the wrong page? </span>
                    <span className={styles.highlights_span1}>Go back</span>
                  </span>
                </h4>
              </px-grid>
            </div>
          </px-grid>
        </div>
      </div>
    </React.Fragment>
  );
}

AccountCreatePage.inStorybook = true;
