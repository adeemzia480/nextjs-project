import 'antd/dist/antd.css';
import Input from 'antd/es/input';
import cn from 'classnames';
import Header from 'components/Header';
import Reusable01 from 'components/Reusable01';
import Reusable02 from 'components/Reusable02';
import Reusable03 from 'components/Reusable03';
import ReusableInfluencer from 'components/ReusableInfluencer';
import ReusableSec06 from 'components/ReusableSec06';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './Hero.module.scss';
import section3Styles from './Hero_section3.module.scss';
import section5Styles from './Hero_section5.module.scss';
import section6Styles from './Hero_section6.module.scss';
import section7Styles from './Hero_section7.module.scss';
import section8Styles from './Hero_section8.module.scss';

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

function renderSection5(props) {
  return (
    <section className={section5Styles.section5}>
      <div className={section5Styles.section5__item}>
        <h1 className={section5Styles.hero_title2}>How we Work?</h1>
      </div>

      <div className={section5Styles.group}>
        <img
          src={require('assets/3e893f2dbb582e170a4efddecf353e08.png')}
          alt="alt text"
          className={section5Styles.image4}
        />

        <div className={section5Styles.flexRow}>
          <div className={section5Styles.flexRow__item}>
            <div className={section5Styles.flexCol}>
              <div className={section5Styles.flexCol__item}>
                <img
                  src={require('assets/7eb5ef0cd34ffe26e0e72bf8b91af908.png')}
                  alt="alt text"
                  className={section5Styles.icon1}
                />
              </div>
              <div className={section5Styles.flexCol__item}>
                <h2 className={section5Styles.medium_title}>Create Account</h2>
              </div>
              <h5 className={section5Styles.highlights7}>
                By connecting your YouTube account, creators stats will be automatically displayed on our website.
              </h5>
            </div>
          </div>
          <div className={section5Styles.flexRow__item}>
            <div className={section5Styles.flexCol}>
              <div className={section5Styles.flexCol__item1}>
                <img
                  src={require('assets/9f4c45d6e0099e69fd538641fdaab47e.png')}
                  alt="alt text"
                  className={section5Styles.icon1}
                />
              </div>
              <div className={section5Styles.flexCol__item1}>
                <h2 className={section5Styles.medium_title}>Complete Profile</h2>
              </div>
              <h5 className={section5Styles.highlights71}>
                {'Customize your profile with information. Brands can see your past conversions & click through ratio.'}
              </h5>
            </div>
          </div>
          <div className={section5Styles.flexRow__item}>
            <div className={section5Styles.flexCol}>
              <div className={section5Styles.flexCol__item2}>
                <img
                  src={require('assets/45b1e747b2ed363b512e47cd3649f56c.png')}
                  alt="alt text"
                  className={section5Styles.icon1}
                />
              </div>
              <div className={section5Styles.flexCol__item2}>
                <h2 className={section5Styles.medium_title}>Find Each Other</h2>
              </div>
              <h5 className={section5Styles.highlights72}>
                Through our efficient filter system, creators and brands can easily find each other, saving valuable
                time.
              </h5>
            </div>
          </div>
          <div className={section5Styles.flexRow__item}>
            <div className={section5Styles.flexCol}>
              <div className={section5Styles.flexCol__item3}>
                <img
                  src={require('assets/3ab7e910268f7597cc4523488c9b0132.png')}
                  alt="alt text"
                  className={section5Styles.icon1}
                />
              </div>
              <div className={section5Styles.flexCol__item3}>
                <h2 className={section5Styles.medium_title}>Collaborate</h2>
              </div>
              <h5 className={section5Styles.highlights73}>
                {
                  "Chat with creators, find the perfect deal, and accept offers securely with our website's high-tech system."
                }
              </h5>
            </div>
          </div>
        </div>
      </div>

      <hr size={1} className={section5Styles.line3} />
    </section>
  );
}

function renderSection6(props) {
  return (
    <section className={section6Styles.section6}>
      <div className={section6Styles.flexCol}>
        <px-grid x="2fr minmax(0px, max-content) 739fr" y="0px 69fr 0px">
          <h1 className={section6Styles.hero_title2}>What People Say About Us</h1>
        </px-grid>

        <div className={section6Styles.flexRow}>
          <div className={section6Styles.flexRow__item}>
            <div className={section6Styles.component}>
              <ReusableSec06
                highlights7={`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. `}
                highlights71={`Lorem Ipsum dolor sit`}
                icon2={require('assets/3db01a9c6eb517f9f93a22cb94689e79.png')}
                subtitle={`Robert Smith`}
              />
            </div>
          </div>
          <div className={section6Styles.flexRow__item}>
            <div className={section6Styles.component1}>
              <ReusableSec06
                highlights7={`Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. `}
                highlights71={`Lorem Ipsum dolor sit`}
                icon2={require('assets/a5e8970606195181d6ad57f21be55fe4.png')}
                subtitle={`Robert Smith`}
              />
            </div>
          </div>
        </div>

        <div className={section6Styles.flexRow1}>
          <div className={section6Styles.flexRow1__item}>
            <div
              style={{ '--src': `url(${require('assets/396fb92429aa712b5350292a3f4802a5.png')})` }}
              className={section6Styles.group}>
              <div className={section6Styles.group1}>
                <hr size={1} className={section6Styles.line4} />
                <img
                  src={require('assets/3d2bda7732a868d66ad4af9caf1c162d.png')}
                  alt="alt text"
                  className={section6Styles.image7}
                />
              </div>
            </div>
          </div>

          <div
            style={{ '--src': `url(${require('assets/5997385e35ea54fdced785721ad3206a.png')})` }}
            className={section6Styles.group2}>
            <div className={section6Styles.group3}>
              <img
                src={require('assets/7ec4755aa93d2baf927bd41d5f355239.png')}
                alt="alt text"
                className={section6Styles.image5}
              />
              <img
                src={require('assets/c85e6638f15bdc07b8b111969fb134d3.png')}
                alt="alt text"
                className={section6Styles.image6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection7(props) {
  return (
    <section className={section7Styles.section7}>
      <div className={section7Styles.box4}>
        <img
          src={require('assets/e35be313a117b3ddf65372bf7578f93e.png')}
          alt="alt text"
          className={section7Styles.icon4}
        />
        <img
          src={require('assets/728e269feecd5558b6c5335c6daa58d0.png')}
          alt="alt text"
          className={section7Styles.icon6}
        />
        <img
          src={require('assets/302fe3c8bfbfea08415a415a9df48b15.png')}
          alt="alt text"
          className={section7Styles.icon5}
        />
        <img
          src={require('assets/3215011a4b559f0960b4f069acdb3c5c.png')}
          alt="alt text"
          className={section7Styles.icon7}
        />
        <img
          src={require('assets/83ae2c5317a297c6b8551065d302ab7d.png')}
          alt="alt text"
          className={section7Styles.icon71}
        />
        <px-grid
          track-style="flex-grow: 1;"
          x="307fr 57.39% 307fr"
          y="70px 335fr 56fr"
          z-index={1}
          lg-x="307fr 57.39% 307fr"
          lg-y="70px 335fr 56fr"
          lg-z-index={1}
          md-x="144fr 80.01% 144fr"
          md-y="70px 335fr 56fr"
          md-z-index={1}>
          <div className={section7Styles.flexCol}>
            <h1 className={section7Styles.hero_title3}>Benefits for management teams on our platform?</h1>
            <h5 className={section7Styles.highlights8}>
              {
                "Our platform offers a multitude of benefits for management teams. By managing your YouTubers on our secure and efficient platform, you can easily find better and more secure deals. We're not here to be your competition, but rather a tool to help you succeed."
              }
            </h5>

            <button className={section7Styles.btn} onClick={() => alert('It is clickable')}>
              <span className={section7Styles.btn__text}>Get Started</span>
            </button>
          </div>
        </px-grid>
      </div>
    </section>
  );
}

function renderSection8(props) {
  return (
    <section className={section8Styles.section8}>
      <div className={section8Styles.box6}>
        <div className={section8Styles.flexRow}>
          <div className={section8Styles.flexCol}>
            <div className={section8Styles.flexRow1}>
              <div
                style={{ '--src': `url(${require('assets/4d6f3990c12e3a434fb53f2528f33aa9.png')})` }}
                className={section8Styles.wrapper}>
                <img
                  src={require('assets/0a5ccaa1163207a429fdd909cfb32460.png')}
                  alt="alt text"
                  className={section8Styles.icon8}
                />
              </div>

              <h3 className={section8Styles.subtitle1}>Creator Marketplace</h3>
            </div>

            <h5 className={section8Styles.highlights11}>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit
              dolore{' '}
            </h5>
          </div>

          <div className={section8Styles.flexCol1}>
            <h2 className={section8Styles.medium_title1}>Resources</h2>
            <h5 className={section8Styles.highlights10}>
              Support
              <br />
              Help centre
              <br />
              <br />
            </h5>
          </div>

          <div className={section8Styles.flexCol2}>
            <h2 className={section8Styles.medium_title11}>Company</h2>
            <h5 className={section8Styles.highlights101}>
              About us
              <br />
              Contact
              <br />
              Affiliate Program
              <br />
            </h5>
          </div>

          <div className={section8Styles.flexCol3}>
            <div className={section8Styles.box7}>
              <Input style={{ width: '100%', height: '100%' }} placeholder="Subscribe Email" />
            </div>
            <px-grid x="0px 291fr 24px" y="30fr 23fr 0fr">
              <h2 className={section8Styles.medium_title12}>Newsletter Subscription</h2>
            </px-grid>
          </div>
        </div>

        <hr size={1} className={section8Styles.line5} />
        <h5 className={section8Styles.highlights12}>© 2023 Creator Marketplace. All Rights Reserved</h5>
      </div>
    </section>
  );
}

export default function Hero(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show">
          <Header />
        </nav>
      </Headroom>

      <main className={cn(styles.main, 'hero')}>
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
        <div className={styles.main__item}>{renderSection5(props)}</div>
        <div className={styles.main__item}>{renderSection6(props)}</div>
        <div className={styles.main__item}>{renderSection7(props)}</div>
        <div className={styles.main__item}>{renderSection8(props)}</div>
      </main>
    </React.Fragment>
  );
}

Hero.inStorybook = true;
