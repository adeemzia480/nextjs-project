import { Select } from 'antd';
import cn from 'classnames';

import styles from './ReusableTable03.module.scss';

export default function ReusableTable03(props) {
  return (
    <div className={cn(styles.root, 'reusable-table03')}>
      <div className={styles.root__item}>
        <div className={styles.content_box}>
          <div className={styles.content_box__item}>
            <h1 className={styles.title}>Received Brand Deals</h1>
          </div>
          <div className={styles.content_box__spacer} />
          <div className={styles.content_box__item1}>
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
      </div>
      <div className={styles.root__item1}>
        <div className={styles.flex_row}>
          <div className={styles.text1}>Order Id</div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.text11}>Date</div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.text12}>Deal with</div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.text1}>Ad Type</div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.text13}>Amount</div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.text14}>Status</div>
        </div>
      </div>
      <div className={styles.root__item}>
        <hr size={1} className={styles.line} />
      </div>
      <div className={styles.root__item2}>
        <div className={styles.flex_row1}>
          <h4 className={styles.highlights}>#1243</h4>
          <div className={styles.flex_row1__spacer} />
          <h4 className={styles.highlights1}>10th Jan 2023</h4>
          <div className={styles.flex_row1__spacer} />
          <h4 className={styles.highlights2}>Nike</h4>
          <div className={styles.flex_row1__spacer} />
          <h4 className={styles.highlights3}>30-Sec Ad</h4>
          <div className={styles.flex_row1__spacer} />
          <h4 className={styles.highlights4}>$11,000</h4>
          <div className={styles.flex_row1__spacer} />
          <div className={styles.flex_row1__item}>
            <div className={styles.box1}>
              <h4 className={styles.highlights11}>Completed</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.root__item}>
        <hr size={1} className={styles.line} />
      </div>
      <div className={styles.root__item2}>
        <div className={styles.flex_row1}>
          <h4 className={styles.highlights}>#1243</h4>
          <div className={styles.flex_row1__spacer1} />
          <h4 className={styles.highlights1}>10th Jan 2023</h4>
          <div className={styles.flex_row1__spacer1} />
          <h4 className={styles.highlights2}>Nike</h4>
          <div className={styles.flex_row1__spacer1} />
          <h4 className={styles.highlights3}>30-Sec Ad</h4>
          <div className={styles.flex_row1__spacer1} />
          <h4 className={styles.highlights4}>$11,000</h4>
          <div className={styles.flex_row1__spacer1} />
          <div className={styles.flex_row1__item1}>
            <div className={styles.box1}>
              <h4 className={styles.highlights11}>Completed</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.root__item}>
        <hr size={1} className={styles.line} />
      </div>
      <div className={styles.root__item2}>
        <div className={styles.flex_row1}>
          <h4 className={styles.highlights}>#1243</h4>
          <div className={styles.flex_row1__spacer2} />
          <h4 className={styles.highlights1}>10th Jan 2023</h4>
          <div className={styles.flex_row1__spacer2} />
          <h4 className={styles.highlights2}>Nike</h4>
          <div className={styles.flex_row1__spacer2} />
          <h4 className={styles.highlights3}>30-Sec Ad</h4>
          <div className={styles.flex_row1__spacer2} />
          <h4 className={styles.highlights4}>$11,000</h4>
          <div className={styles.flex_row1__spacer2} />
          <div className={styles.flex_row1__item2}>
            <div className={styles.box1}>
              <h4 className={styles.highlights11}>Completed</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.root__item}>
        <hr size={1} className={styles.line} />
      </div>
      <div className={styles.root__item2}>
        <div className={styles.flex_row4}>
          <h4 className={styles.highlights}>#1243</h4>
          <div className={styles.flex_row4__spacer} />
          <h4 className={styles.highlights1}>10th Jan 2023</h4>
          <div className={styles.flex_row4__spacer} />
          <h4 className={styles.highlights2}>Nike</h4>
          <div className={styles.flex_row4__spacer} />
          <h4 className={styles.highlights3}>30-Sec Ad</h4>
          <div className={styles.flex_row4__spacer} />
          <h4 className={styles.highlights4}>$11,000</h4>
          <div className={styles.flex_row4__spacer} />
          <div className={styles.flex_row4__item}>
            <div className={styles.box2}>
              <h4 className={styles.highlights21}>In Progress</h4>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

ReusableTable03.inStorybook = true;
