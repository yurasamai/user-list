import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { useFetchUsers } from './utils';
import UserTableRow from './UserTableRow';
import './styles.scss';


const UserTable: React.FC = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.user.users);
  
    useEffect(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useFetchUsers(dispatch);
    }, [dispatch]);
    

  return (
    <table className="min-w-full rounded-lg block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Id</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Nombre</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Email</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Genero</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Estatus</th>
          <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Acciones</th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {users.map(user => (
          <UserTableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;