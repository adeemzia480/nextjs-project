import { Select } from 'antd';

import cn from 'classnames';

import styles from './Reusable32.module.scss';

export default function Reusable32(props) {
  return (
    <div className={cn(styles.root, 'reusable32')}>
      <div className={styles.group}>
        <div className={styles.flexRow}>
          <h1 className={styles.title}>Confirmed Deals</h1>
          <div className={styles.flexRow__spacer} />
          <div className={styles.box}>
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

      <div className={styles.flexCol}>
        <div className={styles.flexRow1}>
          <div className={styles.text1}>Order Id</div>
          <div className={styles.flexRow1__spacer} />
          <div className={styles.text11}>Date</div>
          <div className={styles.flexRow1__spacer1} />
          <div className={styles.text12}>Deal with</div>
          <div className={styles.flexRow1__spacer} />
          <div className={styles.text1}>Ad Type</div>
          <div className={styles.flexRow1__spacer2} />
          <div className={styles.text13}>Amount</div>
          <div className={styles.flexRow1__spacer3} />
          <div className={styles.text14}>Status</div>
          <div className={styles.flexRow1__spacer4} />
          <div className={styles.text14}>Action</div>
        </div>

        <hr size={1} className={styles.line} />
      </div>

      <div className={styles.flexCol1}>
        <div className={styles.flexRow1}>
          <h4 className={styles.highlights}>#1243</h4>
          <div className={styles.flexRow1__spacer5} />
          <h4 className={styles.highlights1}>10th Jan 2023</h4>
          <div className={styles.flexRow1__spacer6} />
          <h4 className={styles.highlights2}>Nike</h4>
          <div className={styles.flexRow1__spacer7} />
          <h4 className={styles.highlights3}>30-Sec Ad</h4>
          <div className={styles.flexRow1__spacer6} />
          <h4 className={styles.highlights4}>$11,000</h4>
          <div className={styles.flexRow1__spacer6} />
          <div className={styles.flexRow1__item}>
            <px-grid track-style="flex-grow: 1;" x="0px minmax(130px,148fr) 0fr" y="0px minmax(0px, max-content) 0fr">
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Completed</span>
              </button>
            </px-grid>
          </div>
          <div className={styles.flexRow1__spacer6} />

          <button className={styles.btn1} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text1}>View</span>
          </button>
        </div>

        <hr size={1} className={styles.line} />
      </div>

      <div className={styles.flexCol1}>
        <div className={styles.flexRow1}>
          <h4 className={styles.highlights}>#1243</h4>
          <div className={styles.flexRow1__spacer8} />
          <h4 className={styles.highlights1}>10th Jan 2023</h4>
          <div className={styles.flexRow1__spacer9} />
          <h4 className={styles.highlights2}>Nike</h4>
          <div className={styles.flexRow1__spacer10} />
          <h4 className={styles.highlights3}>30-Sec Ad</h4>
          <div className={styles.flexRow1__spacer9} />
          <h4 className={styles.highlights4}>$11,000</h4>
          <div className={styles.flexRow1__spacer9} />
          <div className={styles.flexRow1__item1}>
            <px-grid track-style="flex-grow: 1;" x="0px minmax(130px,148fr) 0fr" y="0px minmax(0px, max-content) 0fr">
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Completed</span>
              </button>
            </px-grid>
          </div>
          <div className={styles.flexRow1__spacer9} />

          <button className={styles.btn1} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text1}>View</span>
          </button>
        </div>

        <hr size={1} className={styles.line} />
      </div>

      <div className={styles.flexCol1}>
        <div className={styles.flexRow1}>
          <h4 className={styles.highlights}>#1243</h4>
          <div className={styles.flexRow1__spacer11} />
          <h4 className={styles.highlights1}>10th Jan 2023</h4>
          <div className={styles.flexRow1__spacer12} />
          <h4 className={styles.highlights2}>Nike</h4>
          <div className={styles.flexRow1__spacer13} />
          <h4 className={styles.highlights3}>30-Sec Ad</h4>
          <div className={styles.flexRow1__spacer12} />
          <h4 className={styles.highlights4}>$11,000</h4>
          <div className={styles.flexRow1__spacer12} />
          <div className={styles.flexRow1__item2}>
            <px-grid track-style="flex-grow: 1;" x="0px minmax(130px,148fr) 0fr" y="0px minmax(0px, max-content) 0fr">
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>Completed</span>
              </button>
            </px-grid>
          </div>
          <div className={styles.flexRow1__spacer12} />

          <button className={styles.btn1} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text1}>View</span>
          </button>
        </div>

        <hr size={1} className={styles.line1} />
      </div>

      <div className={styles.flexRow2}>
        <h4 className={styles.highlights}>#1243</h4>
        <div className={styles.flexRow2__spacer} />
        <h4 className={styles.highlights1}>10th Jan 2023</h4>
        <div className={styles.flexRow2__spacer1} />
        <h4 className={styles.highlights2}>Nike</h4>
        <div className={styles.flexRow2__spacer2} />
        <h4 className={styles.highlights3}>30-Sec Ad</h4>
        <div className={styles.flexRow2__spacer1} />
        <h4 className={styles.highlights4}>$11,000</h4>
        <div className={styles.flexRow2__spacer1} />
        <div className={styles.flexRow2__item}>
          <px-grid track-style="flex-grow: 1;" x="0px minmax(130px,148fr) 0fr" y="0px minmax(0px, max-content) 0fr">
            <button className={styles.btn2} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text2}>In Progress</span>
            </button>
          </px-grid>
        </div>
        <div className={styles.flexRow2__spacer1} />

        <button className={styles.btn1} onClick={() => alert('It is clickable')}>
          <span className={styles.btn__text1}>View</span>
        </button>
      </div>
    </div>
  );
}

Reusable32.inStorybook = true;
