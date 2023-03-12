import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './ReusableSec06.module.scss';

export default function ReusableSec06(props) {
  return (
    <div className={cn(styles.group, 'reusable-sec06')}>
      <px-grid
        track-style="overflow: auto;
flex-grow: 1;"
        area-style="overflow: hidden;"
        x="0px 505fr 0fr"
        y="50px 310fr 0fr">
        <div className={styles.box2}>
          <div className={styles.flexCol}>
            <px-grid x="0px 463fr 0px" y="0fr 120fr 0fr">
              <h5 className={styles.highlights7}>{props.highlights7}</h5>
            </px-grid>

            <div className={styles.flexCol1}>
              <h3 className={styles.subtitle}>{props.subtitle}</h3>
              <h5 className={styles.highlights71}>{props.highlights71}</h5>
            </div>
          </div>
        </div>
      </px-grid>
      <img src={props.icon2} alt="alt text" className={styles.icon2} />
    </div>
  );
}

ReusableSec06.propTypes = {
  highlights7: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  highlights71: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired
};

ReusableSec06.inStorybook = true;
