import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './SearchBar.module.scss';

export default function SearchBar(props) {
  return (
    <div className={cn(styles.box4, 'search-bar')}>
      <div className={styles.box4__item}>
        <div className={styles.search_input_box}>
          <input className={styles.search_input} type={'text'} placeholder={props.unnamed} />
        </div>
      </div>
      <div className={styles.box4__spacer} />
      <div className={styles.box4__item1}>
        <div
          style={{ '--src': `url(${require('assets/b3e496d8dd42f93792291e90ff09a2a3.png')})` }}
          className={styles.icon}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  unnamed: PropTypes.string.isRequired
};

SearchBar.inStorybook = true;
