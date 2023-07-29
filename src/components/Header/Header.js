import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import bgvideo from "../../assets/video/bgvideo.mp4"

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <video src={bgvideo} autoPlay loop muted/>
      <div className='header-content flex align-center justify-center flex-column text-center'>
   
      
        
        
        <h1 className='text-black header-title ls-2'>Which cuisines do you find most captivating?</h1>
        <p className='text-uppercase text-black my-3 ls-1'>get the best recipes</p>
        <SearchForm />
      </div>
    </header>
  )
}

export default Header