import { Input, Select, Slider } from 'antd';
import 'antd/dist/antd.css';
import cn from 'classnames';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import Image from 'next/image';
import React from 'react';
import Headroom from 'react-headroom';

import styles from './AdMenuPage.module.scss';

export default function AdMenuPage(props) {
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

      <div className={cn(styles.root, 'ad-menu-page')}>
        <div className={styles.root__item}>
          <Image src={require('assets/81f81c1747d6644364f2715105c6c45a.png')} alt="alt text" className={styles.image} />
        </div>

        <section className={styles.wrapper}>
          <div className={styles.wrapper__item}>
            <px-grid
              track-style="flex-grow: 1;"
              x="0px 834fr 0px"
              y="2px 789fr 1px"
              xxs-x="0px minmax(0px,480px) 0px"
              xxs-y="2px 789fr 1px">
              <div className={styles.wrapper1}>
                <div className={styles.wrapper2}>
                  <div className={styles.wrapper2__item}>
                    <div className={styles.wrapper3}>
                      <div className={styles.wrapper3__item}>
                        <Image
                          src={require('assets/b5de42b2d42cffe31b4bdee49a3bacc6.png')}
                          alt="alt text"
                          className={styles.icon}
                        />
                      </div>
                      <div className={styles.wrapper3__spacer} />
                      <h1 className={styles.title}>Robert Smith</h1>
                    </div>
                  </div>
                  <div className={styles.wrapper2__spacer} />
                  <div className={styles.wrapper2__item1}>
                    <div className={styles.box}>
                      <div className={styles.box__item}>
                        <h5 className={styles.highlights}>Post Deal</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <hr size={1} className={styles.line} />

                <div className={styles.wrapper4}>
                  <div className={styles.wrapper5}>
                    <div className={styles.wrapper5__item}>
                      <h2 className={styles.medium_title}>Deal Title</h2>
                    </div>
                    <div className={styles.wrapper5__item1}>
                      <div className={styles.rect}>
                        <Input style={{ width: '100%', height: '100%' }} placeholder="" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.wrapper6}>
                    <div className={styles.wrapper6__item}>
                      <h2 className={styles.medium_title1}>What are you looking for</h2>
                    </div>
                    <div className={styles.wrapper6__item1}>
                      <div className={styles.rect1}>
                        <Input.TextArea style={{ width: '100%', height: '100%' }} placeholder="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </px-grid>
          </div>
          <div className={styles.wrapper__spacer} />
          <div className={styles.wrapper__item1}>
            <div className={styles.wrapper7}>
              <div className={styles.wrapper8}>
                <div className={styles.wrapper8__item}>
                  <h2 className={styles.medium_title}>Campaign Goals</h2>
                </div>
                <div className={styles.wrapper8__item1}>
                  <div className={styles.wrapper9}>
                    <div className={styles.wrapper9__item}>
                      <div className={styles.wrapper10}>
                        <h5 className={styles.highlights1}>Ad Video Length</h5>
                        <div className={styles.box1}>
                          <Select placeholder="30 Seconds" style={{ width: '100%' }}>
                            {[].map((option) => (
                              <Select.Option key={option} value={option}>
                                {option}
                              </Select.Option>
                            ))}
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className={styles.wrapper9__spacer} />
                    <div className={styles.wrapper9__item}>
                      <div className={styles.wrapper10}>
                        <h5 className={styles.highlights1}>Ad Video Display Time</h5>
                        <div className={styles.box1}>
                          <Select placeholder="30 Seconds" style={{ width: '100%' }}>
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
                <div className={styles.wrapper8__item1}>
                  <div className={styles.wrapper11}>
                    <div className={styles.wrapper11__item}>
                      <div className={styles.wrapper12}>
                        <div className={styles.wrapper121}>
                          <h5 className={styles.highlights11}>Minimum Geography #1</h5>

                          <div className={styles.wrapper13}>
                            <div className={styles.wrapper13__item}>
                              <div className={styles.box2}>
                                <Select placeholder="United States" style={{ width: '100%' }}>
                                  {[].map((option) => (
                                    <Select.Option key={option} value={option}>
                                      {option}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </div>
                            </div>
                            <div className={styles.wrapper13__spacer} />
                            <div className={styles.wrapper13__item1}>
                              <div className={styles.box3}>
                                <Select placeholder="10%" style={{ width: '100%' }}>
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
                    </div>
                    <div className={styles.wrapper11__spacer} />
                    <div className={styles.wrapper11__item}>
                      <div className={styles.wrapper10}>
                        <h5 className={styles.highlights1}>Views Range</h5>
                        <div className={styles.box1}>
                          <Select placeholder="100 - 250K" style={{ width: '100%' }}>
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
                <div className={styles.wrapper8__item1}>
                  <div className={styles.wrapper14}>
                    <div className={styles.wrapper14__item}>
                      <div className={styles.wrapper121}>
                        <h5 className={styles.highlights12}>Average Age</h5>

                        <div className={styles.wrapper13}>
                          <div className={styles.wrapper13__item2}>
                            <div className={styles.box2}>
                              <Select placeholder="18 - 22 Years" style={{ width: '100%' }}>
                                {[].map((option) => (
                                  <Select.Option key={option} value={option}>
                                    {option}
                                  </Select.Option>
                                ))}
                              </Select>
                            </div>
                          </div>
                          <div className={styles.wrapper13__spacer1} />
                          <div className={styles.wrapper13__item3}>
                            <div className={styles.box3}>
                              <Select placeholder="10%" style={{ width: '100%' }}>
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
                    <div className={styles.wrapper14__spacer} />
                    <div className={styles.wrapper14__item}>
                      <div className={styles.wrapper121}>
                        <h5 className={styles.highlights12}>Average Gender</h5>

                        <div className={styles.wrapper13}>
                          <div className={styles.wrapper13__item4}>
                            <div className={styles.box2}>
                              <Select placeholder="Male" style={{ width: '100%' }}>
                                {[].map((option) => (
                                  <Select.Option key={option} value={option}>
                                    {option}
                                  </Select.Option>
                                ))}
                              </Select>
                            </div>
                          </div>
                          <div className={styles.wrapper13__spacer2} />
                          <div className={styles.wrapper13__item5}>
                            <div className={styles.box3}>
                              <Select placeholder="10%" style={{ width: '100%' }}>
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
                  </div>
                </div>
              </div>

              <hr size={1} className={styles.line1} />

              <div className={styles.wrapper15}>
                <div className={styles.wrapper16}>
                  <div className={styles.wrapper16__item}>
                    <div className={styles.wrapper17}>
                      <div className={styles.wrapper18}>
                        <h5 className={styles.highlights12}>Estimated Fixed Rate</h5>
                        <div className={styles.wrapper18__item}>
                          <div className={styles.wrapper19}>
                            <Slider marks={{
                              0: '$0',
                              10: '$10',
                              20: '$20',
                              30: '$30+',
                            }}
                              max={30} min={0}
                              defaultValue={30} disabled={false}
                              tooltip={{ open: true }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={styles.wrapper20}>
                        <div className={styles.wrapper20__item}>
                          <div className={styles.box4}>
                            <Input style={{ width: '100%', height: '100%' }} placeholder="$100" />
                          </div>
                        </div>
                        <div className={styles.wrapper20__spacer} />
                        <div className={styles.wrapper20__item1}>
                          <h5 className={styles.highlights2}>to</h5>
                        </div>
                        <div className={styles.wrapper20__spacer} />
                        <div className={styles.wrapper20__item}>
                          <div className={styles.box4}>
                            <Input style={{ width: '100%', height: '100%' }} placeholder="$7500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapper16__spacer} />
                  <div className={styles.wrapper16__item1}>
                    <div className={styles.wrapper21}>
                      <div className={styles.wrapper21__item}>
                        <div className={styles.wrapper22}>
                          <h5 className={styles.highlights1}>Estimated CPM</h5>
                          <div className={styles.wrapper22__item}>
                            <div className={styles.wrapper23} >
                              <Slider marks={{
                                0: '$0',
                                10: '$10',
                                20: '$20',
                                30: '$30+',
                              }}
                                max={30} min={0}
                                defaultValue={30} disabled={false}
                                tooltip={{ open: true }}
                              />
                            </div>

                            {/* <div
                              style={{ '--src': `url(${require('assets/1f62c442faba0d326c785f538b897c0c.png')})` }}
                              className={styles.wrapper23}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className={styles.wrapper21__item1}>
                        <div className={styles.wrapper201}>
                          <div className={styles.wrapper201__item}>
                            <div className={styles.box4}>
                              <Input style={{ width: '100%', height: '100%' }} placeholder="$1" />
                            </div>
                          </div>
                          <div className={styles.wrapper201__spacer} />
                          <div className={styles.wrapper201__item1}>
                            <h5 className={styles.highlights2}>to</h5>
                          </div>
                          <div className={styles.wrapper201__spacer} />
                          <div className={styles.wrapper201__item}>
                            <div className={styles.box4}>
                              <Input style={{ width: '100%', height: '100%' }} placeholder="$30" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.wrapper24}>
                  <div className={styles.wrapper24__item}>
                    <div className={styles.wrapper25}>
                      <div className={styles.wrapper26}>
                        <h5 className={styles.highlights13}>View Cap</h5>
                        <div className={styles.wrapper26__spacer} />
                        <h5 className={styles.highlights14}>Script</h5>
                      </div>

                      <div className={styles.wrapper131}>
                        <div className={styles.wrapper131__item}>
                          <div className={styles.box2}>
                            <Select defaultValue="100,000" style={{ width: '100%' }}>
                              {[].map((option) => (
                                <Select.Option key={option} value={option}>
                                  {option}
                                </Select.Option>
                              ))}
                            </Select>
                          </div>
                        </div>
                        <div className={styles.wrapper131__spacer} />
                        <div className={styles.wrapper131__item1}>
                          <div className={styles.box3}>
                            <Select defaultValue="Yes" style={{ width: '100%' }}>
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
                  <div className={styles.wrapper24__spacer} />
                  <div className={styles.wrapper24__item}>
                    <div className={styles.wrapper10}>
                      <h5 className={styles.highlights1}>Date Cap</h5>
                      <div className={styles.box1}>
                        <Select defaultValue="1 Week After upload" style={{ width: '100%' }}>
                          {['1 Week After upload', '2 Week After upload'].map((option) => (
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

              <hr size={1} className={styles.line2} />

              <div className={styles.wrapper27}>
                <h5 className={styles.highlights1}>Target Audience Subject</h5>
                <div className={styles.select}>
                  <Select defaultValue="Media" mode="multiple" style={{ width: '100%' }}>
                    {['Media', 'Media2'].map((option) => (
                      <Select.Option key={option} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

AdMenuPage.inStorybook = true;
