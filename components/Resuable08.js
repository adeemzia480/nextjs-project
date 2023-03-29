import cn from 'classnames';
import Resuable08a from 'components/Resuable08a';
import SearchBar from 'components/SearchBar';

import styles from './Resuable08.module.scss';

export default function Resuable08(props) {
  return (
    <div className={cn(styles.root, 'resuable08')}>
      <div className={styles.flexCol}>
        <div className={styles.flexCol__cell}>
          <div className={styles.flexRow}>
            <div className={styles.flexRow__cell}>
              <h1 className={styles.hero_title}>Find Influencers</h1>
            </div>
            <div className={styles.flexRow__cell1}>
              <div className={styles.box6}>
                <SearchBar unnamed={`Search Influencer`} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexCol__cell1}>
          <div className={styles.list}>
            <div className={styles.list__cell}>
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
            <div className={styles.list__cell1}>
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
            <div className={styles.list__cell}>
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
        </div>
      </div>
    </div>
  );
}

Resuable08.inStorybook = true;
