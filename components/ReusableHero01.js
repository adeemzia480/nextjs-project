import cn from 'classnames';
import PrimaryBtn from 'components/PrimaryBtn';
import Image from 'next/Image';
import React from 'react';

import styles from './ReusableHero01.module.scss';

export default function ReusableHero01(props) {
  return (
    <div className={cn(styles.root, 'reusable-hero01')}>
      <div className={styles.flexCol}>
        <h1 className={styles.hero_title}>Revolutionize Your Brand Deals with Creator Ads</h1>
        <h4 className={styles.highlights}>
          Maximize productivity and income, while minimizing unproductive time. Quickly find suitable influencers and
          companies with one glance.
        </h4>

        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <px-grid track-style="flex-grow: 1;" x="0fr minmax(145px,145fr) 0px" y="0px 47fr 0px">
              <div className={styles.btn} onClick={() => alert('It is clickable')}>
                <PrimaryBtn btn__text={`Get Started`} />
              </div>
            </px-grid>
          </div>
          <div className={styles.flexRow__item}>
            <Image src={require('assets/3a2a785e186398212f423644e9f9c23c.png')} alt="alt text" className={styles.icon} />
          </div>
        </div>
      </div>

      <Image src={require('assets/b5f559d2886a92608ef732ab2142881b.png')} alt="alt text" className={styles.decorator} />
    </div>
  );
}

ReusableHero01.inStorybook = true;
