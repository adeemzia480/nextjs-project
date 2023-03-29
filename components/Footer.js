import cn from 'classnames';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer(props) {
  return (
    <div className={cn(styles.root, 'footer')}>
      <div className={styles.flexRow}>
        <div className={styles.flexCol}>
          <div className={styles.flexRow1}>
            <div className={styles.flexRow1__cell}>
              <Image
                src={require('assets/89c6dadcee5bb923aab1fa2bd1010566.png')}
                alt="alt text"
                className={styles.image1}
              />
            </div>
            <h3 className={styles.subtitle}>Creator Marketplace</h3>
          </div>

          <h5 className={styles.highlights1}>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
            dolore{' '}
          </h5>
        </div>

        <div className={styles.flexCol1}>
          <h2 className={styles.medium_title}>Resources</h2>
          <h5 className={styles.highlights}>
            Support
            <br />
            Help centre
            <br />
            <br />
          </h5>
        </div>

        <div className={styles.flexCol2}>
          <h2 className={styles.medium_title1}>Company</h2>
          <h5 className={styles.highlights2}>
            About us
            <br />
            Contact
            <br />
            Affiliate Program
            <br />
          </h5>
        </div>

        <div className={styles.list}>
          <h2 className={styles.medium_title2}>Newsletter Subscription</h2>

          <div className={styles.content_box}>
            <div className={styles.content_box__cell}>
              <div className={styles.input_box}>
                <input className={styles.input} type={'text'} placeholder={`Enter Email Id`} />
              </div>
            </div>
            <div className={styles.content_box__cell1}>
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.flexCol3}>
        <hr size={1} className={styles.line} />
        <div className={styles.flexCol3__cell}>
          <h5 className={styles.highlights21}>© 2023 Creator Marketplace. All Rights Reserved</h5>
        </div>
      </div>
    </div>
  );
}

Footer.inStorybook = true;
