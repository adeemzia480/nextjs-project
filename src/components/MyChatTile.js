import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './MyChatTile.module.scss';

export default function MyChatTile(props) {
  return (
    <div className={cn(styles.box2, 'my-chat-tile')}>
      <div className={styles.flexRow}>
        <div
          style={{ '--src': `url(${require('assets/35948ef0d447c480fa9844290546c07b.png')})` }}
          className={styles.group}>
          <img
            src={require('assets/32adb4c9e0b91e193487d27044171736.svg').default}
            alt="alt text"
            className={styles.icon2}
          />
        </div>

        <div className={styles.wrapper1}>
          <div className={styles.text}>{props.text}</div>
          <div className={styles.info1}>{props.info1}</div>
        </div>

        <div className={styles.info11}>{props.info11}</div>
      </div>
    </div>
  );
}

MyChatTile.propTypes = {
  text: PropTypes.string.isRequired,
  info1: PropTypes.string.isRequired,
  info11: PropTypes.string.isRequired
};

MyChatTile.inStorybook = true;
