import React from 'react';
import './styles.scss';

interface ButtonProps {
  onCreateUser: () => void;
}

const CreateUserButton: React.FC<ButtonProps> = ({ onCreateUser }) => {
  return <button className="btn" onClick={onCreateUser}>Nuevo Usuario</button>;
};

export default CreateUserButton;