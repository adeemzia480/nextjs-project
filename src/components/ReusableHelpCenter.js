import React from 'react';
import cn from 'classnames';

import styles from './ReusableHelpCenter.module.scss';

export default function ReusableHelpCenter(props) {
  return (
    <div className={cn(styles.root, 'reusable-help-center')}>
      <div
        style={{ '--src': `url(${require('assets/703891d6aa07413f5701ffa9ad51c56d.png')})` }}
        className={styles.root1}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__item}>
            <div className={styles.wrapper1}>
              <h1 className={styles.hero_title}>Help Centre</h1>
              <h4 className={styles.highlights}>
                Empowering You to Find Solutions: Your One-Stop Destination for Support and Guidance
              </h4>
            </div>
          </div>
          <div className={styles.wrapper__spacer} />
          <div className={styles.wrapper__item1}>
            <div
              style={{ '--src': `url(${require('assets/f28dbcf3b6e1e932bae646adbf319a5f.png')})` }}
              className={styles.wrapper2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ReusableHelpCenter.inStorybook = true;
