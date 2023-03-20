import cn from 'classnames';

import styles from './Header0.module.scss';

export default function Header0(props) {
  return (
    <div className={cn(styles.group1, 'header0')}>
      <div className={styles.box}>
        <h3 className={styles.subtitle}>Account Balance</h3>
        <h1 className={styles.big_title}>$234,567.89</h1>
        <h3 className={styles.subtitle1}>Monthly Earning</h3>
        <h1 className={styles.big_title1}>$1,234,567.89</h1>
        <h3 className={styles.subtitle2}>Yearly Earning</h3>
        <h1 className={styles.big_title2}>$1,234,567.89</h1>
        <img src={require('assets/23586f801fec4445e67c769affd4e840.png')} alt="alt text" className={styles.image} />
        <img src={require('assets/23586f801fec4445e67c769affd4e840.png')} alt="alt text" className={styles.image1} />
      </div>
      <div className={styles.box1}>
        <h5 className={styles.highlights}>Deposit</h5>
      </div>
      <div className={styles.box2}>
        <h5 className={styles.highlights1}>Withdraw Balance</h5>
      </div>
    </div>
  );
}

Header0.inStorybook = true;
