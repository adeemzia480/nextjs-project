import cn from 'classnames';
import Reusable19a from 'components/Reusable19a';
import React from 'react';

import styles from './Reusable19.module.scss';

export default function Reusable19(props) {
  return (
    <div className={cn(styles.root, 'reusable19')}>
      <div className={styles.flexRow}>
        <div className={styles.flexRow__item}>
          <h1 className={styles.title}>Past Brand Deals</h1>
        </div>
        <div className={styles.flexRow__spacer} />
        <div className={styles.flexRow__item1}>
          <div className={styles.box}>
            <h5 className={styles.highlights}>See More</h5>
          </div>
        </div>
      </div>

      <div className={styles.wrapper1}>
        <div className={styles.wrapper1__item}>
          <div className={styles.box1}>
            <Reusable19a
              highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
              highlights2={`Lorem Ipsum dolor sit`}
              highlights3={`View and Apply`}
              image={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
              medium_title={`Pearson Brand Video`}
              subtitle={`Roles hiring for:`}
              text={`Online commercial / Video Ad`}
              text1={`NONUNION`}
              text2={`$ | 5000`}
            />
          </div>
        </div>
        <div className={styles.wrapper1__item}>
          <div className={styles.box1}>
            <Reusable19a
              highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
              highlights2={`Lorem Ipsum dolor sit`}
              highlights3={`View and Apply`}
              image={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
              medium_title={`Pearson Brand Video`}
              subtitle={`Roles hiring for:`}
              text={`Online commercial / Video Ad`}
              text1={`NONUNION`}
              text2={`$ | 5000`}
            />
          </div>
        </div>
        <div className={styles.wrapper1__item}>
          <div className={styles.box1}>
            <Reusable19a
              highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
              highlights2={`Lorem Ipsum dolor sit`}
              highlights3={`View and Apply`}
              image={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
              medium_title={`Pearson Brand Video`}
              subtitle={`Roles hiring for:`}
              text={`Online commercial / Video Ad`}
              text1={`NONUNION`}
              text2={`$ | 5000`}
            />
          </div>
        </div>
        <div className={styles.wrapper1__item}>
          <div className={styles.box1}>
            <Reusable19a
              highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
              highlights2={`Lorem Ipsum dolor sit`}
              highlights3={`View and Apply`}
              image={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
              medium_title={`Pearson Brand Video`}
              subtitle={`Roles hiring for:`}
              text={`Online commercial / Video Ad`}
              text1={`NONUNION`}
              text2={`$ | 5000`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable19.inStorybook = true;
