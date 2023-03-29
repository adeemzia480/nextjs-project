import cn from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './Reusable28.module.scss';

export default function Reusable28(props) {
  return (
    <div className={cn(styles.box, 'reusable28')}>
      <div className={styles.wrapper3}>
        <div className={styles.wrapper3__item}>
          <Image src={props.image} alt="alt text" className={styles.image} />
        </div>

        <div className={styles.wrapper4}>
          <h2 className={styles.medium_title}>{props.medium_title}</h2>
          <div className={styles.wrapper4__item}>
            <h5 className={styles.highlights}>{props.highlights}</h5>
          </div>
        </div>

        <h5 className={styles.highlights1}>{props.highlights1}</h5>

        <div className={styles.wrapper5}>
          <div className={styles.wrapper6}>
            <h5 className={styles.highlights2}>{props.highlights2}</h5>
            <div className={styles.text}>{props.text}</div>
          </div>

          <div className={styles.wrapper7}>
            <h5 className={styles.highlights21}>{props.highlights21}</h5>
            <p className={styles.paragraph}>{props.paragraph}</p>
          </div>

          <div className={styles.wrapper71}>
            <h5 className={styles.highlights22}>{props.highlights22}</h5>
            <p className={styles.paragraph1}>{props.paragraph1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Reusable28.propTypes = {
  image: PropTypes.string.isRequired,
  medium_title: PropTypes.string.isRequired,
  highlights: PropTypes.string.isRequired,
  highlights1: PropTypes.string.isRequired,
  highlights2: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  highlights21: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  highlights22: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired
};

Reusable28.inStorybook = true;
