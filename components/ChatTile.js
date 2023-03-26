import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Image from 'next/image';
import styles from './ChatTile.module.scss';

export default function ChatTile(props) {
  return (
    <div className={cn(styles.box3, 'chat-tile')}>
      <div className={styles.flexRow}>
        <div className={styles.group}>
          <Image src={props.icon5} alt="alt text" className={styles.icon5} />
          <Image src={props.background} alt="alt text" className={styles.background} />
        </div>

        <div className={styles.wrapper3}>
          <div className={styles.text1}>{props.text1}</div>
          <div className={styles.info2}>{props.info2}</div>
        </div>

        <div className={styles.flexRow__cell}>
          <div className={styles.info3}>{props.info3}</div>
        </div>
      </div>
    </div>
  );
}

ChatTile.propTypes = {
  icon5: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  info2: PropTypes.string.isRequired,
  info3: PropTypes.string.isRequired
};

ChatTile.inStorybook = true;
