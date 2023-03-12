import React from 'react';
import cn from 'classnames';
import PrimaryBtn from 'components/PrimaryBtn';

import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <div className={cn(styles.group1, 'header')}>
      <div className={styles.group1__item}>
        <img src={require('assets/a9348fd605142d43d466a749aebe2b47.png')} alt="alt text" className={styles.image1} />
      </div>

      <div className={styles.flexRow}>
        <a className={styles.highlights1}>Home</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights}>Search Library</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights2}>Chats</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights3}>Settings</a>
        <div className={styles.flexRow__spacer} />
        <a className={styles.highlights4}>My Profile</a>
      </div>

      <div className={styles.flexRow1}>
        <div className={styles.flexRow2}>
          <div className={styles.flexRow2__item}>
            <img src={require('assets/6805d61b2d61b8b9f63a2d199e807cb3.png')} alt="alt text" className={styles.icon} />
          </div>
          <div className={styles.flexRow2__item1}>
            <h5 className={styles.highlights21}>ENG</h5>
          </div>
          <div className={styles.flexRow2__item2}>
            <img
              src={require('assets/ba6fcf7fe2d7f8bed836b03f68f961f8.png')}
              alt="alt text"
              className={styles.image2}
            />
          </div>
        </div>

        <div className={styles.flexRow1__spacer} />
        <div className={styles.box1}>
          <PrimaryBtn btn__text={`Log In`} />
        </div>
        <div className={styles.flexRow1__spacer1} />
        <div className={styles.flexRow1__item}>
          <button className={styles.btn} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text}>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}

Header.inStorybook = true;
