import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './PrimaryBtn.module.scss';

export default function PrimaryBtn(props) {
  return (
    <button className={cn(styles.btn, 'primary-btn')} onClick={() => alert('It is clickable')}>
      <span className={styles.btn__text}>{props.btn__text}</span>
    </button>
  );
}

PrimaryBtn.propTypes = {
  btn__text: PropTypes.string.isRequired
};

PrimaryBtn.inStorybook = true;
