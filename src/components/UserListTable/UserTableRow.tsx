import React  from 'react';
import { User } from '@/types/users/UserTypes'; 
import './styles.scss';


interface UserTableRowProps {
    user: User;
  }
  
  const UserTableRow: React.FC<UserTableRowProps> = ({ user }) => {

    const handleUserDetail = ()=>{
        console.log("ver detalle de usuario: ", user.id)
    }

    const handleEdit = ()=>{
        console.log("editar usuario: ", user.id)
    }

    const handleDelete = ()=>{
        console.log("eliminar usuario: ", user.id)
    }


    return (
      <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-primary-text">{user.id}</td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-primary-text">{user.name}</td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-primary-text">{user.email}</td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-primary-text">{user.gender}</td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-primary-text">{user.status}</td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <a href="#" className="text-blue-500 hover:text-blue-700" onClick={handleUserDetail}>Ver</a> | 
        <a href="#" className="text-blue-500 hover:text-blue-700"onClick={handleEdit}>Editar</a> | 
        <a href="#" className="text-blue-500 hover:text-blue-700"onClick={handleDelete}>Eliminar</a>
      </td>
    </tr>
    );
  };

  export default UserTableRow;
  