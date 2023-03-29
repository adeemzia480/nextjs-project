import cn from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './Reusable11.module.scss';

export default function Reusable11(props) {
  return (
    <div className={cn(styles.box, 'reusable11')}>
      <div className={styles.box__item}>
        <Image src={props.image1} alt="alt text" className={styles.image1} />
      </div>
      <h3 className={styles.ad__type}>{props.ad__type}</h3>

      <div className={styles.list}>
        <div className={styles.list__item}>
          <p className={styles.text}>Lorem sit</p>
        </div>
        <div className={styles.list__item}>
          <p className={styles.text}>Lorem sit</p>
        </div>
        <div className={styles.list__item}>
          <p className={styles.text}>Lorem sit</p>
        </div>
      </div>

      <h4 className={styles.description_box}>
        <span className={styles.description}>{props.description}</span>
      </h4>
      <h3 className={styles.looking__for}>{props.looking__for}</h3>

      <div className={styles.flexCol}>
        <div className={styles.flexRow}>
          <div className={styles.flexRow__item}>
            <Image src={require('assets/371acf7039d52b19d107a79d39ef04f5.png')} alt="alt text" className={styles.icon} />
          </div>
          <h4 className={styles.highlights2_box}>
            <span className={styles.highlights2}>{props.highlights2}</span>
          </h4>
        </div>

        <div className={styles.flexRow1}>
          <div className={styles.flexRow1__item}>
            <Image src={require('assets/371acf7039d52b19d107a79d39ef04f5.png')} alt="alt text" className={styles.icon1} />
          </div>
          <h4 className={styles.highlights21_box}>
            <span className={styles.highlights21}>{props.highlights21}</span>
          </h4>
        </div>

        <div className={styles.flexRow1}>
          <div className={styles.flexRow1__item1}>
            <Image src={require('assets/371acf7039d52b19d107a79d39ef04f5.png')} alt="alt text" className={styles.icon2} />
          </div>
          <h4 className={styles.highlights22_box}>
            <span className={styles.highlights22}>{props.highlights22}</span>
          </h4>
        </div>

        <div className={styles.flexRow1}>
          <div className={styles.flexRow1__item2}>
            <Image src={require('assets/371acf7039d52b19d107a79d39ef04f5.png')} alt="alt text" className={styles.icon3} />
          </div>
          <h4 className={styles.highlights23_box}>
            <span className={styles.highlights23}>{props.highlights23}</span>
          </h4>
        </div>
      </div>

      <div className={styles.flex_row1}>
        <div className={styles.flex_row1__item}>
          <button className={styles.btn} onClick={() => alert('It is clickable')}>
            <span className={styles.btn__text}>{props.btn__text}</span>
          </button>
        </div>
        <div className={styles.flex_row1__spacer} />

        <div className={styles.content_box}>
          <div
            style={{ '--src': `url(${require('assets/1a61e0e526884311e8d9ae7b1e3da316.png')})` }}
            className={styles.content_box1}
          />
          {props.like__filledShow && (
            <Image
              src={require('assets/d2b881c63d13aad7af880db47cdf6da4.png')}
              alt="alt text"
              className={styles.like__filled}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Reusable11.propTypes = {
  image1: PropTypes.string.isRequired,
  ad__type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  looking__for: PropTypes.string.isRequired,
  highlights2: PropTypes.string.isRequired,
  highlights21: PropTypes.string.isRequired,
  highlights22: PropTypes.string.isRequired,
  highlights23: PropTypes.string.isRequired,
  btn__text: PropTypes.string.isRequired,
  like__filledShow: PropTypes.bool
};

Reusable11.inStorybook = true;
