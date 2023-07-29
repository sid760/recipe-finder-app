// import React, {useState, useEffect} from 'react';
// import {Link} from "react-router-dom";
// import "./Header.scss";
// import { MdFoodBank} from "react-icons/md";
// import { IoMdMenu} from "react-icons/io";
// import { useSidebarContext } from '../../context/sidebarContext';

// const Navbar = () => {
//   const {openSidebar} = useSidebarContext();
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if(offset > 60){
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//   })

//   return (
//     <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}>
//       <div className='container w-100'>
//         <div className='navbar-content text-white'>
//           <div className='brand-and-toggler flex align-center justify-between'>
//             <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'>
//               <MdFoodBank />
//               <span className='navbar-brand-text fw-7'>FastEat.</span>
//             </Link>
//             <div className='navbar-btns flex align-center'>
//               <button type = "button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
//                 <IoMdMenu size = {27} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";
import { MdFoodBank} from "react-icons/md";
import { IoMdMenu} from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';

const Navbar = () => {
  const {openSidebar} = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`navbar bg-orange flex align-center ${scrolled ? 'scrolled': ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-white'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'>
              <MdFoodBank />
              <span className='navbar-brand-text fw-7'>TastyTrails</span>
              {/* <marquee behavior="scroll" direction="left" class="text-blue font-semibold"> "One cannot think well, love well, sleep well if one has not dined well." - Virginia Woolf

"Cooking is love made visible." - Unknown

"Food is our common ground, a universal experience." - James Beard

"The only thing I like better than talking about food is eating." - John Walters

"In the end, we will remember not the words of our enemies, but the silence of our friends." - Martin Luther King Jr. (This quote can be a nice addition if you want to include something not directly related to food but inspiring.)</marquee> */}
            </Link>
            <div className='navbar-btns flex align-center'>
              <button type = "button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <IoMdMenu size = {27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar