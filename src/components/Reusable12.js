import React from 'react';
import cn from 'classnames';

import styles from './Reusable12.module.scss';

export default function Reusable12(props) {
  return (
    <div className={cn(styles.root, 'reusable12')}>
      <h1 className={styles.title}>My Collaborations</h1>

      <div className={styles.flexRow}>
        <div className={styles.flexRow__item}>
          <px-grid track-style="flex-grow: 1;" x="0px 153fr 0px" y="27fr minmax(0px, max-content) 39fr">
            <img className={styles.image} src={require('assets/15a6e99b815c1164f6fcfb32c61503a0.png')} alt="alt text" />
          </px-grid>
        </div>
        <div className={styles.flexRow__item1}>
          <px-grid track-style="flex-grow: 1;" x="0px 181fr 0px" y="26fr 69px 24fr">
            <img
              className={styles.image1}
              src={require('assets/2289d053900dc90a6ae6234170e21e7c.png')}
              alt="alt text"
            />
          </px-grid>
        </div>
        <div className={styles.flexRow__item2}>
          <px-grid track-style="flex-grow: 1;" x="0px 140fr 0px" y="29fr 66px 24fr">
            <img
              className={styles.image2}
              src={require('assets/9ef00c9bdf5f012e567de02de4ce1e44.png')}
              alt="alt text"
            />
          </px-grid>
        </div>
        <div className={styles.flexRow__item1}>
          <px-grid track-style="flex-grow: 1;" x="0px 181fr 0px" y="0fr 52px 0fr">
            <img
              className={styles.image3}
              src={require('assets/d40a56348fda03df7cc220f4f6588c29.png')}
              alt="alt text"
            />
          </px-grid>
        </div>
        <div className={styles.flexRow__item2}>
          <px-grid track-style="flex-grow: 1;" x="0px 140fr 0px" y="0fr minmax(0px, max-content) 59fr">
            <img
              className={styles.image4}
              src={require('assets/993ba55ed0b765e029773c183d282ee5.png')}
              alt="alt text"
            />
          </px-grid>
        </div>
        <div className={styles.flexRow__item3}>
          <px-grid track-style="flex-grow: 1;" x="0px 189fr 0px" y="25fr 59px 35fr">
            <img
              className={styles.image5}
              src={require('assets/318e9574a1e49e256912faa61bc6dc75.png')}
              alt="alt text"
            />
          </px-grid>
        </div>
      </div>

      <div className={styles.root__item}>
        <button className={styles.btn} onClick={() => alert('It is clickable')}>
          <span className={styles.btn__text}>See More</span>
        </button>
      </div>
    </div>
  );
}

Reusable12.inStorybook = true;
