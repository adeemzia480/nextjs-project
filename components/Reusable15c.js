import cn from 'classnames';

import styles from './Reusable15c.module.scss';

export default function Reusable15c(props) {
  return (
    <section className={cn(styles.section3, 'reusable15c')}>
      <div className={styles.box}>
        <div className={styles.flexCol}>
          <h1 className={styles.title}>Top Geographics</h1>

          <div className={styles.flexCol1}>
            <div className={styles.flexCol2}>
              <div className={styles.flexRow}>
                <div className={styles.flexRow__cell}>
                  <div className={styles.flexCol3}>
                    <div className={styles.flexRow1}>
                      <div className={styles.flexRow1__cell}>
                        <div className={styles.content_box}>
                          <div className={styles.rect1} />
                        </div>
                      </div>
                      <div className={styles.flexRow1__spacer} />
                      <div className={styles.flexRow1__cell1}>
                        <h3 className={styles.subtitle1}>United States</h3>
                      </div>
                    </div>

                    <div className={styles.info}>41.7%</div>
                  </div>
                </div>
                <div className={styles.flexRow__spacer} />
                <div className={styles.flexRow__cell1}>
                  <div className={styles.flexCol3}>
                    <div className={styles.flexRow1}>
                      <div className={styles.flexRow1__cell2}>
                        <div className={styles.content_box3}>
                          <div className={styles.rect2} />
                        </div>
                      </div>
                      <div className={styles.flexRow1__spacer1} />
                      <div className={styles.flexRow1__cell3}>
                        <h3 className={styles.subtitle11}>United States</h3>
                      </div>
                    </div>

                    <div className={styles.info1}>41.7%</div>
                  </div>
                </div>
              </div>

              <div className={styles.flexRow}>
                <div className={styles.flexRow__cell2}>
                  <div className={styles.flexCol3}>
                    <div className={styles.flexRow1}>
                      <div className={styles.flexRow1__cell4}>
                        <div className={styles.content_box1}>
                          <div className={styles.rect3} />
                        </div>
                      </div>
                      <div className={styles.flexRow1__spacer2} />
                      <div className={styles.flexRow1__cell5}>
                        <h3 className={styles.subtitle12}>United States</h3>
                      </div>
                    </div>

                    <div className={styles.info2}>41.7%</div>
                  </div>
                </div>
                <div className={styles.flexRow__spacer1} />
                <div className={styles.flexRow__cell3}>
                  <div className={styles.flexCol3}>
                    <div className={styles.flexRow1}>
                      <div className={styles.flexRow1__cell6}>
                        <div className={styles.content_box5}>
                          <div className={styles.rect4} />
                        </div>
                      </div>
                      <div className={styles.flexRow1__spacer3} />
                      <div className={styles.flexRow1__cell7}>
                        <h3 className={styles.subtitle13}>United States</h3>
                      </div>
                    </div>

                    <div className={styles.info3}>41.7%</div>
                  </div>
                </div>
              </div>

              <div className={styles.flexRow}>
                <div className={styles.flexRow__cell4}>
                  <div className={styles.flexCol3}>
                    <div className={styles.flexRow1}>
                      <div className={styles.flexRow1__cell8}>
                        <div className={styles.content_box2}>
                          <div className={styles.rect5} />
                        </div>
                      </div>
                      <div className={styles.flexRow1__spacer4} />
                      <div className={styles.flexRow1__cell9}>
                        <h3 className={styles.subtitle14}>United States</h3>
                      </div>
                    </div>

                    <div className={styles.info4}>41.7%</div>
                  </div>
                </div>
                <div className={styles.flexRow__spacer2} />
                <div className={styles.flexRow__cell5}>
                  <div className={styles.flexCol3}>
                    <div className={styles.flexRow1}>
                      <div className={styles.flexRow1__cell10}>
                        <div className={styles.content_box4}>
                          <div className={styles.rect6} />
                        </div>
                      </div>
                      <div className={styles.flexRow1__spacer5} />
                      <div className={styles.flexRow1__cell11}>
                        <h3 className={styles.subtitle15}>United States</h3>
                      </div>
                    </div>

                    <div className={styles.info5}>41.7%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.flexCol1__cell}>
              <button className={styles.btn} onClick={() => alert('It is clickable')}>
                <span className={styles.btn__text}>View More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Reusable15c.inStorybook = true;
