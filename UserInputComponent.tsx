import React, { useState } from 'react';

interface UserInputComponentProps {
  onSearch: (username: string) => void;
}

const UserInputComponent: React.FC<UserInputComponentProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleInputChange} placeholder="Enter username" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserInputComponent;
