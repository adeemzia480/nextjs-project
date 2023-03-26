import { Popover } from 'antd';
import { useState } from 'react';

const content = (hide) => (
  <div>
    <div><a onClick={hide}>🇺🇸 English</a></div>
    <div><a onClick={hide}>🇵🇸 Arabic</a></div>
  </div>
);

export default function LanguageChange() {


  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={() => content(hide)}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <p>🇺🇸 English </p>
    </Popover>
  );
};

LanguageChange.inStorybook = true;
