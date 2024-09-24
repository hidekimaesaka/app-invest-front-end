import React, { useState } from 'react';
import Input from '../input/Input';
import './SignInForm.css';

const SignInForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(username);
    console.log(password);

  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      /><Input
      type="text"
      placeholder="mail"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      /><Input
      type="password"
      placeholder="repeat password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignInForm;
