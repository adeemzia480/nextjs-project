import React from 'react';
import cn from 'classnames';

import styles from './Reusable004.module.scss';

export default function Reusable004(props) {
  return (
    <div className={cn(styles.root, 'reusable004')}>
      <px-grid track-style="flex-grow: 1;" x="0px 1440fr 0px" y="0fr 571fr 0fr">
        <div className={styles.group}>
          <img src={require('assets/a1d46cd81716d95e24eb00bbda6e5638.png')} alt="alt text" className={styles.image} />

          <div className={styles.grid}>
            <div className={styles.grid__item}>
              <div className={styles.flexRow}>
                <div className={styles.flexRow__item}>
                  <img
                    src={require('assets/c4be92beecd3c4e9b0cdbde56da9d972.png')}
                    alt="alt text"
                    className={styles.image1}
                  />
                </div>
                <div className={styles.flexRow__item1}>
                  <div className={styles.flexRow1}>
                    <div className={styles.flexRow1__item}>
                      <px-grid track-style="flex-grow: 1;" x="0fr 142px 0fr" y="0fr 30px 0fr">
                        <h2 className={styles.medium_title}>Robert Smith</h2>
                      </px-grid>
                    </div>
                    <div className={styles.flexRow1__item1}>
                      <px-grid
                        track-style="flex-grow: 1;"
                        x="0px 238px 0px"
                        y="0fr 30px 0fr"
                        xs-x="auto 238px auto"
                        xs-y="0fr 30px 0fr">
                        <h3 className={styles.subtitle}>Los Angeles, United States</h3>
                      </px-grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.grid__item}>
              <div className={styles.content_box}>
                <div className={styles.flexRow2}>
                  <div className={styles.flexRow2__item}>
                    <div className={styles.flexCol}>
                      <h1 className={styles.title}>144K</h1>
                      <h5 className={styles.highlights1}>Subscribers</h5>
                    </div>
                  </div>
                  <div className={styles.flexRow2__item}>
                    <div className={styles.flexCol}>
                      <h1 className={styles.title1}>654K</h1>
                      <h5 className={styles.highlights1}>Monthly Views</h5>
                    </div>
                  </div>
                  <div className={styles.flexRow2__item}>
                    <div className={styles.flexCol}>
                      <h1 className={styles.title2}>18-24</h1>
                      <h5 className={styles.highlights1}>Age Range</h5>
                    </div>
                  </div>
                </div>

                <hr size={1} className={styles.line} />
                <px-grid
                  x="5.35% 94.65% 0%"
                  y="8px 199fr 0px"
                  xl-x="7.31% clamp(0px, 92.69%, 92.69%) 0%"
                  xl-y="8px 199fr 0px">
                  <div className={styles.flexCol1}>
                    <h2 className={styles.medium_title1}>Advertisement Details</h2>

                    <div className={styles.flexRow3}>
                      <h5 className={styles.highlights11}>Advertisement Type :</h5>
                      <h3 className={styles.subtitle1}>30 sec Ads</h3>
                    </div>

                    <div className={styles.flexRow4}>
                      <h5 className={styles.highlights12}>Lorem Ipsum sit: </h5>
                      <div className={styles.flexRow4__spacer} />
                      <h3 className={styles.subtitle1}>30 sec Ads</h3>
                    </div>

                    <div className={styles.flexRow4}>
                      <h5 className={styles.highlights12}>Lorem Ipsum sit: </h5>
                      <div className={styles.flexRow4__spacer1} />
                      <h3 className={styles.subtitle1}>30 sec Ads</h3>
                    </div>
                  </div>
                </px-grid>
                <hr size={1} className={styles.line1} />

                <div className={styles.flexRow5}>
                  <div className={styles.content_box1}>
                    <h5 className={styles.highlights}>Contact Now</h5>
                  </div>

                  <div className={styles.flexRow5__spacer} />

                  <div className={styles.flexRow6}>
                    <div className={styles.flexRow6__item}>
                      <img
                        src={require('assets/4e142ad7c5c7bbd86ceef580f11fcefd.png')}
                        alt="alt text"
                        className={styles.image2}
                      />
                    </div>
                    <div className={styles.flexRow6__spacer} />
                    <div className={styles.flexRow6__item1}>
                      <img
                        src={require('assets/3255f44327340ed19b7e935adf97c91a.png')}
                        alt="alt text"
                        className={styles.image3}
                      />
                    </div>
                    <div className={styles.flexRow6__spacer} />
                    <div className={styles.flexRow6__item2}>
                      <img
                        src={require('assets/e6bc7dffdeb35fbfdf110d658ec05d8f.png')}
                        alt="alt text"
                        className={styles.image4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </px-grid>
    </div>
  );
}

Reusable004.inStorybook = true;
