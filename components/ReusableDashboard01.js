import { Select } from 'antd';
import cn from 'classnames';
import Image from 'next/image';

import img01 from 'assets/70c1a184fa1adf012179f4c8bbb4a65b.png';
import styles from './ReusableDashboard01.module.scss';
import section1Styles from './ReusableDashboard01_section1.module.scss';
import section2Styles from './ReusableDashboard01_section2.module.scss';
import section3Styles from './ReusableDashboard01_section3.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <px-grid
        track-style="overflow: auto;"
        area-style="overflow: hidden;"
        x="0px 1279fr 0px"
        y="0fr minmax(0px, max-content) 0fr"
        md-x="30px 1279fr 30px"
        md-y="0fr minmax(0px, max-content) 0fr"
        xxs-x="30px 1279fr 30px"
        xxs-y="0fr minmax(0px, max-content) 0fr"
        tn-x="19.5px 1279fr 19.5px"
        tn-y="0fr minmax(0px, max-content) 0fr">
        <div className={section1Styles.box}>
          <div className={section1Styles.box__item}>
            <div className={section1Styles.flexCol}>
              <h3 className={section1Styles.subtitle}>Account Balance</h3>
              <h1 className={section1Styles.big_title}>$234,567.89</h1>
            </div>
          </div>
          <div className={section1Styles.box__spacer} />
          <div className={section1Styles.box__item1}>
            <Image
              src={require('assets/23586f801fec4445e67c769affd4e840.png')}
              alt="alt text"
              className={section1Styles.image}
            />
          </div>
          <div className={section1Styles.box__spacer1} />
          <div className={section1Styles.box__item2}>
            <div className={section1Styles.flex_column}>
              <h3 className={section1Styles.subtitle1}>Monthly Earning</h3>
              <h1 className={section1Styles.big_title}>$1,234,567.89</h1>
            </div>
          </div>
          <div className={section1Styles.box__spacer2} />
          <div className={section1Styles.box__item1}>
            <Image
              src={require('assets/23586f801fec4445e67c769affd4e840.png')}
              alt="alt text"
              className={section1Styles.image}
            />
          </div>
          <div className={section1Styles.box__spacer3} />
          <div className={section1Styles.box__item3}>
            <div className={section1Styles.flex_column1}>
              <h3 className={section1Styles.subtitle2}>Yearly Earning</h3>
              <h1 className={section1Styles.big_title}>$1,234,567.89</h1>
            </div>
          </div>
        </div>
      </px-grid>

      <div className={section1Styles.flex_row}>
        <div className={section1Styles.flex_row__item}>
          <button className={section1Styles.btn} onClick={() => alert('It is clickable')}>
            <span className={section1Styles.btn__text}>Deposit</span>
          </button>
        </div>
        <div className={section1Styles.flex_row__item1}>
          <button className={section1Styles.btn1} onClick={() => alert('It is clickable')}>
            <span className={section1Styles.btn__text}>Withdraw Balance</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.box3}>
        <div className={section2Styles.group}>
          <div className={section2Styles.flexRow}>
            <h1 className={section2Styles.title}>Analytics</h1>
            <div className={section2Styles.flexRow__spacer} />
            <div className={section2Styles.box4}>
              <Select placeholder="Last Month" size="large" style={{ width: '100%' }}>
                {[].map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <div className={section2Styles.flexRow__spacer1} />
            <div className={section2Styles.box4}>
              <Select placeholder="Last Month" size="large" style={{ width: '100%' }}>
                {[].map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className={section2Styles.flexCol}>
          <div className={section2Styles.flexRow1}>
            <div className={section2Styles.flexCol1}>
              <h4 className={section2Styles.highlights1}>$22,700</h4>
              <h4 className={section2Styles.highlights11}>$22,700</h4>
              <h4 className={section2Styles.highlights12}>$22,700</h4>
              <h4 className={section2Styles.highlights11}>$22,700</h4>
              <h4 className={section2Styles.highlights11}>$22,700</h4>
              <h4 className={section2Styles.highlights11}>$22,700</h4>
              <h4 className={section2Styles.highlights11}>$22,700</h4>
            </div>

            <div className={section2Styles.flexRow1__item}>
              <div
                style={{ '--src': `url(${img01.src})` }}
                className={section2Styles.img}
              />
            </div>
          </div>

          <div className={section2Styles.flexRow2}>
            <h4 className={section2Styles.highlights13}>01:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>03:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>05:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>07:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>09:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>11:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>13:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>15:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>17:00</h4>
            <div className={section2Styles.flexRow2__spacer} />
            <h4 className={section2Styles.highlights13}>21:00</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection3(props) {
  return (
    <section className={section3Styles.section3}>
      <div className={section3Styles.box5}>
        <div className={section3Styles.content_box}>
          <div className={section3Styles.content_box__item}>
            <h1 className={section3Styles.title}>{'Logs & Summary'}</h1>
          </div>
          <div className={section3Styles.content_box__spacer} />
          <div className={section3Styles.content_box__item1}>
            <div className={section3Styles.box4}>
              <Select placeholder="Last Month" size="large" style={{ width: '100%' }}>
                {[].map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className={section3Styles.flex_row1}>
          <div className={section3Styles.text1}>Date</div>
          <div className={section3Styles.flex_row1__spacer} />
          <div className={section3Styles.text11}>Deal With</div>
          <div className={section3Styles.flex_row1__spacer1} />
          <div className={section3Styles.text12}>Views</div>
          <div className={section3Styles.flex_row1__spacer2} />
          <div className={section3Styles.text13}>Ad Type</div>
          <div className={section3Styles.flex_row1__spacer3} />
          <div className={section3Styles.text14}>Amount</div>
          <div className={section3Styles.flex_row1__spacer4} />
          <div className={section3Styles.text15}>Payment Type</div>
        </div>

        <hr size={1} className={section3Styles.line} />

        <div className={section3Styles.flex_row2}>
          <h4 className={section3Styles.highlights2}>10th Jan 2023</h4>
          <div className={section3Styles.flex_row2__spacer} />
          <h4 className={section3Styles.highlights21}>Mr. Beast</h4>
          <div className={section3Styles.flex_row2__spacer} />
          <h4 className={section3Styles.highlights22}>144,234</h4>
          <div className={section3Styles.flex_row2__spacer} />
          <h4 className={section3Styles.highlights23}>30-Sec Ad</h4>
          <div className={section3Styles.flex_row2__spacer} />
          <h4 className={section3Styles.highlights24}>$11,000</h4>
          <div className={section3Styles.flex_row2__spacer} />
          <h4 className={section3Styles.highlights25}>Fixed Rate</h4>
        </div>

        <hr size={1} className={section3Styles.line1} />

        <div className={section3Styles.flex_row21}>
          <h4 className={section3Styles.highlights2}>10th Jan 2023</h4>
          <div className={section3Styles.flex_row21__spacer} />
          <h4 className={section3Styles.highlights21}>Mr. Beast</h4>
          <div className={section3Styles.flex_row21__spacer} />
          <h4 className={section3Styles.highlights22}>144,234</h4>
          <div className={section3Styles.flex_row21__spacer} />
          <h4 className={section3Styles.highlights23}>30-Sec Ad</h4>
          <div className={section3Styles.flex_row21__spacer} />
          <h4 className={section3Styles.highlights24}>$11,000</h4>
          <div className={section3Styles.flex_row21__spacer} />
          <h4 className={section3Styles.highlights25}>Fixed Rate</h4>
        </div>

        <hr size={1} className={section3Styles.line1} />

        <div className={section3Styles.flex_row21}>
          <h4 className={section3Styles.highlights2}>10th Jan 2023</h4>
          <div className={section3Styles.flex_row21__spacer1} />
          <h4 className={section3Styles.highlights21}>Mr. Beast</h4>
          <div className={section3Styles.flex_row21__spacer1} />
          <h4 className={section3Styles.highlights22}>144,234</h4>
          <div className={section3Styles.flex_row21__spacer1} />
          <h4 className={section3Styles.highlights23}>30-Sec Ad</h4>
          <div className={section3Styles.flex_row21__spacer1} />
          <h4 className={section3Styles.highlights24}>$11,000</h4>
          <div className={section3Styles.flex_row21__spacer1} />
          <h4 className={section3Styles.highlights25}>Fixed Rate</h4>
        </div>

        <hr size={1} className={section3Styles.line1} />

        <div className={section3Styles.flex_row21}>
          <h4 className={section3Styles.highlights2}>10th Jan 2023</h4>
          <div className={section3Styles.flex_row21__spacer2} />
          <h4 className={section3Styles.highlights21}>Mr. Beast</h4>
          <div className={section3Styles.flex_row21__spacer2} />
          <h4 className={section3Styles.highlights22}>144,234</h4>
          <div className={section3Styles.flex_row21__spacer2} />
          <h4 className={section3Styles.highlights23}>30-Sec Ad</h4>
          <div className={section3Styles.flex_row21__spacer2} />
          <h4 className={section3Styles.highlights24}>$11,000</h4>
          <div className={section3Styles.flex_row21__spacer2} />
          <h4 className={section3Styles.highlights25}>Fixed Rate</h4>
        </div>

        <hr size={1} className={section3Styles.line1} />

        <div className={section3Styles.flex_row22}>
          <h4 className={section3Styles.highlights2}>10th Jan 2023</h4>
          <div className={section3Styles.flex_row22__spacer} />
          <h4 className={section3Styles.highlights21}>Mr. Beast</h4>
          <div className={section3Styles.flex_row22__spacer} />
          <h4 className={section3Styles.highlights22}>144,234</h4>
          <div className={section3Styles.flex_row22__spacer} />
          <h4 className={section3Styles.highlights23}>30-Sec Ad</h4>
          <div className={section3Styles.flex_row22__spacer} />
          <h4 className={section3Styles.highlights24}>$11,000</h4>
          <div className={section3Styles.flex_row22__spacer} />
          <h4 className={section3Styles.highlights25}>Fixed Rate</h4>
        </div>
      </div>
    </section>
  );
}

export default function ReusableDashboard01(props) {
  return (
    <main className={cn(styles.main, 'reusable-dashboard01')}>
      <div className={styles.main__item}>{renderSection1(props)}</div>
      <div className={styles.main__item}>{renderSection2(props)}</div>
      <div className={styles.main__item}>{renderSection3(props)}</div>
    </main>
  );
}

ReusableDashboard01.inStorybook = true;
