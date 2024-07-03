import React  from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface HeaderProps {
    title: string;
    showHomeButton: boolean;
  }
  
  const HeaderComponent: React.FC<HeaderProps> = ({ title, showHomeButton = false }) => {

    const navigate = useNavigate();

    const handleBack = ()=>{
        navigate('/');
    }

    return (
        <div className='header w-full p-8 flex gap-6 shadow-md mb-8 bg-white rounded-b-lg'>
        {showHomeButton && 
        <div className="relative group flex justify-center items-center">
        <div className="text-primary-dark  cursor-pointer group-hover:scale-150 group-hover:text-primary-blue transition-all duration-500 ease-in-out" 
             onClick={handleBack}>
          <ArrowBackIcon />
        </div>
        <span className="absolute left-0 bottom-full ml-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          Homepage
        </span>
      </div> 
        }
        <h1 className="text-2xl font-bold text-primary-dark">{title}</h1>
      </div>
      
    );
  };

  export default HeaderComponent;
  