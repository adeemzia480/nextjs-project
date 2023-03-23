import cn from 'classnames';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Reusable13 from 'components/Reusable13';
import Reusable19a from 'components/Reusable19a';
import Reusable41 from 'components/Reusable41';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './CreatorProfilePage1.module.scss';

export default function CreatorProfilePage1(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show lg:hide">
          <Header />
        </nav>
        <nav className="lg:show">
          <HeaderMobile />
        </nav>
      </Headroom>

      <main className={cn(styles.main, 'creator-profile-page1')}>
        <div className={styles.main__item}>
          <div className={styles.section1}>
            <Reusable13 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.root}>
            <h1 className={styles.title}>Bio</h1>
            <h5 className={styles.highlights}>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
              aute id deserunt nisi. Aliqua Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
              pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
              sint deserunt ut voluptate aute id deserunt nisi. Aliqua{' '}
            </h5>
          </div>
        </div>
        <div className={styles.main__item1}>
          <hr size={1} className={styles.line} />
        </div>
        <div className={styles.main__item__brand}>
          <div className={styles.root1}>
            <div className={styles.root1__item}>
              <div className={styles.flex_row}>
                <div className={styles.flex_row__item}>
                  <h1 className={styles.hero_title}>Find Brand Deals</h1>
                </div>
                <div className={styles.flex_row__spacer} />
                <div className={styles.flex_row__item1}>
                  <div className={styles.box4}>
                    <div className={styles.box4__item}>
                      <div className={styles.input_box}>
                        <input className={styles.input} type={'text'} placeholder={`Search For brands`} />
                      </div>
                    </div>
                    <div className={styles.box4__spacer} />
                    <div className={styles.box4__item1}>
                      <div
                        style={{ '--src': `url(${require('assets/b3e496d8dd42f93792291e90ff09a2a3.png')})` }}
                        className={styles.image2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.root1__item}>
              <div className={styles.flexRow}>
                <div className={styles.flexRow__item}>
                  <div className={styles.box}>
                    <Reusable19a
                      highlights3={`View and Apply`}
                      highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
                      highlights2={`Fixed Rate:  $3000`}
                      image={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
                      medium_title={`Pearson Brand Video`}
                      subtitle={`Roles hiring for:`}
                      text={`Online commercial / Video Ad`}
                      text1={`NONUNION`}
                      text2={`$ | 5000`}
                    />
                  </div>
                </div>
                <div className={styles.flexRow__item}>
                  <div className={styles.box2}>
                    <Reusable19a
                      highlights3={`View and Apply`}
                      highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
                      highlights2={`Fixed Rate:  $3000`}
                      image={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
                      medium_title={`Pearson Brand Video`}
                      subtitle={`Roles hiring for:`}
                      text={`Online commercial / Video Ad`}
                      text1={`NONUNION`}
                      text2={`$ | 5000`}
                    />
                  </div>
                </div>
                <div className={styles.flexRow__item}>
                  <div className={styles.box3}>
                    <Reusable19a
                      highlights3={`View and Apply`}
                      highlights1={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet dolor do amet sint...more`}
                      highlights2={`Fixed Rate:  $3000`}
                      image={require('assets/4e76a224b4f09abf982600ae1c787960.png')}
                      medium_title={`Pearson Brand Video`}
                      subtitle={`Roles hiring for:`}
                      text={`Online commercial / Video Ad`}
                      text1={`NONUNION`}
                      text2={`$ | 5000`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section6}>
            <Reusable41 />
          </div>
        </div>
        <div className={styles.main__item}>
          <div className={styles.section8}>
            <Footer />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

CreatorProfilePage1.inStorybook = true;
