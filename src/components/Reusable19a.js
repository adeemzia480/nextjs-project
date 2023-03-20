import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Reusable19a.module.scss';

export default function Reusable19a(props) {
  return (
    <div className={cn(styles.box1, 'reusable19a')}>
      <div className={styles.wrapper2}>
        <div className={styles.wrapper2__item}>
          <img src={props.image} alt="alt text" className={styles.image} />
        </div>
        <h2 className={styles.medium_title}>{props.medium_title}</h2>

        <div className={styles.wrapper3}>
          <div className={styles.wrapper4}>
            <div className={styles.text}>{props.text}</div>
          </div>

          <div className={styles.wrapper5}>
            <div className={styles.text1}>{props.text1}</div>
          </div>

          <div className={styles.wrapper6}>
            <div className={styles.text2}>{props.text2}</div>
          </div>
        </div>

        <h4 className={styles.highlights1_box}>
          <span className={styles.highlights1}>{props.highlights1}</span>
        </h4>

        <div className={styles.wrapper7}>
          <h3 className={styles.subtitle}>{props.subtitle}</h3>

          <div className={styles.wrapper8}>
            <div className={styles.wrapper8__item}>
              <img
                src={require('assets/3e1cd853b6c7e7e96ec5b6629fb6073f.png')}
                alt="alt text"
                className={styles.icon}
              />
            </div>
            <div className={styles.wrapper8__spacer} />
            <h4 className={styles.highlights2}>{props.highlights2}</h4>
          </div>
        </div>

        <div className={styles.wrapper9}>
          <div className={styles.flexRow}>
            <div className={styles.flexRow__item}>
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>{props.highlights3}</span>
              </button>
            </div>
            <div className={styles.flexRow__spacer} />
            <div className={styles.flexRow__item1}>
              <img
                src={require('assets/93bc59c3fe0ed66b18433ef0b82baea0.png')}
                alt="alt text"
                className={styles.image1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable19a.propTypes = {
  image: PropTypes.string.isRequired,
  medium_title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  highlights1: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  highlights2: PropTypes.string.isRequired,
  highlights3: PropTypes.string.isRequired
};

Reusable19a.inStorybook = true;
