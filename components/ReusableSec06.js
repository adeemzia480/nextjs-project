import cn from 'classnames';
import Image from 'next/Image';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ReusableSec06.module.scss';

export default function ReusableSec06(props) {
  return (
    <div className={cn(styles.group, 'reusable-sec06')}>
      <div className={styles.box2}>
        <div className={styles.flexCol}>
          <h5 className={styles.highlights7}>{props.highlights7}</h5>

          <div className={styles.flexCol1}>
            <h3 className={styles.subtitle}>{props.subtitle}</h3>
            <h5 className={styles.highlights71}>{props.highlights71}</h5>
          </div>
        </div>
      </div>

      <Image src={props.icon2} alt="alt text" className={styles.icon2} />
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
