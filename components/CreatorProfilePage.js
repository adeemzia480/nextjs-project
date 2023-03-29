import cn from 'classnames';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Reusable12 from 'components/Reusable12';
import Reusable40 from 'components/Reusable40';
import Reusable41 from 'components/Reusable41';
import React from 'react';
import Headroom from 'react-headroom';
import BarChart01 from './BarChart01';

import styles from './CreatorProfilePage.module.scss';
import Reusable15a from './Reusable15a';
import Reusable15b from './Reusable15b';
import Reusable15c from './Reusable15c';
import Reusable27 from './Reusable27';

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
            <Reusable15a />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section2}>
            <Reusable15b />
          </div>
        </div>

        <div className={styles.main__item}>
          <div className={styles.section3a}>
            <Reusable15c />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section3}>
            <BarChart01 />
          </div>
        </div>

        <div className={styles.main__item}>
          <div className={styles.section4}>
            <Reusable12 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section4}>
            <Reusable27 />
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
