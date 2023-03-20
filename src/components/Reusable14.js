import React from 'react';
import cn from 'classnames';

import styles from './Reusable14.module.scss';

export default function Reusable14(props) {
  return (
    <div className={cn(styles.root, 'reusable14')}>
      <h1 className={styles.title}>Bio</h1>
      <h5 className={styles.highlights}>
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
        cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
        deserunt nisi. Aliqua Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
        deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
        voluptate aute id deserunt nisi. Aliqua{' '}
      </h5>
      <hr size={1} className={styles.line} />
    </div>
  );
}

Reusable14.inStorybook = true;
