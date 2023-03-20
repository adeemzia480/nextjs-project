import React from 'react';
import cn from 'classnames';
import Reusable004 from 'components/Reusable004';
import ReusableShowCaseVideo from 'components/ReusableShowCaseVideo';
import Reusable12 from 'components/Reusable12';
import Reusable41 from 'components/Reusable41';
import Reusable40 from 'components/Reusable40';
import Footer from 'components/Footer';
import Headroom from 'react-headroom';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';

import styles from './CreatorProfilePage.module.scss';

export default function CreatorProfilePage(props) {
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

      <main className={cn(styles.main, 'creator-profile-page')}>
        <div className={styles.main__item}>
          <div className={styles.section1}>
            <Reusable004 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section2}>
            <ReusableShowCaseVideo />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section4}>
            <Reusable12 />
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

CreatorProfilePage.inStorybook = true;
