import React from 'react';
import './App.css';
import Footer from './Components/Footer/footer';
import Sidebar from './Components/Navigations/sidebar';


function App() {
  return (
    <div className="wrapper">
    
      <Sidebar/>
      
      <Footer/>
    </div>
  );
}

export default App;
