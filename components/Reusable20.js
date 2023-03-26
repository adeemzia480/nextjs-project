import cn from 'classnames';
import Image from 'next/Image';
import React from 'react';

import styles from './Reusable20.module.scss';

export default function Reusable20(props) {
  return (
    <div className={cn(styles.root, 'reusable20')}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper1}>
          <div className={styles.wrapper1__item}>
            <div className={styles.wrapper2}>
              <h5 className={styles.highlights}>Name</h5>
              <div className={styles.wrapper2__spacer} />

              <div className={styles.box}>
                <div className={styles.text}>Lorem Ipsum</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper1__spacer} />
          <div className={styles.wrapper1__item1}>
            <div className={styles.wrapper3}>
              <h5 className={styles.highlights1}>Email</h5>
              <div className={styles.wrapper3__spacer} />

              <div className={styles.box1}>
                <div className={styles.text1}>Lorem Ipsum</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper4}>
          <div className={styles.wrapper4__item}>
            <div className={styles.wrapper3}>
              <h5 className={styles.highlights2}>Phone</h5>
              <div className={styles.wrapper3__spacer1} />

              <div className={styles.box1}>
                <div className={styles.text1}>Lorem Ipsum</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper4__spacer} />
          <div className={styles.wrapper4__item1}>
            <div className={styles.wrapper3}>
              <h5 className={styles.highlights3}>Website</h5>
              <div className={styles.wrapper3__spacer2} />

              <div className={styles.box1}>
                <div className={styles.text1}>Lorem Ipsum</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper4}>
          <div className={styles.wrapper4__item2}>
            <div className={styles.wrapper3}>
              <h5 className={styles.highlights4}>Password</h5>
              <div className={styles.wrapper3__spacer3} />

              <div className={styles.box1}>
                <div className={styles.text1}>Lorem Ipsum</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper4__spacer1} />
          <div className={styles.wrapper4__item3}>
            <div className={styles.wrapper3}>
              <h5 className={styles.highlights5}>Location</h5>
              <div className={styles.wrapper3__spacer4} />

              <div className={styles.box1}>
                <div className={styles.text1}>Lorem Ipsum</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper5}>
          <h5 className={styles.highlights6}>Bio</h5>
          <div className={styles.wrapper5__spacer} />

          <div className={styles.box2}>
            <div className={styles.text11}>Lorem Ipsum</div>
          </div>
        </div>

        <div className={styles.wrapper__item}>
          <Image src={require('assets/da4684681f48fa525ed890e3c3f2b764.png')} alt="alt text" className={styles.icon} />
        </div>

        <div className={styles.wrapper6}>
          <div className={styles.box3}>
            <div className={styles.box3__item}>
              <h5 className={styles.highlights11}>Cancel</h5>
            </div>
          </div>

          <div className={styles.wrapper6__spacer} />

          <div className={styles.box4}>
            <div className={styles.box4__item}>
              <h5 className={styles.highlights21}>Save Changes</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable20.inStorybook = true;
