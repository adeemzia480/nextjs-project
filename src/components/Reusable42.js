import React from 'react';
import cn from 'classnames';

import styles from './Reusable42.module.scss';

export default function Reusable42(props) {
  return (
    <section className={cn(styles.section5, 'reusable42')}>
      <div className={styles.section5__item}>
        <h1 className={styles.hero_title2}>How we Work?</h1>
      </div>

      <div className={styles.group}>
        <img src={require('assets/3e893f2dbb582e170a4efddecf353e08.png')} alt="alt text" className={styles.image4} />

        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol}>
              <div className={styles.flexCol__item}>
                <img
                  src={require('assets/7eb5ef0cd34ffe26e0e72bf8b91af908.png')}
                  alt="alt text"
                  className={styles.icon1}
                />
              </div>
              <div className={styles.flexCol__item}>
                <h2 className={styles.medium_title}>Create Account</h2>
              </div>
              <h5 className={styles.highlights7}>
                By connecting your YouTube account, creators stats will be automatically displayed on our website.
              </h5>
            </div>
          </div>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol}>
              <div className={styles.flexCol__item1}>
                <img
                  src={require('assets/9f4c45d6e0099e69fd538641fdaab47e.png')}
                  alt="alt text"
                  className={styles.icon11}
                />
              </div>
              <div className={styles.flexCol__item1}>
                <h2 className={styles.medium_title1}>Complete Profile</h2>
              </div>
              <h5 className={styles.highlights71}>
                {'Customize your profile with information. Brands can see your past conversions & click through ratio.'}
              </h5>
            </div>
          </div>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol}>
              <div className={styles.flexCol__item2}>
                <img
                  src={require('assets/45b1e747b2ed363b512e47cd3649f56c.png')}
                  alt="alt text"
                  className={styles.icon12}
                />
              </div>
              <div className={styles.flexCol__item2}>
                <h2 className={styles.medium_title2}>Find Each Other</h2>
              </div>
              <h5 className={styles.highlights72}>
                Through our efficient filter system, creators and brands can easily find each other, saving valuable
                time.
              </h5>
            </div>
          </div>
          <div className={styles.flexRow__item}>
            <div className={styles.flexCol}>
              <div className={styles.flexCol__item3}>
                <img
                  src={require('assets/3ab7e910268f7597cc4523488c9b0132.png')}
                  alt="alt text"
                  className={styles.icon13}
                />
              </div>
              <div className={styles.flexCol__item3}>
                <h2 className={styles.medium_title3}>Collaborate</h2>
              </div>
              <h5 className={styles.highlights73}>
                {
                  "Chat with creators, find the perfect deal, and accept offers securely with our website's high-tech system."
                }
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Reusable42.inStorybook = true;
