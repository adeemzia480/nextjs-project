import cn from 'classnames';
import Reusable11 from 'components/Reusable11';

import Image from 'next/image';
import styles from './ReusableSec01.module.scss';

export default function ReusableSec01(props) {
  return (
    <div className={cn(styles.root, 'reusable-sec01')}>
      <div className={styles.root__cell}>
        <div className={styles.flex_row}>
          <div className={styles.flex_row__cell}>
            <h1 className={styles.hero_title}>Find Brand Deals</h1>
          </div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.flex_row__cell1}>
            <div className={styles.box4}>
              <div className={styles.box4__cell}>
                <div className={styles.txt}>Search For brands</div>
              </div>
              <div className={styles.box4__spacer} />
              <div className={styles.box4__cell1}>
                <Image
                  src={require('assets/b3e496d8dd42f93792291e90ff09a2a3.png')}
                  alt="alt text"
                  className={styles.image2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.root__cell}>
        <div className={styles.flexRow}>
          <div className={styles.flexRow__cell}>
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
          </div>
          <div className={styles.flexRow__cell}>
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
          </div>
          <div className={styles.flexRow__cell}>
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
      </div>
    </div>
  );
}

ReusableSec01.inStorybook = true;
