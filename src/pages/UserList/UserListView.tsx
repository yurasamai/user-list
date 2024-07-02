import React from 'react';
import CreateUserButton from '../../components/CreateUserBtn';
import UserTable from '../../components/UserListTable';
import HeaderComponent from '@/components/Header';

const UserListView: React.FC = () => {
  return (
    <div className="h-screen bg-[#ebedf4]">
      <HeaderComponent title={"Lista de usuarios"} showHomeButton={false} />
      <div className='w-full p-8'>
        <CreateUserButton />
        <UserTable />
      </div>

    </div>
  );
};

export default UserListView;