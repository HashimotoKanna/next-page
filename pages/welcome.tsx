import React, { useState } from 'react';
import Button from '../components/Button';
import Table from '../components/Table';

export default function Home() {
  const [message, setMessage] = useState('😊');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  return (
    <div>
      <div>{message}</div>
      <Button text="Click Me" onClick={handleClick} />
      <Table/>
    </div>
  );
}
