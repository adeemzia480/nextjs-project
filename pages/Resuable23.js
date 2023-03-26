import cn from 'classnames';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Reusable24 from 'components/Reusable24';
import Reusable25 from 'components/Reusable25';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './Resuable23.module.scss';

export default function Resuable23(props) {
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

      <div className={cn(styles.root, 'resuable23')}>
        <div className={styles.flexRow}>
          <div className={styles.box}>
            <Reusable25 />
          </div>
          <div className={styles.flexRow__spacer} />
          <div className={styles.wrapper10}>
            <Reusable24 />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Resuable23.inStorybook = true;
