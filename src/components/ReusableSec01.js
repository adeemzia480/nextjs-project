import React from 'react';
import cn from 'classnames';
import Reusable11 from 'components/Reusable11';

import styles from './ReusableSec01.module.scss';

export default function ReusableSec01(props) {
  return (
    <div className={cn(styles.root, 'reusable-sec01')}>
      <div className={styles.flex_row}>
        <h1 className={styles.hero_title}>Find Brand Deals</h1>
        <div className={styles.flex_row__spacer} />
        <div className={styles.flex_row__item}>
          <div className={styles.box4}>
            <px-grid track-style="flex-grow: 1;" x="814fr 44px 5fr" y="5px minmax(0px, max-content) 5px">
              <div
                className={styles.image2}
                style={{ '--src': `url(${require('assets/b3e496d8dd42f93792291e90ff09a2a3.png')})` }}
              />
            </px-grid>
          </div>
        </div>
      </div>

      <div className={styles.flexRow}>
        <div className={styles.box}>
          <Reusable11
            ad__type={`Ad Type: 30 sec Ad`}
            btn__text={`View and Apply`}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mo nostrud amet dolor do amet sint...more`}
            highlights2={`Fixed Rate:  $3000`}
            highlights21={`Average views:  100k - 200k`}
            highlights22={`CPM:   $3`}
            highlights23={`Top Country%:  India`}
            image1={require('assets/aa339a097d37aa4113f68132cb9be76f.png')}
            looking__for={`Looking for:`}
          />
        </div>
        <div className={styles.box2}>
          <Reusable11
            ad__type={`Ad Type: 30 sec Ad`}
            btn__text={`View and Apply`}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mo nostrud amet dolor do amet sint...more`}
            highlights2={`Fixed Rate:  $3000`}
            highlights21={`Average views:  100k - 200k`}
            highlights22={`CPM:   $3`}
            highlights23={`Top Country%:  India`}
            image1={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
            looking__for={`Looking for:`}
          />
        </div>
        <div className={styles.box3}>
          <Reusable11
            ad__type={`Ad Type: 30 sec Ad`}
            btn__text={`View and Apply`}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mo nostrud amet dolor do amet sint...more`}
            highlights2={`Fixed Rate:  $3000`}
            highlights21={`Average views:  100k - 200k`}
            highlights22={`CPM:   $3`}
            highlights23={`Top Country%:  India`}
            image1={require('assets/32f018db25a52f6558bcc5c3c78e19b6.png')}
            looking__for={`Looking for:`}
          />
        </div>
      </div>
    </div>
  );
}

ReusableSec01.inStorybook = true;
