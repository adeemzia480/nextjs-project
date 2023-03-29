import cn from 'classnames';

import Image from 'next/image';
import styles from './Reusable03.module.scss';

export default function Reusable03(props) {
  return (
    <section className={cn(styles.section4, 'reusable03')}>
      <div className={styles.section4__cell}>
        <h1 className={styles.hero_title2}>Find Brand Deals</h1>
      </div>

      <div className={styles.grid}>
        <div className={styles.grid__cell}>
          <Image src={require('assets/633a9053a5e7d1ade00c4cce39ecfa5a.png')} alt="alt text" className={styles.image12} />
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/f2b8c03b082078516d53d67be5cfff4a.png')}
            alt="alt text"
            className={styles.image121}
          />
        </div>
        <div className={styles.grid__cell}>
          <div className={styles.box15}>
            <div className={styles.box15__cell}>
              <Image
                src={require('assets/507cd6f4f8e88eebfbe5c332a452ae0b.png')}
                alt="alt text"
                className={styles.image13}
              />
            </div>
          </div>
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/51bc04501df9cc447d0bb73b8f62b75d.png')}
            alt="alt text"
            className={styles.image122}
          />
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/ed6447138f0a68a789a867dfcc562371.png')}
            alt="alt text"
            className={styles.image123}
          />
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/db5aa03a4b47c7230d79a9d624dda6d4.png')}
            alt="alt text"
            className={styles.image124}
          />
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/a181a61e59476b8048663c03f13f1559.png')}
            alt="alt text"
            className={styles.image125}
          />
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/912bd32c9297f5379cf8ca6da8e77083.png')}
            alt="alt text"
            className={styles.image126}
          />
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/0d9ea3a7d3e6590a8a3fd99cd1b73d47.png')}
            alt="alt text"
            className={styles.image127}
          />
        </div>
        <div className={styles.grid__cell}>
          <Image
            src={require('assets/1ee246798ba5ce19d4f70bec9872b4b7.png')}
            alt="alt text"
            className={styles.image128}
          />
        </div>
      </div>
    </section>
  );
}

Reusable03.inStorybook = true;
