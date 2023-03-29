import { Rate } from 'antd';
import cn from 'classnames';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Image from 'next/image';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './SettingPage.module.scss';

export default function SettingPage(props) {
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

      <div className={cn(styles.root, 'setting-page')}>
        <div className={styles.flexCol}>
          <div className={styles.wrapper}>
            <div className={styles.wrapper__item}>
              <h3 className={styles.subtitle_box}>
                <span className={styles.subtitle}>
                  <span className={styles.subtitle_span0}>Rate your experience working with</span>
                  <span className={styles.subtitle_span1}> Mr. Beast</span>
                </span>
              </h3>
            </div>
            <div className={styles.wrapper__spacer} />
            <div className={styles.wrapper__item1}>
              <Image
                src={require('assets/0c0792e396fdabf569c4ad947f12799a.png')}
                alt="alt text"
                className={styles.icon}
              />
            </div>
          </div>

          <div className={styles.flexRow}>
            <Rate defaultValue={3} />
          </div>

          <div className={styles.box}>
            <h5 className={styles.highlights}>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
              aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
              pariatur duis deserunt mollit dolore cillum minim tempor enim.{' '}
            </h5>
          </div>

          <div className={styles.wrapper2}>
            <div className={styles.wrapper2__item}>
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Submit</span>
              </button>
            </div>
            <div className={styles.wrapper2__spacer} />
            <div className={styles.wrapper2__item1}>
              <div className={styles.wrapper3}>
                <div className={styles.wrapper3__item}>
                  <div className={styles.wrapper4}>
                    <h5 className={styles.highlights1}>Total Impressions</h5>

                    <div className={styles.box2}>
                      <div className={styles.info}>110.323 Views</div>
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper3__spacer} />
                <div className={styles.wrapper3__item1}>
                  <div className={styles.wrapper5}>
                    <h5 className={styles.highlights1}>Conversion Rate</h5>

                    <div className={styles.box3}>
                      <div className={styles.info}>1.2 %</div>
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper3__spacer} />
                <div className={styles.wrapper3__item2}>
                  <div className={styles.wrapper6}>
                    <h5 className={styles.highlights1}>Click Through Rate</h5>

                    <div className={styles.box4}>
                      <div className={styles.info1}>0.9 %</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

SettingPage.inStorybook = true;
