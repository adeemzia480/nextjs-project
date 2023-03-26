import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';
import './ChatBar.scss';

function ChatSearchBar() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchClick = () => {
    setShowSearchInput(true);
  };

  const handleSearchCancel = () => {
    setShowSearchInput(false);
  };

  return (
    <div className="chat-bar">
      <Button icon={<SearchOutlined />} onClick={handleSearchClick} />
      {showSearchInput && (
        <Input
          autoFocus
          onBlur={handleSearchCancel}
          onPressEnter={handleSearchCancel}
        />
      )}
    </div>
  );
}

export default ChatSearchBar;