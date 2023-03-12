import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PrimaryBtn from 'components/PrimaryBtn';

import styles from './ReusableInfluencer.module.scss';

export default function ReusableInfluencer(props) {
  return (
    <div className={cn(styles.box13, 'reusable-influencer')}>
      <div className={styles.group}>
        <img src={props.image10} alt="alt text" className={styles.image10} />
        <img src={props.icon9} alt="alt text" className={styles.icon9} />
      </div>

      <div className={styles.flexCol}>
        <h2 className={styles.medium_title2}>{props.medium_title2}</h2>
        <h5 className={styles.highlights13}>{props.highlights13}</h5>
      </div>

      <div className={styles.flexRow}>
        <div className={styles.flexRow1}>
          <div className={styles.flexRow1__item}>
            <img
              src={require('assets/604e4ea789d9b0e14c525050930f7b96.png')}
              alt="alt text"
              className={styles.icon10}
            />
          </div>
          <h5 className={styles.highlights14}>{props.highlights14}</h5>
        </div>

        <div className={styles.flexRow__spacer} />

        <div className={styles.flexRow2}>
          <div className={styles.flexRow2__item}>
            <img
              src={require('assets/713174d7e4789babc30543e9b085b6d7.png')}
              alt="alt text"
              className={styles.icon101}
            />
          </div>
          <h5 className={styles.highlights141}>{props.highlights141}</h5>
        </div>

        <div className={styles.flexRow__spacer1} />

        <div className={styles.flexRow2}>
          <div className={styles.flexRow2__item1}>
            <img
              src={require('assets/78c0e9ef76bfe5e6fb71e9d33faf74e9.png')}
              alt="alt text"
              className={styles.icon102}
            />
          </div>
          <h5 className={styles.highlights142}>{props.highlights142}</h5>
        </div>
      </div>

      <hr size={1} className={styles.line6} />

      <div className={styles.flexRow3}>
        <div className={styles.btn} onClick={() => alert('It is clickable')}>
          <PrimaryBtn btn__text={`Contact Now`} />
        </div>
        <div className={styles.flexRow3__item}>
          <button className={styles.btn1} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text1}>View More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

ReusableInfluencer.propTypes = {
  image10: PropTypes.string.isRequired,
  icon9: PropTypes.string.isRequired,
  medium_title2: PropTypes.string.isRequired,
  highlights13: PropTypes.string.isRequired,
  highlights14: PropTypes.string.isRequired,
  highlights141: PropTypes.string.isRequired,
  highlights142: PropTypes.string.isRequired
};

ReusableInfluencer.inStorybook = true;
