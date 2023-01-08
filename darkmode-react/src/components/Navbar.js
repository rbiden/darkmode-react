import { useState } from 'react';
import { Button } from './Button'
import { GoThreeBars } from 'react-icons/go'
import { MdClose } from 'react-icons/md'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-light text-dark flex items-center justify-between py-6 px-10 shadow-xl">
            <a href="homepage" className="text-2xl font-bold">Hello World!</a>
            <div className="gap-8 hidden items-center text-center text-sm mobile:flex tablet:text-base tablet:gap-14">
                <a href="#" className="font-medium hover:font-semibold ">Home</a>
                <a href="#" className="font-medium hover:font-semibold">About Me</a>
                <a href="#" className="font-medium hover:font-semibold">Services</a>
                <a href="#" className="font-medium hover:font-semibold">Portfolio</a>
                <a href="#" className="font-medium hover:font-semibold">Contact</a>
                <Button name='Login' theme='dark'/>
            </div>
            <button className='block mobile:hidden' onClick={() => setIsOpen(!isOpen)}>
                <GoThreeBars size={ 28 }/>
            </button>

            {isOpen && ( <div className="fixed inset-0 bg-dark opacity-75 mobile:hidden" onClick={() => setIsOpen(false)} /> )}
            <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 right-0 bottom-0 w-64 shadow-2xl overflow-y-auto bg-light transition duration-1000 ease-in-out mobile:hidden`}
                style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
                <div className="flex items-center justify-between p-5 bg-dark text-light">
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
                <Button name='Login' theme='dark' custom='absolute bottom-5 w-52 ml-6 text-lg'/>
            </div>
        </nav>
    );
};