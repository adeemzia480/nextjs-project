import cn from 'classnames';
import Image from 'next/image';

import styles from './Reusable13.module.scss';

export default function Reusable13(props) {
  return (
    <div className={cn(styles.root, 'reusable13')}>
      <div className={styles.group}>
        <Image src={require('assets/5c279eee925ef6c98ca999b0bb15cdc1.png')} alt="alt text" className={styles.image} />

        <div className={styles.flexRow} data-aos="fade-left">
          <div className={styles.flexRow__item}>
            <Image
              src={require('assets/e76f3da9f75466896f03f61288858b2f.png')}
              alt="alt text"
              className={styles.image1}
            />
          </div>
          <div className={styles.flexRow__spacer} />
          <div className={styles.flexRow__item1}>
            <div className={styles.flexRow1}>
              <div className={styles.flexRow1__item}>
                <h2 className={styles.medium_title}>NIKE</h2>
              </div>
              <div className={styles.flexRow1__item1}>
                <h3 className={styles.subtitle}>Los Angeles, United States</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr size={1} className={styles.line} />
    </div>
  );
}

Reusable13.inStorybook = true;
