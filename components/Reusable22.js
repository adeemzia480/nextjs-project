import { Input } from 'antd';
import 'antd/dist/antd.css';
import cn from 'classnames';
import Image from 'next/Image';
import React from 'react';

import styles from './Reusable22.module.scss';

export default function Reusable22(props) {
  return (
    <div className={cn(styles.root, 'reusable22')}>
      <div className={styles.group}>
        <Image src={require('assets/7eaf0f4887a0dbea07e7db82be91c70d.png')} alt="alt text" className={styles.image} />

        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <Image
              src={require('assets/bc6f08b7929345791376b22131f74627.png')}
              alt="alt text"
              className={styles.image1}
            />
          </div>
          <div className={styles.flexRow__spacer} />
          <div className={styles.flexRow__item1}>
            <div className={styles.flexRow1}>
              <div className={styles.flexRow1__item}>
                <button className={styles.btn} onClick={() => alert('It is clickable')}>
                  <span className={styles.btn__text}>Change Profile Picture</span>
                </button>
              </div>
              <div className={styles.flexRow1__item1}>
                <button className={styles.btn1} onClick={() => alert('It is clickable')}>
                  <span className={styles.btn__text1}>Change Banner Image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexCol}>
        <div className={styles.flexCol__item}>
          <div className={styles.grid}>
            <div className={styles.flexRow2}>
              <div className={styles.flexRow2__item}>
                <h5 className={styles.highlights}>Name</h5>
              </div>
              <div className={styles.flexRow2__spacer} />
              <div className={styles.flexRow2__item1}>
                <div className={styles.box2}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>

            <div className={styles.flexRow2}>
              <div className={styles.flexRow2__item2}>
                <h5 className={styles.highlights1}>Email</h5>
              </div>
              <div className={styles.flexRow2__spacer1} />
              <div className={styles.flexRow2__item3}>
                <div className={styles.box2}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexCol__item1}>
          <div className={styles.grid}>
            <div className={styles.flexRow2}>
              <div className={styles.flexRow2__item4}>
                <h5 className={styles.highlights}>Phone</h5>
              </div>
              <div className={styles.flexRow2__spacer2} />
              <div className={styles.flexRow2__item5}>
                <div className={styles.box2}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>

            <div className={styles.flexRow2}>
              <div className={styles.flexRow2__item6}>
                <h5 className={styles.highlights1}>Website</h5>
              </div>
              <div className={styles.flexRow2__spacer3} />
              <div className={styles.flexRow2__item7}>
                <div className={styles.box2}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexCol__item2}>
          <div className={styles.grid}>
            <div className={styles.flexRow2}>
              <div className={styles.flexRow2__item8}>
                <h5 className={styles.highlights1}>Password</h5>
              </div>
              <div className={styles.flexRow2__spacer4} />
              <div className={styles.flexRow2__item9}>
                <div className={styles.box2}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>

            <div className={styles.flexRow2}>
              <div className={styles.flexRow2__item10}>
                <h5 className={styles.highlights1}>Location</h5>
              </div>
              <div className={styles.flexRow2__spacer5} />
              <div className={styles.flexRow2__item11}>
                <div className={styles.box2}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexCol__item3}>
          <div className={styles.grid1}>
            <div className={styles.grid1__item}>
              <h5 className={styles.highlights2}>Bio</h5>
            </div>
            <div className={styles.grid1__spacer} />
            <div className={styles.grid1__item1}>
              <div className={styles.box3}>
                <Input.TextArea style={{ width: '100%', height: '100%' }} placeholder="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexCol__item4}>
          <div className={styles.flexRow3}>
            <div className={styles.flexRow3__item}>
              <button className={styles.btn1} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text2}>Cancel</span>
              </button>
            </div>
            <div className={styles.flexRow3__item1}>
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text3}>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable22.inStorybook = true;
