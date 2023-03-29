import cn from 'classnames';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Reusable24 from 'components/Reusable24';
import Reusable25 from 'components/Reusable25';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './Reusable23.module.scss';

export default function Reusable23(props) {
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

      <div className={cn(styles.root, 'deal-page')}>
        <div className={styles.flexRow}>
          <div className={styles.flexRow__cell}>
            <div className={styles.box}>
              <Reusable25 />
            </div>
          </div>
          <div className={styles.flexRow__spacer} />
          <div className={styles.flexRow__cell1}>
            <div className={styles.wrapper10}>
              <Reusable24 />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Reusable23.inStorybook = true;
