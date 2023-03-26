import cn from 'classnames';
import LanguageChange from 'components/LanguageChange';
import Image from 'next/Image';

import styles from './HeaderMobile.module.scss';

const showMenu = () => {
  const menu = document.querySelector(`.header-mobile .${styles.wrapper3}`);
  // display: toggle
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
};
export default function HeaderMobile(props) {
  return (
    <div className={cn(styles.group, 'header-mobile')}>
      <div className={styles.root}>
        <px-grid
          x="32px 928fr 32px"
          y="15fr 39fr 15fr"
          lg-x="28px 928fr 28px"
          lg-y="15fr 39fr 15fr"
          md-x="24px 928fr 24px"
          md-y="15fr 39fr 15fr"
          sm-x="20px 928fr 20px"
          sm-y="15fr 39fr 15fr"
          xs-x="16px 928fr 16px"
          xs-y="15fr 39fr 15fr"
          tn-x="3px 928fr 4px"
          tn-y="15fr 39fr 15fr">
          <div className={styles.wrapper}>
            <div className={styles.wrapper__item}>
              <Image
                src={require('assets/a9348fd605142d43d466a749aebe2b47.png')}
                alt="alt text"
                className={styles.image}
              />
            </div>
            <div className={styles.wrapper__spacer} />
            <div className={styles.wrapper__item1}>
              <div className={styles.wrapper1}>
                <div className={styles.wrapper1__item}>
                  <div className={styles.wrapper2}>
                    <LanguageChange />
                  </div>
                </div>
                <div className={styles.wrapper1__spacer} />
                <div className={styles.wrapper1__item1}>
                  <Image onClick={() => showMenu()}
                    src={require('assets/40180e62d8565b0773b92cbc871acca8.png')}
                    alt="alt text"
                    className={styles.image2}
                  />
                </div>
              </div>
            </div>
          </div>
        </px-grid>

        <div className={styles.wrapper3}>
          <div className={styles.wrapper4}>
            <div className={styles.wrapper4__item}>
              <h5 className={styles.highlights1}>Home</h5>
            </div>
            <div className={styles.wrapper4__item1}>
              <h5 className={styles.highlights2}>Search Library</h5>
            </div>
            <div className={styles.wrapper4__item1}>
              <h5 className={styles.highlights21}>Chats</h5>
            </div>
            <div className={styles.wrapper4__item1}>
              <h5 className={styles.highlights21}>Settings</h5>
            </div>
            <div className={styles.wrapper4__item1}>
              <h5 className={styles.highlights21}>My Profile</h5>
            </div>
          </div>

          <div className={styles.wrapper5}>
            <div className={styles.box}>
              <div className={styles.box__item}>
                <h5 className={styles.highlights3}>Log In</h5>
              </div>
            </div>

            <div className={styles.box1}>
              <h5 className={styles.highlights4}>Get Started</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeaderMobile.inStorybook = true;
