import React from 'react';
import { User } from '@/types/users/UserTypes';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
interface UserTableRowProps {
  user: User;
  onDelete: (id: string, name:string) => void;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user, onDelete }) => {

  const navigate = useNavigate();

  const handleUserDetail = () => {
    navigate(`/usuario/${user.id}`);
  };
  const handleEdit = () => {
    navigate(`/editar/${user.id}`);
  }

  const handleDelete = () => {
    if(user.id)
    onDelete(user.id, user.name)
  }


  return (
    <tr className="bg-white border border-grey-500 border-none  table-row">
      <td className="p-2 border border-grey-500 text-left table-cell text-primary-dark">{user.id}</td>
      <td className="p-2 border border-grey-500 text-left table-cell text-primary-dark">{user.name}</td>
      <td className="p-2 border border-grey-500 text-left table-cell text-primary-dark">{user.email}</td>
      <td className="p-2 border border-grey-500 text-left table-cell text-primary-dark">{user.gender}</td>
      <td className={`p-2 border border-grey-500 text-left table-cell font-bold ${user.status === 'active' ? 'text-success' : 'text-error'}`}>
      {user.status} 
      </td>
      <td className="p-2 border  border-grey-500 text-left table-cell">
        <div className="flex justify-between items-center cursor-pointer ">
          <div className='relative group'>
            <a href="#" className="text-light-blue hover:text-primary-blue" onClick={handleUserDetail}>
              <VisibilityOutlinedIcon />
            </a>
            <span className="absolute left-0 bottom-full ml-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Ver
            </span>
          </div>

          <div className='relative group'>
            <a href="#" className="text-light-blue hover:text-primary-blue" onClick={handleEdit}>
              <EditOutlinedIcon />
            </a>
            <span className="absolute left-0 bottom-full px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Editar
            </span>
          </div>

          <div className='relative group'>
            <a href="#" className="text-light-blue hover:text-primary-blue" onClick={handleDelete}>
              <DeleteOutlineOutlinedIcon />
            </a>
            <span className="absolute right-0 bottom-full  px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              Borrar
            </span>
          </div>

        </div>

      </td>
    </tr>
  );
};

export default UserTableRow;
