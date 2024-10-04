import React from 'react'
import{ Navbar }from './components/Navbar';
import { Banner } from './components/Banner';
import Footer from './components/Footer';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className='px-16 mx-auto max-w-screen-2xl '>
        <Navbar/>
        <Banner/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
