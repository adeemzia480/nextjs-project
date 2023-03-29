import cn from 'classnames';
import ChatTile from 'components/ChatTile';
import MyChatTile from 'components/MyChatTile';
import PrimaryBtn from 'components/PrimaryBtn';
import Image from 'next/image';
import React from 'react';

import styles from './Reusable29.module.scss';

export default function Reusable29(props) {
  return (
    <div className={cn(styles.root, 'reusable29')}>
      <div className={styles.root__item}>
        <div className={styles.flexCol}>
          <div className={styles.flexCol1}>
            <h4 className={styles.highlights}>Conversations</h4>

            <div className={styles.box1}>
              <div className={styles.box1__item}>
                <Image
                  src={require('assets/420d3356778e9321b9d4e5339ce57fbe.png')}
                  alt="alt text"
                  className={styles.icon}
                />
              </div>
              <div className={styles.box1__spacer} />
              <div className={styles.box1__item1}>
                <div className={styles.info}>Search Influencer...</div>
              </div>
            </div>
          </div>

          <div className={styles.flexCol2}>
            <div className={styles.box2}>
              <MyChatTile info1={`lorem ipsum dolor sit ...`} info11={`1 min ago`} text={`Ricky Smith`} />
            </div>
            <div comment="missing component" className={styles.box3}>
              <React.Fragment />
            </div>
            <div className={styles.box3}>
              <ChatTile
                background={require('assets/84fe169cb8a858fab03c09571271efe2.png')}
                icon5={require('assets/01346a8beb20cb32feade45762bddc71.svg').default}
                info2={`lorem ipsum dolor sit ...`}
                info3={`1 min ago`}
                text1={`Ricky Smith`}
              />
            </div>
            <div className={styles.box4}>
              <ChatTile
                background={require('assets/84fe169cb8a858fab03c09571271efe2.png')}
                icon5={require('assets/01346a8beb20cb32feade45762bddc71.svg').default}
                info2={`lorem ipsum dolor sit ...`}
                info3={`1 min ago`}
                text1={`Ricky Smith`}
              />
            </div>
            <div className={styles.box4}>
              <ChatTile
                background={require('assets/84fe169cb8a858fab03c09571271efe2.png')}
                icon5={require('assets/01346a8beb20cb32feade45762bddc71.svg').default}
                info2={`lorem ipsum dolor sit ...`}
                info3={`1 min ago`}
                text1={`Ricky Smith`}
              />
            </div>
            <div className={styles.box5}>
              <ChatTile
                background={require('assets/84fe169cb8a858fab03c09571271efe2.png')}
                icon5={require('assets/01346a8beb20cb32feade45762bddc71.svg').default}
                info2={`lorem ipsum dolor sit ...`}
                info3={`1 min ago`}
                text1={`Ricky Smith`}
              />
            </div>
            <div className={styles.box4}>
              <ChatTile
                background={require('assets/84fe169cb8a858fab03c09571271efe2.png')}
                icon5={require('assets/01346a8beb20cb32feade45762bddc71.svg').default}
                info2={`lorem ipsum dolor sit ...`}
                info3={`1 min ago`}
                text1={`Ricky Smith`}
              />
            </div>
            <div className={styles.box4}>
              <ChatTile
                background={require('assets/84fe169cb8a858fab03c09571271efe2.png')}
                icon5={require('assets/01346a8beb20cb32feade45762bddc71.svg').default}
                info2={`lorem ipsum dolor sit ...`}
                info3={`1 min ago`}
                text1={`Ricky Smith`}
              />
            </div>
            <div className={styles.box4}>
              <ChatTile
                background={require('assets/84fe169cb8a858fab03c09571271efe2.png')}
                icon5={require('assets/01346a8beb20cb32feade45762bddc71.svg').default}
                info2={`lorem ipsum dolor sit ...`}
                info3={`1 min ago`}
                text1={`Ricky Smith`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.root__spacer} />

      <div className={styles.flexCol3}>
        <div className={styles.flexCol1}>
          <div className={styles.wrapper9}>
            <div className={styles.wrapper9__item}>
              <Image
                src={require('assets/c76532ef4159c2a2870e44ca35560e9d.png')}
                alt="alt text"
                className={styles.icon3}
              />
            </div>
            <div className={styles.wrapper9__spacer} />
            <h5 className={styles.highlights2}>Ricky Smith</h5>
            <div className={styles.wrapper9__spacer} />
            <div className={styles.wrapper9__item1}>
              <Image
                src={require('assets/e93b9f887ed71181dcbf45c3ffafa717.png')}
                alt="alt text"
                className={styles.icon5}
              />
            </div>
            <div className={styles.info6}>Online</div>
          </div>

          <hr size={1} className={styles.line1} />
        </div>

        <div className={styles.flexCol4}>
          <div className={styles.box6}>
            <div className={styles.info1}>Today</div>
          </div>

          <div className={styles.flexCol5}>
            <div className={styles.wrapper12}>
              <div className={styles.wrapper13}>
                <div className={styles.wrapper13__item}>
                  <Image
                    src={require('assets/f0d1382a0533d07ef6bd81ee53391607.png')}
                    alt="alt text"
                    className={styles.image3}
                  />
                </div>
                <div className={styles.wrapper13__item1}>
                  <div className={styles.info8}>Ricky Smith</div>
                </div>
                <div className={styles.wrapper13__item2}>
                  <div className={styles.info9}>12:00 PM</div>
                </div>
              </div>

              <div className={styles.box15}>
                <p className={styles.desc}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                  enim velit mollit.{' '}
                </p>
              </div>
            </div>

            <div className={styles.wrapper15}>
              <px-grid x="185fr 121fr 0px" y="0px 31fr 0px">
                <div className={styles.wrapper16}>
                  <div className={styles.info91}>12:02 PM</div>
                  <div className={styles.wrapper16__item}>
                    <div className={styles.info8}>You</div>
                  </div>
                  <div className={styles.wrapper16__item1}>
                    <Image
                      src={require('assets/bc133bc05dd92b3e6fab60a2b5faaade.png')}
                      alt="alt text"
                      className={styles.icon6}
                    />
                  </div>
                </div>
              </px-grid>

              <div className={styles.box17}>
                <p className={styles.desc1}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                  enim velit mollit.{' '}
                </p>
              </div>
            </div>

            <div className={styles.wrapper14}>
              <div className={styles.wrapper13}>
                <div className={styles.wrapper13__item3}>
                  <Image
                    src={require('assets/c0c368ae42452cff7d8d72b56c048d5b.png')}
                    alt="alt text"
                    className={styles.image3}
                  />
                </div>
                <div className={styles.wrapper13__item4}>
                  <div className={styles.info8}>Ricky Smith</div>
                </div>
                <div className={styles.wrapper13__item5}>
                  <div className={styles.info9}>12:00 PM</div>
                </div>
              </div>

              <div className={styles.box16}>
                <p className={styles.desc2}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.flexCol6}>
          <hr size={1} className={styles.line11} />

          <div className={styles.wrapper10}>
            <div className={styles.wrapper11}>
              <div className={styles.wrapper11__item}>
                <Image
                  src={require('assets/d78f5c6a7abdef3ff348b2748a8bd54b.png')}
                  alt="alt text"
                  className={styles.icon4}
                />
              </div>
              <div className={styles.wrapper11__item1}>
                <Image
                  src={require('assets/09f89421b45ac8b782f0d75b639877cc.png')}
                  alt="alt text"
                  className={styles.icon41}
                />
              </div>
              <div className={styles.wrapper11__item1}>
                <Image
                  src={require('assets/ffee999022ae5521fb0d756bb48399a2.png')}
                  alt="alt text"
                  className={styles.icon41}
                />
              </div>
              <div className={styles.wrapper11__item2}>
                <div className={styles.box12}>
                  <div className={styles.info7}>Create Offer</div>
                </div>
              </div>
            </div>

            <div className={styles.wrapper10__spacer} />

            <div className={styles.box13}>
              <div className={styles.box13__item}>
                <div className={styles.info2}>Write Something</div>
              </div>
              <div className={styles.box13__spacer} />

              <div className={styles.box14}>
                <div className={styles.box14__item}>
                  <div className={styles.text6}>Send</div>
                </div>
                <div className={styles.box14__spacer} />
                <div className={styles.box14__item1}>
                  <Image
                    src={require('assets/fdbca8e06f5291e3906378d46ceb9342.png')}
                    alt="alt text"
                    className={styles.image2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.box7}>
        <div className={styles.wrapper4}>
          <div className={styles.wrapper4__item}>
            <Image src={require('assets/96b42b39675f1e14b9e9987f51ef724b.png')} alt="alt text" className={styles.image} />
          </div>

          <div className={styles.wrapper5}>
            <h4 className={styles.highlights1}>Ricky Smith</h4>
            <div className={styles.text3}>Online</div>
          </div>

          <div className={styles.box8}>
            <PrimaryBtn btn__text={`View Profile`} />
          </div>
        </div>

        <hr size={1} className={styles.line} />

        <div className={styles.wrapper6}>
          <div className={styles.wrapper7}>
            <h5 className={styles.highlights21}>Media, Files and Links</h5>

            <div className={styles.wrapper8}>
              <div className={styles.box9}>
                <div className={styles.text4}>Media</div>
              </div>

              <div className={styles.wrapper8__spacer} />

              <div className={styles.box10}>
                <div className={styles.text5}>Files</div>
              </div>

              <div className={styles.wrapper8__spacer} />

              <div className={styles.box11}>
                <div className={styles.text51}>Offers</div>
              </div>
            </div>
          </div>

          <div className={styles.wrapper6__item}>
            <Image
              src={require('assets/c688179e164c389b7d8aa5bb1f07a2e5.png')}
              alt="alt text"
              className={styles.image1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable29.inStorybook = true;
