import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

function ReusableSelect() {
  return (
    <Select size="large" style={{ width: '100%' }}>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
    </Select>
  );
}

export default React.memo(ReusableSelect);
