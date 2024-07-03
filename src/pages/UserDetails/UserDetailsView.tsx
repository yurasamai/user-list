import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from '@/components/Header';
import UserDetailsTable from '@/components/UserDetailsTable';

const UserDetailsView: React.FC = () => {

  const { userId } = useParams();

  useEffect(()=>{console.log(userId)},[userId])
  return (
    <div className="h-screen bg-[#ebedf4]">
      <HeaderComponent title={`Detalle de usuario: ${userId}`} showHomeButton={true} />
      <div className='max-w-[1000px] w-full md:w-[90vw] mx-auto p-8'>
        {userId && <UserDetailsTable userId={userId}/> }
      </div>
    </div>
  );
};

export default UserDetailsView;