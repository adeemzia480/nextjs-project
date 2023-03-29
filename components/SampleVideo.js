import cn from 'classnames';

import styles from './SampleVideo.module.scss';

export default function SampleVideo(props) {
  return (
    <div className={cn(styles.group, 'sample-video')}>
      <div className={styles.box2}>
        <video
          controls
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          poster="https://storage.googleapis.com/pxcode-pro/640c572b33607a0009484a0c/assets/756ac37fec2c3bcb5561a8c30977b367.png"
        />
      </div>
    </div>
  );
}

SampleVideo.inStorybook = true;
