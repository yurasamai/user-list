import React, { useEffect, useState } from 'react';
import { Gender, Status } from '@/types/users/UserTypes';
import { UseCreateUser } from './utils';
import { useAppDispatch } from '@/redux/store';
import ClearIcon from '@mui/icons-material/Clear';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateUserModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Modal styles
  const backdropStyle = isOpen ? "fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50" : "hidden";
  const modalStyle = isOpen ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-8 px-10 z-50" : "hidden";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<Gender | ''>('');
  const [status, setStatus] = useState<Status | ''>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useAppDispatch();

  const handleSave = () => {
    const errors: { [key: string]: string } = {};

    if (!name.trim()) {
      errors.name = 'Nombre es requerido';
    }
    if (!email.trim()) {
      errors.email = 'Email es requerido';
    } else if (!validateEmail(email)) {
      errors.email = 'Email no válido';
    }
    if (!gender) {
      errors.gender = 'Género es requerido';
    }
    if (!status) {
      errors.status = 'Estatus es requerido';
    }
    if (Object.keys(errors).length === 0) {
      // Perform saving user
      console.log('Guardando datos:', { name, email, gender });
      const userObj={
        name,
        email,
        gender,
        status
      }
      UseCreateUser(dispatch, userObj)
      onClose();
    } else {
      setErrors(errors);
    }
  };

  // Email validation
  const validateEmail = (email: string) => {
    
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(()=>{
    setName('')
    setEmail('')
    setGender('')
  },[isOpen])

  return (
    <>
      <div className={backdropStyle}></div>
      <div className={modalStyle}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary-dark">Crear nuevo usuario</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700  translate-x-6 translate-y-[-1rem] p-0 pt-0 pb-1 pl-1.2em">
          <ClearIcon />
          </button>
        </div>
        <div>
        <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 block w-full px-3 py-2 border  ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none text-primary-dark bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none text-primary-dark bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Género
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as Gender)}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.gender ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none text-primary-dark bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                >
                  <option value="">Selecciona...</option>
                  <option value={Gender.Male}>Masculino</option>
                  <option value={Gender.Female}>Femenino</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
              </div>
              <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Estatus
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as Status)}
              className={`mt-1 block w-full px-3 py-2 border ${errors.status ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none  text-primary-dark bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            >
              <option value="">Selecciona...</option>
              <option value={Status.Active}>Active</option>
              <option value={Status.Inactive}>Inactive</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
          </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Guardar
                </button>
              </div>
            </form>

        </div>
      </div>
    </>
  );
};

export default CreateUserModal;