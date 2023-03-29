import { Input } from 'antd';
import cn from 'classnames';
import LoginLeft from 'components/LoginLeft';
import Image from 'next/image';

import styles from './AccountCreatePage.module.scss';

export default function AccountCreatePage(props) {
  return (
    <div className={cn(styles.root, 'account-create-page')}>
      <div className={styles.root__cell}>
        <div className={styles.box}>
          <LoginLeft />
        </div>
      </div>
      <div className={styles.root__cell1}>
        <div className={styles.flexCol}>
          <div className={styles.flexCol__cell}>
            <h1 className={styles.hero_title}>Create Account</h1>
          </div>
          <h4 className={styles.highlights1}>
            {
              "To access all of our exclusive features and benefits, please create an account. It's quick, easy, and free. We can't wait to have you join our community!"
            }
          </h4>

          <div className={styles.box3}>
            <div className={styles.box3__cell}>
              <div className={styles.box4}>
                <div className={styles.box4__cell}>
                  <Image
                    src={require('assets/4fb6ecdc9e825c6454fd3e23e8705e1e.png')}
                    alt="alt text"
                    className={styles.icon1}
                  />
                </div>
                <div className={styles.box4__spacer} />
                <div className={styles.box4__cell1}>
                  <h5 className={styles.highlights4}>Agency</h5>
                </div>
              </div>
            </div>
            <div className={styles.box3__spacer} />
            <div className={styles.box3__cell1}>
              <h5 className={styles.highlights5}>Brand</h5>
            </div>
          </div>

          <div className={styles.flexCol1}>
            <h5 className={styles.highlights2}>Email address</h5>
            <div className={styles.box1}>
              <Input style={{ width: '100%', height: '100%' }} placeholder="Enter email id" />
            </div>
          </div>

          <div className={styles.flexCol2}>
            <h5 className={styles.highlights21}>Company Name</h5>
            <div className={styles.box1}>
              <Input style={{ width: '100%', height: '100%' }} placeholder="Enter company name" />
            </div>
          </div>

          <div className={styles.flexCol2}>
            <h5 className={styles.highlights22}>Website</h5>
            <div className={styles.box1}>
              <Input style={{ width: '100%', height: '100%' }} placeholder="Enter email id" />
            </div>
          </div>

          <div className={styles.flexCol2}>
            <h5 className={styles.highlights23}>Full Name</h5>
            <div className={styles.box1}>
              <Input style={{ width: '100%', height: '100%' }} placeholder="Enter full name" />
            </div>
          </div>

          <div className={styles.flexCol2}>
            <h5 className={styles.highlights24}>Password</h5>
            <div className={styles.box1}>
              <Input.Password style={{ width: '100%', height: '100%' }} placeholder="Enter password" />
            </div>
          </div>

          <button className={styles.btn} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text}>Continue</span>
          </button>

          <h4 className={styles.highlights_box}>
            <span className={styles.highlights}>
              <span className={styles.highlights_span0}>Clicked on the wrong page? </span>
              <span className={styles.highlights_span1}>Go back</span>
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

AccountCreatePage.inStorybook = true;
