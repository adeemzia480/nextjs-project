import React from 'react';
import cn from 'classnames';
import ReusableHelpCenter from 'components/ReusableHelpCenter';
import Reusable16b from 'components/Reusable16b';

import styles from './Reusable16.module.scss';

export default function Reusable16(props) {
  return (
    <div className={cn(styles.root, 'reusable16')}>
      <div className={styles.flexRow}>
        <div className={styles.flexRow__item}>
          <div className={styles.flexCol}>
            <div className={styles.flexCol__item}>
              <div className={styles.flex_row}>
                <div className={styles.flex_row__item}>
                  <img
                    src={require('assets/7ac971d5a80ed0202faf3c0ff9d74bdf.png')}
                    alt="alt text"
                    className={styles.icon}
                  />
                </div>
                <div className={styles.flex_row__spacer} />
                <h3 className={styles.subtitle_box}>
                  <input className={styles.subtitle} type={'text'} placeholder={`Find anything`} />
                </h3>
              </div>
            </div>
            <div className={styles.flexCol__item1}>
              <div className={styles.flexCol1}>
                <h5 className={styles.highlights2}>GETTING STARTER</h5>
                <h3 className={styles.subtitle1}>
                  What is Creators ads Understanding the platform  Understanding Collections How to build a
                  collection Apps and extensions
                </h3>
              </div>
            </div>
            <div className={styles.flexCol__item1}>
              <div className={styles.flexCol2}>
                <h5 className={styles.highlights2}>REFERENCE</h5>
                <h3 className={styles.subtitle1}>
                  What is Creators ads Understanding the platform  Understanding Collections How to build a
                  collection Apps and extensions
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexRow__spacer} />
        <div className={styles.flexRow__item1}>
          <div className={styles.flexCol3}>
            <div className={styles.flexCol3__item}>
              <div className={styles.image1}>
                <ReusableHelpCenter />
              </div>
            </div>
            <div className={styles.flexCol3__item1}>
              <div className={styles.grid}>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Quick Search`}
                      paragraph1={`Searching in Attio is simple, Intuitive, and fast`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Views`}
                      paragraph1={`Views allow you to see the same collection data in different ways`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Record`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Table Views`}
                      paragraph1={`Manage your entries and attributes ina spreadsheet style.`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Kanban Views`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Notes`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`All records`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Collections`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Attributes`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Tasks`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Dashboard views`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
                  </div>
                </div>
                <div className={styles.grid__item}>
                  <div className={styles.component}>
                    <Reusable16b
                      highlights1={`Activity & notofications`}
                      paragraph1={`A record is a person or a company in your network`}
                    />
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

Reusable16.inStorybook = true;
