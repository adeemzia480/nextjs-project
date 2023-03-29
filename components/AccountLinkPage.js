import cn from 'classnames';
import LoginLeft from 'components/LoginLeft';
import Resuable001 from 'components/Resuable001';

import styles from './AccountLinkPage.module.scss';

export default function AccountLinkPage(props) {
  return (
    <div className={cn(styles.grid, 'account-link-page')}>
      <div className={styles.grid__cell}>
        <div className={styles.box}>
          <LoginLeft />
        </div>
      </div>
      <div className={styles.grid__cell}>
        <div className={styles.component}>
          <Resuable001 />
        </div>
      </div>
    </div>
  );
}

AccountLinkPage.inStorybook = true;
