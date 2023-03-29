import cn from 'classnames';

import Image from 'next/image';
import styles from './Resuable001.module.scss';

export default function Resuable001(props) {
  return (
    <div className={cn(styles.root, 'resuable001')}>
      <div className={styles.root__cell}>
        <h1 className={styles.hero_title}>Link Account</h1>
      </div>
      <h4 className={styles.highlights2}>
        {
          "Rest assured that linking your account is completely safe, as we use the platform's own API system to establish the connection."
        }
      </h4>

      <div className={styles.box}>
        <div className={styles.flexRow}>
          <div className={styles.flexRow__cell}>
            <Image src={require('assets/b546bd85a4df00bd7e14066324e47a3f.png')} alt="alt text" className={styles.image} />
          </div>
          <div className={styles.flexRow__cell1}>
            <h5 className={styles.highlights}>Link your youtube Account</h5>
          </div>
        </div>
      </div>

      <div className={styles.box2}>
        <div className={styles.flexRow1}>
          <div className={styles.flexRow1__cell}>
            <Image src={require('assets/ba5173678f9c3c6f52dffeedca57723a.png')} alt="alt text" className={styles.icon} />
          </div>
          <div className={styles.flexRow1__cell1}>
            <h5 className={styles.highlights}>Link your Instagram Account</h5>
          </div>
        </div>
      </div>

      <div className={styles.box1}>
        <div className={styles.flexRow2}>
          <div className={styles.flexRow2__cell}>
            <Image
              src={require('assets/cd9b13173590ace62f7f174fe69f5025.png')}
              alt="alt text"
              className={styles.image1}
            />
          </div>
          <div className={styles.flexRow2__cell1}>
            <h5 className={styles.highlights1}>Link your Tiktok Account</h5>
          </div>
        </div>
      </div>

      <div className={styles.box3}>
        <div className={styles.flexRow3}>
          <div className={styles.flexRow3__cell}>
            <Image
              src={require('assets/d3f75c1566eff81f3ff231558f31641f.png')}
              alt="alt text"
              className={styles.image2}
            />
          </div>
          <div className={styles.flexRow3__cell1}>
            <h5 className={styles.highlights}>Link your Twitter Account</h5>
          </div>
        </div>
      </div>

      <div className={styles.box4}>
        <div className={styles.flexRow4}>
          <div className={styles.flexRow4__cell}>
            <Image src={require('assets/e50b807b41893ce3879526965b00baa1.png')} alt="alt text" className={styles.icon1} />
          </div>
          <div className={styles.flexRow4__cell1}>
            <h5 className={styles.highlights}>Link your Snapchat Account</h5>
          </div>
        </div>
      </div>

      <h4 className={styles.highlights11_box}>
        <span className={styles.highlights11}>
          <span className={styles.highlights11_span0}>Clicked on the wrong page? </span>
          <span className={styles.highlights11_span1}>Go back</span>
        </span>
      </h4>
    </div>
  );
}

Resuable001.inStorybook = true;
