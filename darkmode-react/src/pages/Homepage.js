import { Navbar } from '../components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeProvider';

export const Homepage = () => {
  const {darkMode} = useContext(ThemeContext);
    return (
        <div>
          <Navbar/>
          <div className='flex items-center h-[80vh] pl-16 '>
            <div className={`${darkMode ? 'text-light' : 'text-dark'} leading-snug font-bold w-3/4 text-7xl`}>
              This is just a sample project, don't get your expectations too high.
            </div>
            <div className='absolute right-16'>
              <img src={require('../styles/images/Wallpaper.png')} />
            </div>
          </div>
        </div>
    );
};