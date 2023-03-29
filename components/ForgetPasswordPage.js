import { Input } from 'antd';
import cn from 'classnames';
import LoginLeft from 'components/LoginLeft';

import styles from './ForgetPasswordPage.module.scss';

export default function ForgetPasswordPage(props) {
  return (
    <div className={cn(styles.root, 'forget-password-page')}>
      <div className={styles.root__cell}>
        <div className={styles.box}>
          <LoginLeft />
        </div>
      </div>
      <div className={styles.root__cell1}>
        <div className={styles.flexCol}>
          <div className={styles.flexCol__cell}>
            <h1 className={styles.hero_title}>Forgot Password</h1>
          </div>
          <h4 className={styles.highlights2}>
            Forgot your password? Enter your email and we will send a resend link. Contact our support team for further
            assistance.
          </h4>

          <div className={styles.flexCol1}>
            <h5 className={styles.highlights3}>Your Email</h5>
            <div className={styles.box2}>
              <Input.Password style={{ width: '100%', height: '100%' }} placeholder="" />
            </div>
          </div>

          <h4 className={styles.highlights1}>Forgot Password?</h4>

          <button className={styles.btn} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text}>Reset</span>
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

ForgetPasswordPage.inStorybook = true;
