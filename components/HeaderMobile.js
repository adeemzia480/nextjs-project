import cn from 'classnames';
import LanguageChange from 'components/LanguageChange';
import Image from 'next/image';
<<<<<<< HEAD
=======

>>>>>>> ad407e329f61c092f799ff82a8e6ee3fae44ca78
import styles from './HeaderMobile.module.scss';

const showMenu = () => {
  const menu = document.querySelector(`.header-mobile .${styles.wrapper3}`);
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  const body = document.querySelector('body');
  body.style.overflow = menu.style.display === 'block' ? 'hidden' : 'auto';
};

export default function HeaderMobile(props) {
  return (
    <div className={cn(styles.group, 'header-mobile')}>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__cell}>
            <Image src={require('assets/a9348fd605142d43d466a749aebe2b47.png')} alt="alt text" className={styles.image} />
          </div>
          <div className={styles.wrapper__spacer} />
          <div className={styles.wrapper__cell1}>
            <div className={styles.wrapper1}>
              <div className={styles.wrapper1__cell}>
                <div className={styles.wrapper2}>
                  <LanguageChange />
                </div>
              </div>
              <div className={styles.wrapper1__spacer} />
              <div className={styles.wrapper1__cell1}>
                <Image onClick={() => showMenu()}
                  src={require('assets/40180e62d8565b0773b92cbc871acca8.png')}
                  alt="alt text"
                  className={styles.image2} />

              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper3}>
          <div className={styles.wrapper4}>
            <div className={styles.wrapper4__cell}>
              <h5 className={styles.highlights1}>Home</h5>
            </div>
            <div className={styles.wrapper4__cell1}>
              <h5 className={styles.highlights2}>Search Library</h5>
            </div>
            <div className={styles.wrapper4__cell1}>
              <h5 className={styles.highlights21}>Chats</h5>
            </div>
            <div className={styles.wrapper4__cell1}>
              <h5 className={styles.highlights21}>Settings</h5>
            </div>
            <div className={styles.wrapper4__cell1}>
              <h5 className={styles.highlights21}>My Profile</h5>
            </div>
          </div>
          <div className={styles.wrapper5}>
            <div className={styles.wrapper5__cell}>
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Log In</span>
              </button>
            </div>
            <div className={styles.wrapper5__cell}>
              <button className={styles.btn1} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text1}>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeaderMobile.inStorybook = true;
