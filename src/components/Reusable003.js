import React from 'react';
import cn from 'classnames';

import styles from './Reusable003.module.scss';

export default function Reusable003(props) {
  return (
    <div className={cn(styles.root, 'reusable003')}>
      <div className={styles.list}>
        <div className={styles.flexRow}>
          <h1 className={styles.hero_title}>Find Influencers</h1>
          <div className={styles.flexRow__spacer} />
          <div className={styles.flexRow__item}>
            <div className={styles.box2}>
              <px-grid track-style="flex-grow: 1;" x="393fr 40px 7fr" y="7px minmax(0px, max-content) 7px">
                <div
                  className={styles.image1}
                  style={{ '--src': `url(${require('assets/fb596598be39b966beac6dcac49a7717.png')})` }}
                />
              </px-grid>
            </div>
          </div>
        </div>

        <div className={styles.list__item}>
          <div className={styles.list1}>
            <div className={styles.box1}>
              <div
                style={{ '--src': `url(${require('assets/6b21b2ce9492450fd6fcb5d2809d028e.png')})` }}
                className={styles.box11}
              />

              <div className={styles.group}>
                <div
                  style={{ '--src': `url(${require('assets/8a88b51e8d387b2063c4c28af1fd8924.png')})` }}
                  className={styles.background}
                />

                <div className={styles.flexCol}>
                  <h5 className={styles.highlights1}>Robert Smith</h5>

                  <div className={styles.flexRow1}>
                    <div className={styles.flexCol1}>
                      <div className={styles.text1}>100K+</div>
                      <div className={styles.text}>Followers</div>
                    </div>

                    <div className={styles.flexRow1__spacer} />

                    <div className={styles.flexCol1}>
                      <div className={styles.text1}>100K+</div>
                      <div className={styles.text}>Followers</div>
                    </div>

                    <div className={styles.flexRow1__spacer1} />

                    <div className={styles.flexCol2}>
                      <div className={styles.text1}>100K+</div>
                      <div className={styles.text}>Followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.box1}>
              <div
                style={{ '--src': `url(${require('assets/6b21b2ce9492450fd6fcb5d2809d028e.png')})` }}
                className={styles.box11}
              />

              <div className={styles.group}>
                <div
                  style={{ '--src': `url(${require('assets/8a88b51e8d387b2063c4c28af1fd8924.png')})` }}
                  className={styles.background}
                />

                <div className={styles.flexCol3}>
                  <h5 className={styles.highlights1}>Robert Smith</h5>

                  <div className={styles.flexRow1}>
                    <div className={styles.flexCol1}>
                      <div className={styles.text11}>100K+</div>
                      <div className={styles.text}>Followers</div>
                    </div>

                    <div className={styles.flexRow1__spacer2} />

                    <div className={styles.flexCol1}>
                      <div className={styles.text11}>100K+</div>
                      <div className={styles.text}>Followers</div>
                    </div>

                    <div className={styles.flexRow1__spacer3} />

                    <div className={styles.flexCol2}>
                      <div className={styles.text11}>100K+</div>
                      <div className={styles.text}>Followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable003.inStorybook = true;
