import cn from 'classnames';
import BarChart01 from 'components/BarChart01';
import BarChart02 from 'components/BarChart02';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Reusable004 from 'components/Reusable004';
import Reusable12 from 'components/Reusable12';
import Reusable40 from 'components/Reusable40';
import Reusable41 from 'components/Reusable41';
import ReusableShowCaseVideo from 'components/ReusableShowCaseVideo';
import React from 'react';
import Headroom from 'react-headroom';

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
          <div className={styles.section3a}>
            <BarChart02 />
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
