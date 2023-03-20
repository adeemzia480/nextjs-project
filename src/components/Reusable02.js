import React from 'react';
import cn from 'classnames';

import styles from './Reusable02.module.scss';

export default function Reusable02(props) {
  return (
    <section className={cn(styles.section2, 'reusable02')}>
      <px-grid x="81.5px minmax(0px,1440px) 81.5px" y="0fr 207fr 0px">
        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol}>
              <div className={styles.flexCol__item}>
                <div
                  style={{ '--src': `url(${require('assets/bdb0918d227a6c563a58a3a0c2c62e5a.png')})` }}
                  className={styles.image21}
                />
              </div>
              <div className={styles.flexCol__item}>
                <img
                  src={require('assets/2db07d32f1cb9f295fc94bbfadd16ef9.png')}
                  alt="alt text"
                  className={styles.image3}
                />
              </div>
              <h5 className={styles.highlights5}>Our platform boasts over 10,000+ creators!</h5>
            </div>
          </div>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol1}>
              <div className={styles.flexCol1__item}>
                <div
                  style={{ '--src': `url(${require('assets/9f222a52b3fdc05c1a3ac896e9b40356.png')})` }}
                  className={styles.image22}
                />
              </div>
              <div className={styles.flexCol1__item}>
                <img
                  src={require('assets/90bc9de63144d5a8f32308c5c4f2f929.png')}
                  alt="alt text"
                  className={styles.image31}
                />
              </div>
              <h5 className={styles.highlights51}>Our platform provides for over 10,000+ brands!</h5>
            </div>
          </div>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol2}>
              <h1 className={styles.title}>Helping 10,232+ Brand to connect with influencers around the globe</h1>
              <h5 className={styles.highlights6}>
                Our platform is dedicated to helping brands of all sizes and industries connect with the perfect
                influencers to promote their products or services.
              </h5>
            </div>
          </div>
        </div>
      </px-grid>
      <div className={styles.section2__item}>
        <hr size={1} className={styles.line2} />
      </div>
    </section>
  );
}

Reusable02.inStorybook = true;
