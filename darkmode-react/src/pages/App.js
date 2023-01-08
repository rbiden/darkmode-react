import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MdDarkMode } from 'react-icons/md';

export const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('bg-dark');
        } else {
            document.body.classList.remove('bg-dark');
        }
    }

    return (
        <div className='p-4 min-w-min h-screen w-screen flex justify-center items-center'>
            <button
                onClick={ toggleDarkMode }
                className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} absolute flex items-center gap-3 top-5 left-5 px-4 py-2 font-bold rounded-full`}>
                <MdDarkMode/>{`${darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}`}
            </button>
            <div className='block tablet:flex'>
                <div className={`${darkMode ? 'bg-light text-dark' : 'bg-dark text-light'} p-8 m-5 rounded-md shadow-2xl w-96`}>
                    <h1 className={`text-6xl font-bold`}>
                        Hello world!
                    </h1>
                    <h3 className={`${darkMode ? 'bg-light text-dark' : 'bg-dark text-light'} text-2xl pt-2 font-light`}>
                        This is my first ReactJS project with Tailwind CSS!
                    </h3>
                    <button 
                        onClick={ () => { navigate('homepage')} } 
                        className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} font-semibold text-2xl rounded-md mt-16 w-44 py-3 hover:opacity-90 animate-fade active:scale-95`}>
                        Let's Go!
                    </button>
                </div>
                <div className={`${darkMode ? 'text-light' : 'text-dark'} w-96 m-5 mt-8`}>
                    <h1 className='text-3xl font-bold mobile:text-5xl'>
                        I'm excited to use this Javascript and CSS Frameworks!
                    </h1>
                    <h1 className='text-xl mt-11 font-bold mobile:text-2xl'>
                        Feel free to guide me through this journey.
                    </h1>
                </div>
            </div>
        </div>
    );
};