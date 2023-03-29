import cn from 'classnames';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Reusable01 from 'components/Reusable01';
import Reusable16 from 'components/Reusable16';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './SupportPage.module.scss';

export default function SupportPage(props) {
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

      <main className={cn(styles.main, 'support-page')}>
        <div className={styles.section1}>
          <Reusable01
            hero_title={`Revolutionize Your Brand Deals with Creator Ads`}
            highlights={`Maximize productivity and income, while minimizing unproductive time. Quickly find suitable influencers and companies with one glance.`}
          />
        </div>
        <div className={styles.section2}>
          <Reusable16 />
        </div>
        <div className={styles.section8}>
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
}

SupportPage.inStorybook = true;
