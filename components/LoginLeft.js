import cn from 'classnames';

import Image from 'next/image';
import styles from './LoginLeft.module.scss';

export default function LoginLeft(props) {
  return (
    <div className={cn(styles.box, 'login-left')}>
      <div className={styles.flexCol}>
        <div className={styles.flexCol__cell}>
          <Image src={require('assets/34e22daf3280b205b99795492a07853b.png')} alt="alt text" className={styles.unnamed} />
        </div>
        <h1 className={styles.title1}>
          Revolutionize Your
          <br /> Brand Deals with Creator Ads
        </h1>
      </div>

      <div className={styles.flexCol1}>
        <div className={styles.flexCol1__cell}>
          <Image src={require('assets/06f2cb761a1a2d96f6db7f692b735cf1.png')} alt="alt text" className={styles.image4} />
        </div>
        <div className={styles.flexCol1__cell1}>
          <Image src={require('assets/fb4c60a1d88d442c1b63aa870dec52fb.png')} alt="alt text" className={styles.image3} />
        </div>
        <div className={styles.flexCol1__cell2}>
          <Image src={require('assets/b9a74eb906d0b9d9020b1cb012b4524f.png')} alt="alt text" className={styles.image2} />
        </div>
        <div className={styles.flexCol1__cell3}>
          <Image src={require('assets/c9327462ab3944c8e5e142240f0d63f9.png')} alt="alt text" className={styles.image21} />
        </div>
        <div className={styles.flexCol1__cell4}>
          <Image src={require('assets/57670f003ec04a0463af4f5271c231ee.png')} alt="alt text" className={styles.image1} />
        </div>
        <div className={styles.flexCol1__cell5}>
          <Image src={require('assets/4c1c4f551aca41f5cd75afb745036de1.png')} alt="alt text" className={styles.image5} />
        </div>
      </div>
    </div>
  );
}

LoginLeft.inStorybook = true;
