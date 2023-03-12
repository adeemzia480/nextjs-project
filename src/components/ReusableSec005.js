import cn from 'classnames';

import styles from './ReusableSec005.module.scss';

export default function ReusableSec005(props) {
  return (
    <div className={cn(styles.root, 'reusable-sec005')}>
      <h1 className={styles.title}>Top Geographics</h1>
      <div className={styles.rect} />
      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />
      <div className={styles.rect5} />
      <div className={styles.rect11} />
      <div className={styles.rect21} />
      <div className={styles.rect31} />
      <div className={styles.rect41} />
      <div className={styles.rect51} />
      <div className={styles.rect6} />
      <div className={styles.info}>41.7%</div>
      <div className={styles.info1}>41.7%</div>
      <div className={styles.info2}>41.7%</div>
      <div className={styles.info3}>41.7%</div>
      <div className={styles.info4}>41.7%</div>
      <div className={styles.info5}>41.7%</div>
      <h3 className={styles.subtitle}>United States</h3>
      <h3 className={styles.subtitle1}>United States</h3>
      <h3 className={styles.subtitle2}>United States</h3>
      <h3 className={styles.subtitle3}>United States</h3>
      <h3 className={styles.subtitle4}>United States</h3>
      <h3 className={styles.subtitle5}>United States</h3>
      <div className={styles.box}>
        <h5 className={styles.highlights}>View More</h5>
      </div>
    </div>
  );
}

ReusableSec005.inStorybook = true;
