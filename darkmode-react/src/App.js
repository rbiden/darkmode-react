import React from 'react';

export default class DarkModeToggle extends React.Component {
  state = {
    darkMode: false,
  };

  toggleDarkMode = () => {
    this.setState((state) => ({
      darkMode: !state.darkMode,
    }));
  };

  alertMsg = () => {
    
  }

  render() {
    return (
        <div className={`${this.state.darkMode ? 'bg-black' : 'bg-primary'} p-4 h-screen w-screen block justify-center items-center md:flex`}>
          <button
            onClick={ this.toggleDarkMode }
            className={`${this.state.darkMode ? 'bg-black text-primary' : 'bg-primary'} absolute top-5 left-5 px-4 py-2 font-bold text-white rounded-full`}>
            {`${this.state.darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}`}
          </button>
          <div className={`${this.state.darkMode ? 'bg-primary text-black' : 'bg-black'} p-8 m-5 rounded-md shadow-2xl w-96`}>
            <h1 className={`${this.state.darkMode ? 'bg-primary text-black' : 'bg-black text-primary'} text-6xl font-bold`}>Hello world!</h1>
            <h3 className={`${this.state.darkMode ? 'bg-primary text-black' : 'bg-black text-primary'} text-2xl pt-2 font-light text-dark`}>
              This is my first ReactJS project with Tailwind CSS!
            </h3>
            <button 
              onClick={ this.alertMsg } 
              className={`${this.state.darkMode ? 'bg-black text-primary' : 'bg-primary text-black'} font-semibold text-2xl rounded-md mt-16 w-44 py-3 hover:opacity-90 animate-fade active:scale-95`}>
              Let's Go!
            </button>
          </div>
          <div className={`${this.state.darkMode ? 'bg-black text-primary' : 'text-black'} w-96 m-5 mt-8`}>
            <h1 className='text-5xl font-bold'>
              I'm excited to use this Javascript and CSS Frameworks!
            </h1>
            <h1 className='text-2xl mt-11 font-bold'>
              Feel free to guide me through this journey.
            </h1>
          </div>
        </div>
    );
  }
}