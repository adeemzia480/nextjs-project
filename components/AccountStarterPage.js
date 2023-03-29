import cn from 'classnames';
import GettingStarted__4 from 'components/GettingStarted__4';
import LoginLeft from 'components/LoginLeft';

import styles from './AccountStarterPage.module.scss';

export default function AccountStarterPage(props) {
  return (
    <div className={cn(styles.root, 'account-starter-page')}>
      <div className={styles.root__cell}>
        <div className={styles.box}>
          <LoginLeft />
        </div>
      </div>
      <div className={styles.root__cell1}>
        <div className={styles.component}>
          <GettingStarted__4 />
        </div>
      </div>
    </div>
  );
}

AccountStarterPage.inStorybook = true;
