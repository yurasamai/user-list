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
    <table className="rounded-sm text-left  border-separate border-tools-table-outline border-transparent w-full">
      <thead className="">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
          <th className="rounded-tl-sm bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Id</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Nombre</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Email</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Genero</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Estatus</th>
          <th className="rounded-tl-sm bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Acciones</th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group rounded-b-sm">
        {users.map(user => (
          <UserTableRow key={user.id} user={user} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;