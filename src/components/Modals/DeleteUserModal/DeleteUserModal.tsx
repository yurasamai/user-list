import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from '@/redux/store';
import { UseDeleteUser } from './utils';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
    userName: string;
}

const DeleteUserModal: React.FC<ModalProps> = ({ userId, userName, isOpen, onClose }) => {

    const backdropStyle = isOpen ? "fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50" : "hidden";
    const modalStyle = isOpen ? "modal-position fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-8 px-10 z-50 md:w-90 sm:min-w-95vw" : "hidden";

    const dispatch = useAppDispatch();

    const handleDelete = () => {
        UseDeleteUser(dispatch, userId)
        onClose();
    };

    return (
        <>
            <div className={backdropStyle}></div>
            <div className={modalStyle}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-primary-dark">Eliminar usuario {userId}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 translate-x-6 translate-y-[-1rem] p-0 pt-0 pb-1 pl-1.2em">
                        <ClearIcon />
                    </button>
                </div>
                <div>
                    <p className=" text-primary-dark mb-8">
                        Estas seguro de que deseas eliminar a {userName}
                    </p>
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
                            onClick={handleDelete}
                            className="bg-error text-white px-4 py-2 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500"
                        >
                            Eliminar
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
};

export default DeleteUserModal;