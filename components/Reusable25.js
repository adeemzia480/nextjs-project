import { Input, Radio, Select, Slider } from 'antd';
import cn from 'classnames';

import styles from './Reusable25.module.scss';

export default function Reusable25() {
  return (
    <div className={cn(styles.box, 'reusable25')}>
      <div className={styles.box__item}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__item}>
            <h3 className={styles.subtitle}>Deal Title</h3>
          </div>
          <div className={styles.box1}>
            <Input size={'large'} style={{ width: '100%', height: '100%' }} placeholder="" />
          </div>
        </div>
      </div>

      <div className={styles.wrapper1}>
        <div className={styles.wrapper1__item}>
          <h3 className={styles.subtitle1}>Deal Description</h3>
        </div>
        <div className={styles.box2}>
          <Input.TextArea size={'large'} style={{ width: '100%', height: '100%' }} placeholder="" />
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
                <Select size={'large'} placeholder="10%" style={{ width: '100%' }} options={[]} />

              </div>
            </div>
          </div>

          <div className={styles.wrapper4}>
            <h5 className={styles.highlights21}>Ad Video Display Time</h5>
            <div className={styles.wrapper4__item}>
              <div className={styles.box5}>
                <Select size={'large'} placeholder="10%" style={{ width: '100%' }} options={[]} />
              </div>
            </div>
          </div>

          <div className={styles.wrapper3}>
            <h5 className={styles.highlights22}>Script</h5>
            <div className={styles.wrapper3__item}>
              <div className={styles.box4}>
                <Select size={'large'} placeholder="10%" style={{ width: '100%' }} options={[]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.box6}>
        <Radio.Group >
          <Radio.Button defaultChecked value="large">Fixed Rate</Radio.Button>
          <Radio.Button value="default">CPM</Radio.Button>
        </Radio.Group>
      </div>

      <div className={styles.wrapper5}>
        <div className={styles.wrapper6}>
          <h5 className={styles.highlights23}>Select Rate</h5>

          <div className={styles.list1}>
            <div className={styles.list1__item}>
              <Slider range defaultValue={50} disabled={false} />
            </div>
          </div>
        </div>

        <div className={styles.box8}>
          <Input size={'large'} type="text" className={styles.input} placeholder="$23" />
        </div>
      </div>

      <div className={styles.group1}>
        <div className={styles.flexRow}>
          <div className={styles.wrapper8}>
            <h5 className={styles.highlights24}>View Cap</h5>
            <div className={styles.box9}>
              <Select size={'large'} placeholder="10%" style={{ width: '100%' }} options={[]} />


            </div>
          </div>

          <div className={styles.flexRow__spacer} />

          <div className={styles.wrapper41}>
            <h5 className={styles.highlights25}>Date Cap</h5>
            <div className={styles.box51}>
              <Select size={'large'} placeholder="10%" style={{ width: '100%' }} options={[]} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapper9}>
        <h5 className={styles.highlights26}>Brand Acknowledgement Description</h5>
        <div className={styles.box10}>
          <Input.TextArea size={'large'} style={{ width: '100%', height: '100%' }} placeholder="" />
        </div>
      </div>
    </div>
  );
}

Reusable25.inStorybook = true;
