import cn from 'classnames';

import styles from './Reusable24.module.scss';

export default function Reusable24(props) {
  return (
    <div className={cn(styles.wrapper10, 'reusable24')}>
      <div className={styles.wrapper10__cell}>
        <button className={styles.btn} onClick={() => alert('It is clickable')}>
          <span className={styles.btn__text}>Download as PDF</span>
        </button>
      </div>

      <div className={styles.box12}>
        <div className={styles.box12__cell}>
          <h3 className={styles.subtitle}>Deal Details</h3>
        </div>

        <div className={styles.wrapper11}>
          <h5 className={styles.highlights2}>Brand Name:</h5>
          <div className={styles.wrapper11__spacer} />
          <h5 className={styles.highlights}>Nike</h5>
        </div>

        <div className={styles.wrapper111}>
          <h5 className={styles.highlights21}>Creator Name:</h5>
          <div className={styles.wrapper111__spacer} />
          <h5 className={styles.highlights1}>Mr. Beast</h5>
        </div>

        <div className={styles.wrapper111}>
          <h5 className={styles.highlights22}>Start Date:</h5>
          <div className={styles.wrapper111__spacer1} />
          <h5 className={styles.highlights3}>12th Jan 2023</h5>
        </div>

        <div className={styles.wrapper112}>
          <h5 className={styles.highlights23}>Reference Id:</h5>
          <div className={styles.wrapper112__spacer} />
          <h5 className={styles.highlights4}>#F1820CFE272C4</h5>
        </div>

        <div className={styles.wrapper12}>
          <h5 className={styles.highlights24}>Status:</h5>
          <div className={styles.wrapper12__spacer} />

          <button className={styles.btn1} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text1}>Active</span>
          </button>
        </div>
      </div>

      <div className={styles.box14}>
        <div className={styles.flexRow}>
          <div className={styles.flexRow__cell}>
            <h3 className={styles.subtitle1}>Need Assistance?</h3>
          </div>
          <div className={styles.flexRow__cell1}>
            <button className={styles.btn2} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text2}>Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.wrapper10__cell}>
        <button className={styles.btn3} onClick={() => alert('It is clickable')}>
          <span className={styles.btn__text21}>Mark as Complete</span>
        </button>
      </div>
    </div>
  );
}

Reusable24.inStorybook = true;
