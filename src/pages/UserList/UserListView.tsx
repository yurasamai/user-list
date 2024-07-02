import React from 'react';
import CreateUserButton from '../../components/CreateUserBtn';
import UserTable from '../../components/UserListTable';


const UserListView: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <CreateUserButton />
      <UserTable />
    </div>
  );
};

export default UserListView;