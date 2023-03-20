import React from 'react';
import cn from 'classnames';
import Reusable01 from 'components/Reusable01';
import Reusable02 from 'components/Reusable02';
import ReusableInfluencer from 'components/ReusableInfluencer';
import Reusable03 from 'components/Reusable03';
import Reusable42 from 'components/Reusable42';
import Reusable41 from 'components/Reusable41';
import Reusable40 from 'components/Reusable40';
import Footer from 'components/Footer';
import Headroom from 'react-headroom';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';

import section3Styles from './BeforeLoginPage_section3.module.scss';
import styles from './BeforeLoginPage.module.scss';

function renderSection3(props) {
  return (
    <section className={section3Styles.section3}>
      <px-grid x="79fr minmax(0px, max-content) 1038fr" y="49px 69fr 0px">
        <h1 className={section3Styles.hero_title2}>Find Influencers</h1>
      </px-grid>

      <div className={section3Styles.flexRow}>
        <div className={section3Styles.box13}>
          <ReusableInfluencer
            highlights13={`create content that entertains, inspires, and makes a positive impact on the world.`}
            highlights14={`136 M`}
            highlights141={`23.9 M`}
            highlights142={`78.1 M`}
            icon9={require('assets/5e98f0d3ec82d9f213e4810199505315.png')}
            image10={require('assets/84998c226960304ecea64801815e180e.png')}
            medium_title2={`MrBeast`}
          />
        </div>
        <div className={section3Styles.box12}>
          <ReusableInfluencer
            highlights13={`YouTuber who loves to make people laugh and entertain my audience videos.`}
            highlights14={`111 M`}
            highlights141={`23.9 M`}
            highlights142={`78.1 M`}
            icon9={require('assets/1189407e2a6af001597f8ec447349d6f.png')}
            image10={require('assets/ee4e822bb67267b5a61800e087348b36.png')}
            medium_title2={`PewDiePie`}
          />
        </div>
        <div className={section3Styles.box13}>
          <ReusableInfluencer
            highlights13={`We navigate through life's craziest adventures and bring laughter to the world.`}
            highlights14={`18.1 M`}
            highlights141={`23.9 M`}
            highlights142={`78.1 M`}
            icon9={require('assets/9578a5f495f3c6ddb9f179c25c755747.png')}
            image10={require('assets/369fa6eedb1fa92574cc9f5ab5be4350.png')}
            medium_title2={`DavidDobri`}
          />
        </div>
      </div>

      <hr size={1} className={section3Styles.line2} />
    </section>
  );
}

export default function BeforeLoginPage(props) {
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

      <main className={cn(styles.main, 'before-login-page')}>
        <div className={styles.section1}>
          <Reusable01
            hero_title={`Revolutionize Your Brand Deals with Creator Ads`}
            highlights={`Maximize productivity and income, while minimizing unproductive time. Quickly find suitable influencers and companies with one glance.`}
          />
        </div>
        <div className={styles.section2}>
          <Reusable02 />
        </div>
        <div className={styles.main__item}>{renderSection3(props)}</div>
        <div className={styles.section4}>
          <Reusable03 />
        </div>
        <div className={styles.section5}>
          <Reusable42 />
        </div>
        <div className={styles.section6}>
          <Reusable41 />
        </div>
        <div className={styles.section7}>
          <Reusable40 />
        </div>
        <div className={styles.section8}>
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
}

BeforeLoginPage.inStorybook = true;
