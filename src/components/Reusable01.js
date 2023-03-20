import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PrimaryBtn from 'components/PrimaryBtn';

import styles from './Reusable01.module.scss';

export default function Reusable01(props) {
  return (
    <section className={cn(styles.section1, 'reusable01')}>
      <div className={styles.flexCol}>
        <h1 className={styles.hero_title}>{props.hero_title}</h1>
        <h4 className={styles.highlights}>{props.highlights}</h4>

        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <px-grid track-style="flex-grow: 1;" x="0fr minmax(145px,145fr) 0px" y="0px 47fr 0px">
              <div className={styles.btn} onClick={() => alert('It is clickable')}>
                <PrimaryBtn btn__text={`Get Started`} />
              </div>
            </px-grid>
          </div>
          <div className={styles.flexRow__item}>
            <img src={require('assets/3a2a785e186398212f423644e9f9c23c.png')} alt="alt text" className={styles.icon} />
          </div>
        </div>
      </div>

      <img src={require('assets/b5f559d2886a92608ef732ab2142881b.png')} alt="alt text" className={styles.decorator} />
    </section>
  );
}

Reusable01.propTypes = {
  hero_title: PropTypes.string.isRequired,
  highlights: PropTypes.string.isRequired
};

Reusable01.inStorybook = true;
