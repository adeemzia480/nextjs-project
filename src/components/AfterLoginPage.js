import React from 'react';
import cn from 'classnames';
import Reusable01 from 'components/Reusable01';
import Reusable02 from 'components/Reusable02';
import Resuable08 from 'components/Resuable08';
import ReusableSec01 from 'components/ReusableSec01';
import Reusable42 from 'components/Reusable42';
import Reusable41 from 'components/Reusable41';
import Reusable40 from 'components/Reusable40';
import Footer from 'components/Footer';
import Headroom from 'react-headroom';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';

import styles from './AfterLoginPage.module.scss';

export default function AfterLoginPage(props) {
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

      <main className={cn(styles.main, 'after-login-page')}>
        <div className={styles.main__item}>
          <div className={styles.section1}>
            <Reusable01
              hero_title={`Revolutionize Your Brand Deals with Creator Ads`}
              highlights={`Maximize productivity and income, while minimizing unproductive time. Quickly find suitable influencers and companies with one glance.`}
            />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section2}>
            <Reusable02 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section3}>
            <Resuable08 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section4}>
            <ReusableSec01 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section5}>
            <Reusable42 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section6}>
            <Reusable41 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section7}>
            <Reusable40 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section8}>
            <Footer />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

AfterLoginPage.inStorybook = true;
