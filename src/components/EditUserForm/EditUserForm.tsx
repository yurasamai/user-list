import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gender, Status } from '@/types/users/UserTypes';
import { useAppDispatch } from '@/redux/store';
import { UseEditUser, UseGetUserById } from './utils';

interface EditFormProps {
    userId: string
}

const EditUserForm: React.FC<EditFormProps> = ({ userId }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState<Gender | ''>('');
    const [status, setStatus] = useState<Status | ''>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleEdit = () => {
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
            // Perform saving edit user
            const user = {
                name,
                email,
                gender,
                status
            }
            UseEditUser(dispatch, userId, user);
            alert('Usuario guardado exitosamente');
            navigate('/');
        } else {
            setErrors(errors);
        }
    };

    // Email validation
    const validateEmail = (email: string) => {

        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const response = await UseGetUserById(dispatch, userId);
            const user = response?.payload

            setName(user.name)
            setEmail(user.email)
            setGender(user.gender)
            setStatus(user.status)

        }
        fetchUser();

    }, [dispatch, userId]);


    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="custom-box w-[500px] overflow-x-auto bg-white p-8">
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
                                className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
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
                                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
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
                                className={`mt-1 block w-full px-3 py-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'
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
                                    } rounded-md shadow-sm focus:outline-none text-primary-dark bg-white focus:ring-primary-dark focus:border-white sm:text-sm`}
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
                                onClick={handleEdit}
                                className="bg-light-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue focus:outline-none focus:bg-primary-blue"
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

export default EditUserForm;