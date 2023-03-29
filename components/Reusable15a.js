
import cn from 'classnames';

import img01 from 'assets/a1d46cd81716d95e24eb00bbda6e5638.png';
import Image from 'next/image';
import styles from './Reusable15a.module.scss';


export default function Reusable15a(props) {
  return (
    <section className={cn(styles.section1, 'reusable15a')}>
      <px-grid
        track-style="flex-grow: 1;"
        x="0px 1440fr 0px"
        y="0px 571fr 50px"
        lg-x="0px 1440fr 0px"
        lg-y="0px minmax(1100px,571fr) 50px"
        md-x="0px 1440fr 0px"
        md-y="0px minmax(1100px,571fr) 50px"
        xs-x="0px 1440fr 0px"
        xs-y="0px minmax(1300px,571fr) 50px">
        <div className={styles.group}>
          <div
            style={{ '--src': `url(${img01.src})` }}
            className={styles.image}
          />

          <div className={styles.flexRow}>
            <div className={styles.flexRow__cell}>
              <div className={styles.flexCol}>
                <div className={styles.flexRow1}>
                  <div className={styles.flexRow1__cell}>
                    <Image
                      src={require('assets/c4be92beecd3c4e9b0cdbde56da9d972.png')}
                      alt="alt text"
                      className={styles.image1}
                    />
                  </div>
                  <div className={styles.flexRow1__spacer} />
                  <div className={styles.flexRow1__cell1}>
                    <div className={styles.flexRow2}>
                      <div className={styles.flexRow2__cell}>
                        <h2 className={styles.medium_title}>Robert Smith</h2>
                      </div>
                      <div className={styles.flexRow2__spacer} />
                      <div className={styles.flexRow2__cell1}>
                        <div className={styles.flexRow3}>
                          <div className={styles.flexRow3__cell}>
                            <Image
                              src={require('assets/6e17eebe8fc88eb6ff5b7c0da98d7f16.png')}
                              alt="alt text"
                              className={styles.icon}
                            />
                          </div>
                          <div className={styles.flexRow3__cell1}>
                            <h3 className={styles.subtitle}>Los Angeles, United States</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr size={1} className={styles.line} />

                <div className={styles.flexCol1}>
                  <h1 className={styles.title}>About Me</h1>
                  <h5 className={styles.highlights}>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
                    mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
                    voluptate aute id deserunt nisi. Aliqua{' '}
                  </h5>
                </div>
              </div>
            </div>
            <div className={styles.flexRow__spacer} />
            <div className={styles.flexRow__cell1}>
              <div className={styles.box5}>
                <div className={styles.flexCol2}>
                  <div className={styles.flexRow4}>
                    <div className={styles.flexRow4__cell}>
                      <div className={styles.flexCol3}>
                        <h1 className={styles.title1}>144K</h1>
                        <h5 className={styles.highlights5}>Subscribers</h5>
                      </div>
                    </div>
                    <div className={styles.flexRow4__spacer} />
                    <div className={styles.flexRow4__cell1}>
                      <div className={styles.flexCol3}>
                        <h1 className={styles.title11}>654K</h1>
                        <h5 className={styles.highlights51}>Monthly Views</h5>
                      </div>
                    </div>
                    <div className={styles.flexRow4__spacer1} />
                    <div className={styles.flexRow4__cell2}>
                      <div className={styles.flexCol3}>
                        <h1 className={styles.title12}>18-24</h1>
                        <h5 className={styles.highlights52}>Age Range</h5>
                      </div>
                    </div>
                  </div>

                  <hr size={1} className={styles.line2} />
                  <h2 className={styles.medium_title1}>Advertisement Details</h2>

                  <div className={styles.box8}>
                    <div className={styles.flexRow5}>
                      <div className={styles.flexRow5__cell}>
                        <div className={styles.flexCol3}>
                          <h5 className={styles.highlights4}>30 - Seconds</h5>
                          <div className={styles.text}>Advertisement Type</div>
                        </div>
                      </div>
                      <div className={styles.flexRow5__spacer} />
                      <div className={styles.flexRow5__cell1}>
                        <div className={styles.flexCol3}>
                          <h5 className={styles.highlights41}>$2000</h5>
                          <div className={styles.text1}>Fixed Rate</div>
                        </div>
                      </div>
                      <div className={styles.flexRow5__spacer1} />
                      <div className={styles.flexRow5__cell2}>
                        <div className={styles.flexCol3}>
                          <h5 className={styles.highlights42}>$8</h5>
                          <div className={styles.text2}>CPM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.box7}>
                    <div className={styles.flexRow6}>
                      <div className={styles.flexRow6__cell}>
                        <div className={styles.flexCol3}>
                          <h5 className={styles.highlights43}>60 - Seconds</h5>
                          <div className={styles.text3}>Advertisement Type</div>
                        </div>
                      </div>
                      <div className={styles.flexRow6__spacer} />
                      <div className={styles.flexRow6__cell1}>
                        <div className={styles.flexCol3}>
                          <h5 className={styles.highlights44}>$5000</h5>
                          <div className={styles.text4}>Fixed Rate</div>
                        </div>
                      </div>
                      <div className={styles.flexRow6__spacer1} />
                      <div className={styles.flexRow6__cell2}>
                        <div className={styles.flexCol3}>
                          <h5 className={styles.highlights45}>None</h5>
                          <div className={styles.text5}>CPM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr size={1} className={styles.line1} />

                  <div className={styles.flexRow7}>
                    <div className={styles.flexRow7__cell}>
                      <button className={styles.btn} onClick={() => alert('It is clickable')}>
                        <span className={styles.btn__text}>Contact Now</span>
                      </button>
                    </div>
                    <div className={styles.flexRow7__spacer} />

                    <div className={styles.flexRow8}>
                      <div className={styles.flexRow8__cell}>
                        <Image
                          src={require('assets/4e142ad7c5c7bbd86ceef580f11fcefd.png')}
                          alt="alt text"
                          className={styles.image6}
                        />
                      </div>
                      <div className={styles.flexRow8__spacer} />
                      <div className={styles.flexRow8__cell1}>
                        <Image
                          src={require('assets/3255f44327340ed19b7e935adf97c91a.png')}
                          alt="alt text"
                          className={styles.image7}
                        />
                      </div>
                      <div className={styles.flexRow8__spacer} />
                      <div className={styles.flexRow8__cell2}>
                        <Image
                          src={require('assets/e6bc7dffdeb35fbfdf110d658ec05d8f.png')}
                          alt="alt text"
                          className={styles.image8}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </px-grid>
    </section>
  );
}

Reusable15a.inStorybook = true;
