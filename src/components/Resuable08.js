import React from 'react';
import cn from 'classnames';
import Resuable08a from 'components/Resuable08a';

import styles from './Resuable08.module.scss';

export default function Resuable08(props) {
  return (
    <div className={cn(styles.root, 'resuable08')}>
      <div className={styles.flexRow}>
        <h1 className={styles.hero_title}>Find Influencers</h1>
        <div className={styles.flexRow__spacer} />
        <div className={styles.flexRow__item}>
          <div className={styles.box6}>
            <px-grid track-style="flex-grow: 1;" x="814fr 44px 5fr" y="5px minmax(0px, max-content) 5px">
              <div
                className={styles.image2}
                style={{ '--src': `url(${require('assets/b3e496d8dd42f93792291e90ff09a2a3.png')})` }}
              />
            </px-grid>
          </div>
        </div>
      </div>

      <px-grid x="0fr minmax(0px,1285px) 0fr" y="38px 683fr 0px">
        <div className={styles.flex_row}>
          <div className={styles.flex_row__item}>
            <div className={styles.box5}>
              <Resuable08a
                highlights1={`111.1 M`}
                highlights11={`Views Geography`}
                highlights12={`Lorem Ipsum`}
                highlights13={`922.5 K`}
                highlights14={`122.5 K`}
                highlights2={`30 - Seconds`}
                highlights21={`$2000`}
                icon1={require('assets/59d56c63bc9cb4ffd016226482cae6ad.png')}
                image1={require('assets/26f1ccbe05b29b28f161bfb745d101ca.png')}
                medium_title={`Pewdiepie`}
                text={`Subscribers`}
                text1={`Monthly Views`}
                text2={`Average Views`}
              />
            </div>
          </div>
          <div className={styles.flex_row__item}>
            <div className={styles.box1}>
              <Resuable08a
                highlights1={`122.5 K`}
                highlights11={`Views Geography`}
                highlights12={`Lorem Ipsum`}
                highlights13={`922.5 K`}
                highlights14={`122.5 K`}
                highlights2={`60 - Seconds`}
                highlights21={`$2000`}
                icon1={require('assets/59d56c63bc9cb4ffd016226482cae6ad.png')}
                image1={require('assets/26f1ccbe05b29b28f161bfb745d101ca.png')}
                medium_title={`Ludwig`}
                text={`Subscribers`}
                text1={`Advertisement Type`}
                text2={`UK- 8%`}
              />
            </div>
          </div>
          <div className={styles.flex_row__item}>
            <div className={styles.box1}>
              <Resuable08a
                highlights1={`122.5 K`}
                highlights11={`Views Geography`}
                highlights12={`Lorem Ipsum`}
                highlights13={`922.5 K`}
                highlights14={`122.5 K`}
                highlights2={`30 - Seconds`}
                highlights21={`$2000`}
                icon1={require('assets/59d56c63bc9cb4ffd016226482cae6ad.png')}
                image1={require('assets/26f1ccbe05b29b28f161bfb745d101ca.png')}
                medium_title={`Ludwig`}
                text={`Subscribers`}
                text1={`Advertisement Type`}
                text2={`UK- 8%`}
              />
            </div>
          </div>
        </div>
      </px-grid>

      <div className={styles.box}>
        <h5 className={styles.highlights}>See More</h5>
      </div>

      <hr size={1} className={styles.line} />
    </div>
  );
}

Resuable08.inStorybook = true;
