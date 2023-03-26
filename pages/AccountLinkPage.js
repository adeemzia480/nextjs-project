import cn from 'classnames';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import LoginLeft from 'components/LoginLeft';
import Resuable001 from 'components/Resuable001';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './AccountLinkPage.module.scss';

export default function AccountLinkPage(props) {
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

      <div className={cn(styles.root, 'account-link-page')}>
        <div className={styles.root__item}>
          <div className={styles.box}>
            <LoginLeft />
          </div>
        </div>
        <div className={styles.root__item1}>
          <px-grid
            track-style="flex-grow: 1;"
            x="1fr clamp(0%, 99.61%, 506px) 1fr"
            y="1fr minmax(0px, max-content) 1fr"
            lg-x="20fr clamp(0%, 92.67%, 506px) 20fr"
            lg-y="1fr minmax(0px, max-content) 1fr"
            md-x="20fr clamp(0%, 92.67%, 506px) 20fr"
            md-y="1fr minmax(0px, max-content) 1fr">
            <div className={styles.component}>
              <Resuable001 />
            </div>
          </px-grid>
        </div>
      </div>
    </React.Fragment>
  );
}

AccountLinkPage.inStorybook = true;
