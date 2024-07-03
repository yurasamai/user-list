import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/redux/store';
import { UseGetUserById } from './utils';
import { User } from '@/types/users/UserTypes';
import './styles.scss'
interface UserDetailsTableProps {
    userId: string;
}

const UserDetailsTable: React.FC<UserDetailsTableProps> = ({ userId }) => {
    const [user, setUser] = useState<User>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await UseGetUserById(dispatch, userId);
            console.log(response?.payload)
            
            setUser(response?.payload)
        }
        fetchUser();

    }, [dispatch, userId]);


    return (
        <div className="flex justify-center mt-8">
            {user &&
                <div className="custom-box w-full overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="block md:table-row bg-light-sky-blue">
                      <td className="px-6 py-4 md:whitespace-nowrap font-medium  text-primary-dark">Nombre:</td>
                      <td className="px-6 py-4 md:whitespace-nowrap text-gray-700">{user.name}</td>
                    </tr>
                    <tr className="block md:table-row">
                      <td className="px-6 py-4 md:whitespace-nowrap font-medium text-gray-900">Email:</td>
                      <td className="px-6 py-4 md:whitespace-nowrap text-gray-700">{user.email}</td>
                    </tr>
                    <tr className="block md:table-row bg-light-sky-blue">
                      <td className="px-6 py-4 md:whitespace-nowrap font-medium text-gray-900">Género:</td>
                      <td className="px-6 py-4 md:whitespace-nowrap text-gray-700">{user.gender}</td>
                    </tr>
                    <tr className="block md:table-row">
                      <td className="px-6 py-4 md:whitespace-nowrap font-medium text-gray-900">Estatus:</td>
                      <td className="px-6 py-4 md:whitespace-nowrap text-gray-700">{user.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

        </div>
    );
};

export default UserDetailsTable;