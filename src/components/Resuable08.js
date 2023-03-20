import React from 'react';
import cn from 'classnames';
import SearchBar from 'components/SearchBar';
import Resuable08a from 'components/Resuable08a';

import styles from './Resuable08.module.scss';

export default function Resuable08(props) {
  return (
    <div className={cn(styles.root, 'resuable08')}>
      <div className={styles.root__item}>
        {!props.header && (
          <div className={styles.flexRow}>
            <div className={styles.flexRow__item}>
              <h1 className={styles.hero_title}>Find Influencers</h1>
            </div>
            <div className={styles.flexRow__spacer} />
            <div className={styles.flexRow__item1}>
              <px-grid
                track-style="flex-grow: 1;"
                x="0px 863fr 0px"
                y="11px 54fr 4px"
                sm-x="0px 863fr 0px"
                sm-y="11px 54fr 4px"
                xs-x="0px minmax(0px,400px) 0px"
                xs-y="11px 54fr 4px"
                xxs-x="0px minmax(0px,380px) 0px"
                xxs-y="11px 54fr 4px">
                <div className={styles.box6}>
                  <SearchBar unnamed={`Search Influncers`} />
                </div>
              </px-grid>
            </div>
          </div>
        )}
      </div>

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

      <div className={styles.root__item}>
        <button className={styles.btn} onClick={() => alert('It is clickable')}>
          <span className={styles.btn__text}>See More</span>
        </button>
      </div>
      <hr size={1} className={styles.line} />
    </div>
  );
}

Resuable08.inStorybook = true;
