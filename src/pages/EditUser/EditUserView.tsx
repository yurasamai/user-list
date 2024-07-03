import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from '@/components/Header';
import EditUserForm from '@/components/EditUserForm';

const EditUserView: React.FC = () => {

    const { userId } = useParams();

    return (
        <div className="h-screen bg-[#ebedf4]">
            <HeaderComponent title={`Editar usuario: ${userId}`} showHomeButton={true} />
            <div className='w-full p-8'>
                {userId && <EditUserForm userId={userId} />}
            </div>

        </div>
    );
};

export default EditUserView;