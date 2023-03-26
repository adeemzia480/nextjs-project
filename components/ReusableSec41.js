import cn from 'classnames';
import Reusable19a from 'components/Reusable19a';
import React from 'react';

import img01 from 'assets/b3e496d8dd42f93792291e90ff09a2a3.png';
import styles from './ReusableSec41.module.scss';
export default function ReusableSec41(props) {
  return (
    <div className={cn(styles.root, 'reusable-sec41')}>
      <div className={styles.root__item}>
        <div className={styles.flex_row}>
          <div className={styles.flex_row__item}>
            <h1 className={styles.hero_title}>Find Brand Deals</h1>
          </div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.flex_row__item1}>
            <div className={styles.box4}>
              <div className={styles.box4__item}>
                <div className={styles.input_box}>
                  <input className={styles.input} type={'text'} placeholder={`Search For brands`} />
                </div>
              </div>
              <div className={styles.box4__spacer} />
              <div className={styles.box4__item1}>
                <div
                  style={{ '--src': `url(${img01.src})` }}
                  className={styles.image2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.root__item}>
        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <div className={styles.box}>
              <Reusable19a
                highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
                highlights2={`Fixed Rate:  $3000`}
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
          <div className={styles.flexRow__item}>
            <div className={styles.box2}>
              <Reusable19a
                highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
                highlights2={`Fixed Rate:  $3000`}
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
          <div className={styles.flexRow__item}>
            <div className={styles.box3}>
              <Reusable19a
                highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
                highlights2={`Fixed Rate:  $3000`}
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
    </div>
  );
}

ReusableSec41.inStorybook = true;
