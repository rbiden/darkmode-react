import { useState, useContext } from 'react';
import { Button } from './Button'
import { GoThreeBars } from 'react-icons/go'
import { MdClose, MdDarkMode } from 'react-icons/md'
import { ThemeContext } from '../components/ThemeProvider';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);

    return (
        <nav className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} sticky top-0 left-0 flex items-center justify-between py-6 px-10 shadow-xl`}>
            <a href="homepage" className="text-2xl font-bold">Hello World!</a>
            <div className="gap-8 hidden items-center text-center text-sm mobile-l:flex tablet:text-base tablet:gap-14 mobile-l:gap-6">
                <a href="#" className="font-medium hover:font-semibold ">Home</a>
                <a href="#" className="font-medium hover:font-semibold">About</a>
                <a href="#" className="font-medium hover:font-semibold">Services</a>
                <a href="#" className="font-medium hover:font-semibold">Portfolio</a>
                <a href="#" className="font-medium hover:font-semibold">Contact</a>
                <Button custom="mr-11" theme={ `${ darkMode ? 'dark' : 'light' }`}>Login</Button>
            </div>
            <Button custom="absolute right-1" onClick={ toggleDarkMode }>
                <MdDarkMode size={ 28 }/>
            </Button>
            <Button custom='block mr-7 mobile-l:hidden' theme={ `${ darkMode ? 'dark' : 'light' }`} onClick={() => setIsOpen(!isOpen)}>
                <GoThreeBars size={ 28 }/>
            </Button>
            {isOpen && ( <div className="fixed inset-0 bg-dark opacity-75 mobile-l:hidden" onClick={() => setIsOpen(false)} /> )}
            <div className={`${isOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} fixed top-0 right-0 bottom-0 w-64 shadow-2xl overflow-y-auto mobile:hidden`}>
                <div className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} flex items-center justify-between p-5`}>
                    <h3 className="text-xl font-semibold">Menu</h3>
                    <button
                        className="text-gray-500 hover:text-gray-300 focus:outline-none focus:text-gray-300"
                        onClick={() => setIsOpen(!isOpen)}>
                        <MdClose size={ 28 }/>
                    </button>
                </div>
                <div className='font-medium'>
                    <a href="#" className="block pl-3 py-5 mx-2 border-b-2 border-border hover:font-semibold">Home</a>
                    <a href="#" className="block pl-3 py-5 mx-2 border-b-2 border-border hover:font-semibold">About Me</a>
                    <a href="#" className="block pl-3 py-5 mx-2 border-b-2 border-border hover:font-semibold">Services</a>
                    <a href="#" className="block pl-3 py-5 mx-2 border-b-2 border-border hover:font-semibold">Portfolio</a>
                    <a href="#" className="block pl-3 py-5 mx-2 border-b-2 border-border hover:font-semibold">Contact</a>
                </div>
                <Button theme={ `${ darkMode ? 'dark' : 'light' }`} custom='absolute bottom-5 w-52 ml-6 text-lg'>Login</Button>
            </div>
        </nav>
    );
};