import React, { useState } from 'react';
import CreateUserButton from '../../components/CreateUserBtn';
import UserTable from '../../components/UserListTable';
import HeaderComponent from '@/components/Header';
import CreateUserModal from '@/components/Modals/CreateUserModal';
import DeleteUserModal from '@/components/Modals/DeleteUserModal';

const UserListView: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [deleteName, setDeleteName] = useState('')
  const [deleteId, setDeleteId] = useState('')


  const handleDelete = (id: string, name: string) =>{
    setDeleteId(id)
    setDeleteName(name)
    setOpenDeleteModal(true)
    console.log('open delete')
  }

  return (
    <div className="h-full bg-[#ebedf4]">
      <HeaderComponent title={"Lista de usuarios"} showHomeButton={false} />
      <div className='w-full p-8'>
        <CreateUserButton onCreateUser={()=>{setOpenModal(!openModal)}}/>
        <UserTable onDelete={handleDelete} />
      </div>
      <CreateUserModal isOpen={openModal} onClose={()=>{setOpenModal(false)}}/>
      <DeleteUserModal 
        isOpen={openDeleteModal} 
        onClose={()=>{setOpenDeleteModal(false)}}
        userId={deleteId}  
        userName={deleteName}
      />
    </div>
    
  );
};

export default UserListView;