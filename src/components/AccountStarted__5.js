import React from 'react';
import cn from 'classnames';
import LoginLeft from 'components/LoginLeft';
import GettingStarted__4 from 'components/GettingStarted__4';
import Headroom from 'react-headroom';
import Header from 'components/Header';

import styles from './AccountStarted__5.module.scss';

export default function AccountStarted__5(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show">
          <Header />
        </nav>
      </Headroom>

      <div className={cn(styles.root, 'account-started-5')}>
        <div className={styles.root__item}>
          <div className={styles.box}>
            <LoginLeft />
          </div>
        </div>
        <div className={styles.root__item1}>
          <px-grid
            track-style="flex-grow: 1;"
            x="1fr 506px 1fr"
            y="1fr minmax(0px, max-content) 1fr"
            lg-x="20fr 506px 20fr"
            lg-y="1fr minmax(0px, max-content) 1fr"
            md-x="20fr 506px 20fr"
            md-y="1fr minmax(0px, max-content) 1fr">
            <div className={styles.component}>
              <GettingStarted__4 />
            </div>
          </px-grid>
        </div>
      </div>
    </React.Fragment>
  );
}

AccountStarted__5.inStorybook = true;
