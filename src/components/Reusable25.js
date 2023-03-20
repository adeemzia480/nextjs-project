import React from 'react';
import cn from 'classnames';
import Input from 'antd/es/input';
import 'antd/dist/antd.css';
import Select from 'antd/es/select';

import styles from './Reusable25.module.scss';

export default function Reusable25(props) {
  return (
    <div className={cn(styles.box, 'reusable25')}>
      <div className={styles.box__item}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__item}>
            <h3 className={styles.subtitle}>Deal Title</h3>
          </div>
          <div className={styles.box1}>
            <Input style={{ width: '100%', height: '100%' }} placeholder="" />
          </div>
        </div>
      </div>

      <div className={styles.wrapper1}>
        <div className={styles.wrapper1__item}>
          <h3 className={styles.subtitle1}>Deal Description</h3>
        </div>
        <div className={styles.box2}>
          <Input.TextArea style={{ width: '100%', height: '100%' }} placeholder="" />
        </div>
      </div>

      <hr size={1} className={styles.line} />
      <h3 className={styles.subtitle2}>Deal Goals</h3>

      <div className={styles.group}>
        <div className={styles.list}>
          <div className={styles.wrapper2}>
            <h5 className={styles.highlights2}>Ad Video Length</h5>
            <div className={styles.wrapper2__item}>
              <div className={styles.box3}>
                <Select size="large" style={{ width: '100%' }}>
                  {[].map((option) => (
                    <Select.Option key={option} value={option}>
                      {option}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>

          <div className={styles.wrapper4}>
            <h5 className={styles.highlights21}>Ad Video Display Time</h5>
            <div className={styles.wrapper4__item}>
              <div className={styles.box5}>
                <Select size="large" style={{ width: '100%' }}>
                  {[].map((option) => (
                    <Select.Option key={option} value={option}>
                      {option}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>

          <div className={styles.wrapper3}>
            <h5 className={styles.highlights22}>Script</h5>
            <div className={styles.wrapper3__item}>
              <div className={styles.box4}>
                <Select size="large" style={{ width: '100%' }}>
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
      </div>

      <div className={styles.box6}>
        <div className={styles.box6__item}>
          <div className={styles.info1}>Fixed Rate</div>
        </div>
        <div className={styles.box6__spacer} />
        <div className={styles.box6__item1}>
          <div className={styles.box7}>
            <div className={styles.info2}>CPM</div>
          </div>
        </div>
      </div>

      <div className={styles.wrapper5}>
        <div className={styles.wrapper6}>
          <h5 className={styles.highlights23}>Select Rate</h5>

          <div className={styles.list1}>
            <div className={styles.list1__item}>
              <div
                style={{ '--src': `url(${require('assets/aa49ce89f403c18ecc4ff2176f571253.png')})` }}
                className={styles.wrapper7}
              />
            </div>
          </div>
        </div>

        <div className={styles.box8}>
          <div className={styles.info}>$23</div>
        </div>
      </div>

      <div className={styles.group1}>
        <div className={styles.flexRow}>
          <div className={styles.wrapper8}>
            <h5 className={styles.highlights24}>View Cap</h5>
            <div className={styles.box9}>
              <Select size="large" style={{ width: '100%' }}>
                {[].map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>

          <div className={styles.flexRow__spacer} />

          <div className={styles.wrapper41}>
            <h5 className={styles.highlights25}>Date Cap</h5>
            <div className={styles.box51}>
              <Select size="large" style={{ width: '100%' }}>
                {['option 1', 'option 2', 'option 3'].map((option) => (
                  <Select.Option key={option} value={option}>
                    {option}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapper9}>
        <h5 className={styles.highlights26}>Brand Acknowledgement Description  </h5>
        <div className={styles.box10}>
          <Input.TextArea style={{ width: '100%', height: '100%' }} placeholder="" />
        </div>
      </div>
    </div>
  );
}

Reusable25.inStorybook = true;
