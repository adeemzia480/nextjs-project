import cn from 'classnames';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Reusable003 from 'components/Reusable003';
import Reusable01 from 'components/Reusable01';
import Reusable02 from 'components/Reusable02';
import Reusable40 from 'components/Reusable40';
import Reusable41 from 'components/Reusable41';
import Reusable42 from 'components/Reusable42';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './BeforeLoginPage02.module.scss';

export default function BeforeLoginPage02(props) {
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

      <main className={cn(styles.main, 'before-login-page02')}>
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
          <div className={styles.section4}>
            <Reusable003 />
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

BeforeLoginPage02.inStorybook = true;
