import React from 'react';
import cn from 'classnames';
import Select from 'antd/es/select';
import 'antd/dist/antd.css';

import styles from './LanguageChange.module.scss';

export default function LanguageChange(props) {
  return (
    <div className={cn(styles.group, 'language-change')}>
      <div className={styles.select}>
        <Select defaultValue="🇺🇸 English" bordered={false} style={{ width: '100%' }}>
          {['🇺🇸 English', '🇨🇳 Chineese', '🇦🇪 Palestine'].map((option) => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
}

LanguageChange.inStorybook = true;
