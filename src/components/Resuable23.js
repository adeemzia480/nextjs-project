import React from 'react';
import cn from 'classnames';
import Reusable25 from 'components/Reusable25';
import Reusable24 from 'components/Reusable24';
import Headroom from 'react-headroom';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';

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
