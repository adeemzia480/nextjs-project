import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Reusable16b.module.scss';

export default function Reusable16b(props) {
  return (
    <div className={cn(styles.group, 'reusable16b')} data-aos="slide-left">
      {props.backgroundShow && (
        <div
          style={{ '--src': `url(${require('assets/70f266d205beec6eeebeb903510dee7c.png')})` }}
          className={styles.background}
        />
      )}

      <div className={styles.flexCol}>
        <h4 className={styles.highlights1}>{props.highlights1}</h4>
        <p className={styles.paragraph1}>{props.paragraph1}</p>
      </div>
    </div>
  );
}

Reusable16b.propTypes = {
  backgroundShow: PropTypes.bool,
  highlights1: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired
};

Reusable16b.inStorybook = true;
