import React from 'react';
import cn from 'classnames';

import styles from './GettingStarted__4.module.scss';

export default function GettingStarted__4(props) {
  return (
    <div className={cn(styles.root, 'getting-started-4')}>
      <div className={styles.root__item}>
        <h1 className={styles.hero_title}>Get Started</h1>
      </div>
      <h4 className={styles.highlights}>
        Please select the category that best describes you: content creator, company, or management team (which falls
        under the company category).
      </h4>

      <div className={styles.flexCol}>
        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <div className={styles.box}>
              <div className={styles.flexCol1}>
                <h2 className={styles.medium_title}>Creator</h2>
                <p className={styles.paragraph}>Are you a YouTube creator in search of brand deals?</p>
              </div>
            </div>
          </div>
          <div className={styles.flexRow__item1}>
            <div className={styles.box1}>
              <div className={styles.flexCol1}>
                <h2 className={styles.medium_title1}>Company</h2>
                <p className={styles.paragraph1}>Are you a company or Management team.</p>
              </div>
            </div>
          </div>
        </div>

        <button className={styles.btn} onClick={() => alert('It is clickable')}>
          <span className={styles.btn__text}>Continue</span>
        </button>
      </div>
    </div>
  );
}

GettingStarted__4.inStorybook = true;
