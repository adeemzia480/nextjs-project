import cn from 'classnames';
import React from 'react';

import styles from './ReusableHtmlVideo.module.scss';

export default function ReusableHtmlVideo(props) {
  return (
    <div className={cn(styles.group, 'reusable-html-video')}>
      <div className={styles.box}>
        <iframe
          frameBorder="0"
          style={{ width: '100%', height: 'auto', aspectRatio: '16 / 9' }}
          src="https://www.youtube.com/embed/Pox-hluW-3QWcncRdDCA?controls=1&autoplay=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

ReusableHtmlVideo.inStorybook = true;
