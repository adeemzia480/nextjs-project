import cn from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './Resuable08a.module.scss';

export default function Resuable08a(props) {
  return (
    <div className={cn(styles.box5, 'resuable08a')}>
      <div className={styles.group}>
        <Image src={props.image1} alt="alt text" className={styles.image1} />
        <Image src={props.icon1} alt="alt text" className={styles.icon1} />
      </div>

      <div className={styles.flexCol}>
        <h2 className={styles.medium_title}>{props.medium_title}</h2>
        <div className={styles.flexCol__cell}>
          <div className={styles.box2}>
            <div className={styles.flexCol1}>
              <h5 className={styles.highlights2}>{props.highlights2}</h5>
              <div className={styles.text11}>Advertisement Type</div>
            </div>

            <div className={styles.flexCol2}>
              <h5 className={styles.highlights21}>{props.highlights21}</h5>
              <div className={styles.text12}>Fixed Rate</div>
            </div>

            <div className={styles.flexCol3}>
              <h5 className={styles.highlights22}>$8</h5>
              <div className={styles.text13}>CPM</div>
            </div>
          </div>
        </div>
      </div>

      <hr size={1} className={styles.line11} />

      <div className={styles.flexCol4}>
        <h5 className={styles.highlights11}>{props.highlights11}</h5>

        <div className={styles.flexCol5}>
          <div className={styles.rect2} />
          <div className={styles.flexCol5__cell}>
            <div className={styles.rect3} />
          </div>
          <div className={styles.flexCol5__cell}>
            <div className={styles.rect4} />
          </div>
        </div>

        <div className={styles.flexRow}>
          <div className={styles.flexRow1}>
            <div className={styles.flexRow1__cell}>
              <Image
                src={require('assets/615c12a53b6273dcbf7a151d578d4890.png')}
                alt="alt text"
                className={styles.icon}
              />
            </div>
            <div className={styles.flexRow1__cell1}>
              <div className={styles.info}>USA- 49%</div>
            </div>
          </div>

          <div className={styles.flexRow__spacer} />

          <div className={styles.flexRow2}>
            <div className={styles.flexRow2__cell}>
              <Image
                src={require('assets/a1849fc1f522f5265b382f8f11499d09.png')}
                alt="alt text"
                className={styles.icon2}
              />
            </div>
            <div className={styles.flexRow2__cell1}>
              <div className={styles.info1}>INDIA- 18%</div>
            </div>
          </div>

          <div className={styles.flexRow__spacer1} />

          <div className={styles.flexRow3}>
            <div className={styles.flexRow3__cell}>
              <Image
                src={require('assets/dc51f0c5a0b4fe17d6efec56cf6ab840.png')}
                alt="alt text"
                className={styles.icon3}
              />
            </div>
            <div className={styles.flexRow3__cell1}>
              <div className={styles.text21}>UK- 8%</div>
            </div>
          </div>
        </div>

        <hr size={1} className={styles.line1} />
      </div>

      <div className={styles.flexCol6}>
        <div className={styles.flexCol7}>
          <h5 className={styles.highlights12}>{props.highlights12}</h5>

          <div className={styles.flexRow4}>
            <div className={styles.flexCol7}>
              <h5 className={styles.highlights1}>{props.highlights1}</h5>
              <div className={styles.text}>{props.text}</div>
            </div>

            <div className={styles.flexCol7}>
              <h5 className={styles.highlights13}>{props.highlights13}</h5>
              <div className={styles.text1}>{props.text1}</div>
            </div>

            <div className={styles.flexCol7}>
              <h5 className={styles.highlights14}>{props.highlights14}</h5>
              <div className={styles.text2}>{props.text2}</div>
            </div>
          </div>
        </div>

        <div className={styles.flex_row}>
          <div className={styles.flex_row__cell}>
            <button className={styles.btn} onClick={() => alert('It is clickable')}>
              <span className={styles.btn__text}>Contact Now</span>
            </button>
          </div>
          <div className={styles.flex_row__spacer} />
          <div className={styles.flex_row__cell1}>
            <div className={styles.box4}>
              <div className={styles.box4__cell}>
                <h5 className={styles.highlights}>Like</h5>
              </div>
              <div className={styles.box4__spacer} />
              <div className={styles.box4__cell1}>
                <Image
                  src={require('assets/6c527d1bb5ccbd1052fd0de671845de4.png')}
                  alt="alt text"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Resuable08a.propTypes = {
  image1: PropTypes.string.isRequired,
  icon1: PropTypes.string.isRequired,
  medium_title: PropTypes.string.isRequired,
  highlights2: PropTypes.string.isRequired,
  highlights21: PropTypes.string.isRequired,
  highlights11: PropTypes.string.isRequired,
  highlights12: PropTypes.string.isRequired,
  highlights1: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  highlights13: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  highlights14: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
};

Resuable08a.inStorybook = true;
