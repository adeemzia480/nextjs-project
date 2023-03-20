import React from 'react';
import cn from 'classnames';
import Reusable28 from 'components/Reusable28';
import PrimaryBtn from 'components/PrimaryBtn';

import styles from './Reusable27.module.scss';

export default function Reusable27(props) {
  return (
    <div className={cn(styles.root, 'reusable27')}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>My Collaborations</h1>

        <div className={styles.wrapper1}>
          <div className={styles.wrapper2}>
            <div className={styles.wrapper2__item}>
              <div className={styles.box}>
                <Reusable28
                  highlights={`30 sec Ad`}
                  highlights1={`Amet minim mollit non deserunt ullamco et sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitatin veniam consequat sunt nostrud amet dolor do amet sint`}
                  highlights2={`122.5 K`}
                  highlights21={`1.5%`}
                  highlights22={`0.76%`}
                  image={require('assets/ffebc6e57fb010103a6d8906e372d48d.png')}
                  medium_title={`Deal Type:`}
                  paragraph={`Click-through\nRate`}
                  paragraph1={`Conversion\nRate`}
                  text={`Impressions`}
                />
              </div>
            </div>
            <div className={styles.wrapper2__item}>
              <div className={styles.box1}>
                <Reusable28
                  highlights={`30 sec Ad`}
                  highlights1={`Amet minim mollit non deserunt ullamco et sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitatin veniam consequat sunt nostrud amet dolor do amet sint`}
                  highlights2={`122.5 K`}
                  highlights21={`1.5%`}
                  highlights22={`0.76%`}
                  image={require('assets/413b1a6fe040ef84a5f82019de42c52a.svg').default}
                  medium_title={`Deal Type:`}
                  paragraph={`Click-through\nRate`}
                  paragraph1={`Conversion\nRate`}
                  text={`Impressions`}
                />
              </div>
            </div>
            <div className={styles.wrapper2__item}>
              <div className={styles.box2}>
                <Reusable28
                  highlights={`30 sec Ad`}
                  highlights1={`Amet minim mollit non deserunt ullamco et sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitatin veniam consequat sunt nostrud amet dolor do amet sint`}
                  highlights2={`122.5 K`}
                  highlights21={`1.5%`}
                  highlights22={`0.76%`}
                  image={require('assets/64fa9c3bc443a785dbb28dc4058032ae.svg').default}
                  medium_title={`Deal Type:`}
                  paragraph={`Click-through\nRate`}
                  paragraph1={`Conversion\nRate`}
                  text={`Impressions`}
                />
              </div>
            </div>
          </div>

          <div className={styles.box3}>
            <PrimaryBtn btn__text={`See More`} />
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable27.inStorybook = true;
