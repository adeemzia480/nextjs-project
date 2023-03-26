import cn from 'classnames';
import Image from 'next/image';

import styles from './Header1.module.scss';

export default function Header1(props) {
  return (
    <div className={cn(styles.box5, 'header1')}>
      <div className={styles.box51}>
        <div className={styles.rect} />
        <div className={styles.box4}>
          <div className={styles.text}>Last Month</div>
          <Image src={require('assets/7112a569081b0bc8a54558657f7d8d1e.png')} alt="alt text" className={styles.image1} />
        </div>
        <h1 className={styles.title}>{'Logs & Summary'}</h1>
        <div className={styles.line} />
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
        <div className={styles.line4} />
        <div className={styles.text1}>Date</div>
        <h4 className={styles.highlights2}>10th Jan 2023</h4>
        <h4 className={styles.highlights21}>10th Jan 2023</h4>
        <h4 className={styles.highlights22}>10th Jan 2023</h4>
        <h4 className={styles.highlights23}>10th Jan 2023</h4>
        <h4 className={styles.highlights24}>10th Jan 2023</h4>
        <div className={styles.text11}>Deal With</div>
        <h4 className={styles.highlights25}>Mr. Beast</h4>
        <h4 className={styles.highlights26}>Mr. Beast</h4>
        <h4 className={styles.highlights27}>Mr. Beast</h4>
        <h4 className={styles.highlights28}>Mr. Beast</h4>
        <h4 className={styles.highlights29}>Mr. Beast</h4>
        <div className={styles.text12}>Views</div>
        <h4 className={styles.highlights210}>144,234</h4>
        <h4 className={styles.highlights211}>144,234</h4>
        <h4 className={styles.highlights212}>144,234</h4>
        <h4 className={styles.highlights213}>144,234</h4>
        <h4 className={styles.highlights214}>144,234</h4>
        <div className={styles.text13}>Ad Type</div>
        <h4 className={styles.highlights215}>30-Sec Ad</h4>
        <h4 className={styles.highlights216}>30-Sec Ad</h4>
        <h4 className={styles.highlights217}>30-Sec Ad</h4>
        <h4 className={styles.highlights218}>30-Sec Ad</h4>
        <h4 className={styles.highlights219}>30-Sec Ad</h4>
        <div className={styles.text14}>Amount</div>
        <h4 className={styles.highlights220}>$11,000</h4>
        <h4 className={styles.highlights221}>$11,000</h4>
        <h4 className={styles.highlights222}>$11,000</h4>
        <h4 className={styles.highlights223}>$11,000</h4>
        <h4 className={styles.highlights224}>$11,000</h4>
        <div className={styles.text15}>Payment Type</div>
        <h4 className={styles.highlights225}>Fixed Rate</h4>
        <h4 className={styles.highlights226}>Fixed Rate</h4>
        <h4 className={styles.highlights227}>Fixed Rate</h4>
        <h4 className={styles.highlights228}>Fixed Rate</h4>
        <h4 className={styles.highlights229}>Fixed Rate</h4>
      </div>
    </div>
  );
}

Header1.inStorybook = true;
