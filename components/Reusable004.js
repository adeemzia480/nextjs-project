import cn from 'classnames';
import React from 'react';

import img01 from 'assets/a1d46cd81716d95e24eb00bbda6e5638.png';
import Image from 'next/image';
import styles from './Reusable004.module.scss';

export default function Reusable004(props) {
  return (
    <div className={cn(styles.root, 'reusable004')}>
      <div className={styles.group}>
        <div
          style={{ '--src': `url(${img01.src})` }}
          className={styles.image}
        />

        <div className={styles.grid}>
          <div className={styles.grid__cell}>
            <div className={styles.flexRow}>
              <div className={styles.flexRow__cell}>
                <Image
                  src={require('assets/c4be92beecd3c4e9b0cdbde56da9d972.png')}
                  alt="alt text"
                  className={styles.image1}
                />
              </div>
              <div className={styles.flexRow__cell1}>
                <div className={styles.flexRow1}>
                  <div className={styles.flexRow1__cell}>
                    <h2 className={styles.medium_title}>Robert Smith</h2>
                  </div>
                  <div className={styles.flexRow1__cell}>
                    <h3 className={styles.subtitle}>Los Angeles, United States</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid__cell}>
            <div className={styles.content_box}>
              <div className={styles.flexRow2}>
                <div className={styles.flexRow2__cell}>
                  <div className={styles.flexCol}>
                    <h1 className={styles.title}>144K</h1>
                    <h5 className={styles.highlights1}>Subscribers</h5>
                  </div>
                </div>
                <div className={styles.flexRow2__cell}>
                  <div className={styles.flexCol}>
                    <h1 className={styles.title1}>654K</h1>
                    <h5 className={styles.highlights1}>Monthly Views</h5>
                  </div>
                </div>
                <div className={styles.flexRow2__cell}>
                  <div className={styles.flexCol}>
                    <h1 className={styles.title2}>18-24</h1>
                    <h5 className={styles.highlights1}>Age Range</h5>
                  </div>
                </div>
              </div>

              <hr size={1} className={styles.line} />

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

              <hr size={1} className={styles.line1} />

              <div className={styles.flexRow5}>
                <div className={styles.flexRow5__cell}>
                  <button className={styles.btn} onClick={() => alert('It is clickable')}>
                    <span className={styles.btn__text}>Contact Now</span>
                  </button>
                </div>
                <div className={styles.flexRow5__spacer} />

                <div className={styles.flexRow6}>
                  <div className={styles.flexRow6__cell}>
                    <Image
                      src={require('assets/4e142ad7c5c7bbd86ceef580f11fcefd.png')}
                      alt="alt text"
                      className={styles.image2}
                    />
                  </div>
                  <div className={styles.flexRow6__spacer} />
                  <div className={styles.flexRow6__cell1}>
                    <Image
                      src={require('assets/3255f44327340ed19b7e935adf97c91a.png')}
                      alt="alt text"
                      className={styles.image3}
                    />
                  </div>
                  <div className={styles.flexRow6__spacer} />
                  <div className={styles.flexRow6__cell2}>
                    <Image
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
    </div>
  );
}

Reusable004.inStorybook = true;
