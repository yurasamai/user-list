import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { UseFetchUsers } from './utils';
import UserTableRow from '../UserTableRow';
import './styles.scss';
interface UserTableProps {
  onDelete: (id: string, name:string) => void;
}

const UserTable: React.FC<UserTableProps> = ({  onDelete }) => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.user.users);
  
    useEffect(() => {
      UseFetchUsers(dispatch);
    }, [dispatch]);
    

  return (
    <div className="custom-box w-full overflow-x-auto">
      <table className="rounded-sm text-left  border-separate border-tools-table-outline border-transparent w-full">
      <thead className="">
        <tr className="border border-grey-500 border-none table-row  top-auto left-auto relative">
          <th className=" bg-gray-200 p-2 text-gray-600 font-bold border border-grey-500 text-left table-cell">Id</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold border border-grey-500 text-left table-cell">Nombre</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold border border-grey-500 text-left table-cell">Email</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold border border-grey-500 text-left table-cell">Genero</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold border border-grey-500 text-left table-cell">Estatus</th>
          <th className=" bg-gray-200 p-2 text-gray-600 font-bold border border-grey-500 text-left table-cell">Acciones</th>
        </tr>
      </thead>
      <tbody className=" table-row-group rounded-b-sm">
        {users.map(user => (
          <UserTableRow key={user.id} user={user} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default UserTable;