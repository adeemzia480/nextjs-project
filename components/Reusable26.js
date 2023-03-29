import { Input, Select } from 'antd';

import cn from 'classnames';

import { Slider } from 'antd';
import styles from './Reusable26.module.scss';

export default function Reusable26(props) {
  return (
    <div className={cn(styles.root, 'reusable26')}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__item}>
          <div className={styles.wrapper1}>
            <div className={styles.wrapper1__item}>
              <div className={styles.wrapper2}>
                <div className={styles.wrapper2__item}>
                  <h3 className={styles.subtitle}>Deal Title</h3>
                </div>
                <div className={styles.rect1}>
                  <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>
            <div className={styles.wrapper1__item}>
              <div className={styles.wrapper3}>
                <div className={styles.wrapper3__item}>
                  <h3 className={styles.subtitle}>Deal Description</h3>
                </div>
                <div className={styles.rect2}>
                  <Input.TextArea style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>
            <div className={styles.wrapper1__item}>
              <div className={styles.wrapper4}>
                <div className={styles.box}>
                  <h5 className={styles.highlights}>Send Offer</h5>
                </div>

                <div className={styles.wrapper4__spacer} />

                <div className={styles.box1}>
                  <h5 className={styles.highlights1}>Cancel</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper__spacer} />
        <div className={styles.wrapper__item1}>
          <div className={styles.box2}>
            <div className={styles.wrapper5}>
              <div className={styles.wrapper6}>
                <h3 className={styles.subtitle1}>Deal Goals</h3>

                <div className={styles.wrapper7}>
                  <div className={styles.wrapper7__item}>
                    <div className={styles.wrapper8}>
                      <h5 className={styles.highlights2}>Ad Video Length</h5>
                      <div className={styles.box3}>
                        <Select style={{ width: '100%' }}>
                          {['30 seconds', '50 seconds'].map((option) => (
                            <Select.Option key={option} value={option}>
                              {option}
                            </Select.Option>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapper7__spacer} />
                  <div className={styles.wrapper7__item1}>
                    <div className={styles.wrapper9}>
                      <h5 className={styles.highlights2}>Ad Video Display Time</h5>
                      <div className={styles.box4}>
                        <Select style={{ width: '100%' }}>
                          {[].map((option) => (
                            <Select.Option key={option} value={option}>
                              {option}
                            </Select.Option>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapper7__spacer} />
                  <div className={styles.wrapper7__item2}>
                    <div className={styles.wrapper10}>
                      <h5 className={styles.highlights21}>Script</h5>
                      <div className={styles.box5}>
                        <Select style={{ width: '100%' }}>
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

              <hr size={1} className={styles.line} />

              <div className={styles.wrapper11}>
                <div className={styles.box6}>
                  <div className={styles.box6__item}>
                    <div className={styles.box7}>
                      <div className={styles.info1}>Fixed Rate</div>
                    </div>
                  </div>
                  <div className={styles.box6__spacer} />
                  <div className={styles.box6__item1}>
                    <div className={styles.info}>CPM</div>
                  </div>
                </div>

                <div className={styles.wrapper12}>
                  <h5 className={styles.highlights2}>Select Rate</h5>
                  <div className={styles.wrapper12__item}>
                    <Slider range defaultValue={[20, 50]} disabled={false} />

                    {/* <div
                      style={{ '--src': `url(${require('assets/d6ed3706e39eb2bdbd6a695281a03d19.png')})` }}
                      className={styles.wrapper13}
                    /> */}
                  </div>

                  <div className={styles.box8}>
                    <div className={styles.info2_box}>
                      <input className={styles.info2} type={'text'} placeholder={`$23`} />
                    </div>
                  </div>
                </div>
              </div>

              <hr size={1} className={styles.line1} />

              <div className={styles.wrapper14}>
                <h5 className={styles.highlights2}>Brand Acknowledgement Description  </h5>
                <div className={styles.box9}>
                  <Input.TextArea style={{ width: '100%', height: '100%' }} placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable26.inStorybook = true;
