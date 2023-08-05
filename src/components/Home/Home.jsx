import React from 'react';
import './Home.css';
import Sidebar from "../../components/SideBar/Sidebar"
import Visuals from '../Visuals/Visuals';

function Home() {
  return (
    <div className="home">
        <Sidebar />
        <Visuals />
   </div>
  )
}

export default Home;