import { useState } from 'react';
import { Button } from './Button'
import { GoThreeBars } from 'react-icons/go'
import { MdClose } from 'react-icons/md'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-light text-dark flex items-center justify-between py-6 px-10 shadow-xl">
            <a href="homepage" className="text-2xl font-bold">Hello World!</a>
            <div className="gap-14 hidden items-center tablet:flex">
                <a href="#" className="font-medium text-md hover:font-semibold">Home</a>
                <a href="#" className="font-medium text-md hover:font-semibold">About Me</a>
                <a href="#" className="font-medium text-md hover:font-semibold">Services</a>
                <a href="#" className="font-medium text-md hover:font-semibold">Portfolio</a>
                <a href="#" className="font-medium text-md hover:font-semibold">Contact</a>
                <Button name='Login' theme='dark'/>
            </div>
            <button className='block tablet:hidden' onClick={() => setIsOpen(!isOpen)}>
                <GoThreeBars size={ 28 }/>
            </button>

            {isOpen && ( <div className="fixed inset-0 bg-dark opacity-75" onClick={() => setIsOpen(false)} /> )}
            <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 right-0 bottom-0 w-64 shadow-2xl p-4 overflow-y-auto bg-light transition duration-1000 ease-in-out`}
                style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                <div className="flex items-center justify-between p-4 bg-gray-700 text-white">
                    <h3 className="text-xl font-semibold">Menu</h3>
                    <button
                        className="text-gray-500 hover:text-gray-300 focus:outline-none focus:text-gray-300"
                        onClick={() => setIsOpen(!isOpen)}>
                        <MdClose size={ 28 }/>
                    </button>
                </div>
                <div className="px-4 py-3">
                    <a href="#" className="block mb-10 font-medium text-md hover:font-semibold">Home</a>
                    <a href="#" className="block mb-10 font-medium text-md hover:font-semibold">About Me</a>
                    <a href="#" className="block mb-10 font-medium text-md hover:font-semibold">Services</a>
                    <a href="#" className="block mb-10 font-medium text-md hover:font-semibold">Portfolio</a>
                    <a href="#" className="block mb-10 font-medium text-md hover:font-semibold">Contact</a>
                </div>
            </div>
        </nav>
    );
};