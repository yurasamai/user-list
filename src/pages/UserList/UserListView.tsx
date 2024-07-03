import React, { useState } from 'react';
import CreateUserButton from '../../components/CreateUserBtn';
import UserTable from '../../components/UserListTable';
import HeaderComponent from '@/components/Header';
import CreateUserModal from '@/components/Modals/CreateUserModal';

const UserListView: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="h-screen bg-[#ebedf4]">
      <HeaderComponent title={"Lista de usuarios"} showHomeButton={false} />
      <div className='w-full p-8'>
        <CreateUserButton onCreateUser={()=>{setOpenModal(!openModal)}}/>
        <UserTable />
        <CreateUserModal isOpen={openModal} onClose={()=>{setOpenModal(false)}}/>
      </div>

    </div>
  );
};

export default UserListView;