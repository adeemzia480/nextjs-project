import { Select } from 'antd';
import 'antd/dist/antd.css';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './ReusableTable.module.scss';

export default function ReusableTable(props) {
  return (
    <div className={cn(styles.box, 'reusable-table')}>
      <div className={styles.content_box}>
        <div className={styles.content_box__item}>
          <h1 className={styles.title}>{props.title}</h1>
        </div>
        <div className={styles.content_box__spacer} />
        <div className={styles.content_box__item1}>
          <div className={styles.box1}>
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

      <div className={styles.flex_row}>
        <div className={styles.text1}>Order Id</div>
        <div className={styles.flex_row__spacer} />
        <div className={styles.text11}>Date</div>
        <div className={styles.flex_row__spacer1} />
        <div className={styles.text12}>Lorem Ipsum</div>
        <div className={styles.flex_row__spacer2} />
        <div className={styles.text13}>Status</div>
      </div>

      <hr size={1} className={styles.line} />

      <div className={styles.flex_row1}>
        <h4 className={styles.highlights}>#1243</h4>
        <div className={styles.flex_row1__spacer} />
        <h4 className={styles.highlights1}>10th Jan 2023</h4>
        <div className={styles.flex_row1__spacer1} />
        <h4 className={styles.highlights2}>Lorem ipsum dolor sit amet quet seqit</h4>
        <div className={styles.flex_row1__spacer1} />

        <div className={styles.box2}>
          <h4 className={styles.highlights11}>Closed</h4>
        </div>
      </div>

      <hr size={1} className={styles.line1} />

      <div className={styles.flex_row1}>
        <h4 className={styles.highlights3}>#1243</h4>
        <div className={styles.flex_row1__spacer2} />
        <h4 className={styles.highlights4}>10th Jan 2023</h4>
        <div className={styles.flex_row1__spacer3} />
        <h4 className={styles.highlights5}>Lorem ipsum dolor sit amet quet seqit</h4>
        <div className={styles.flex_row1__spacer3} />

        <div className={styles.box2}>
          <h4 className={styles.highlights12}>Closed</h4>
        </div>
      </div>

      <hr size={1} className={styles.line2} />

      <div className={styles.flex_row1}>
        <h4 className={styles.highlights6}>#1243</h4>
        <div className={styles.flex_row1__spacer4} />
        <h4 className={styles.highlights7}>10th Jan 2023</h4>
        <div className={styles.flex_row1__spacer5} />
        <h4 className={styles.highlights8}>Lorem ipsum dolor sit amet quet seqit</h4>
        <div className={styles.flex_row1__spacer5} />

        <div className={styles.box2}>
          <h4 className={styles.highlights13}>Closed</h4>
        </div>
      </div>

      <hr size={1} className={styles.line3} />

      <div className={styles.flex_row4}>
        <h4 className={styles.highlights9}>#1243</h4>
        <div className={styles.flex_row4__spacer} />
        <h4 className={styles.highlights10}>10th Jan 2023</h4>
        <div className={styles.flex_row4__spacer1} />
        <h4 className={styles.highlights14}>Lorem ipsum dolor sit amet quet seqit</h4>
        <div className={styles.flex_row4__spacer1} />

        <div className={styles.box3}>
          <h4 className={styles.highlights21}>Open</h4>
        </div>
      </div>
    </div>
  );
}

ReusableTable.propTypes = {
  title: PropTypes.string.isRequired
};

ReusableTable.inStorybook = true;
