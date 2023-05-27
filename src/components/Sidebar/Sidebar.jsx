import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../imgs/lg.png';
import { motion } from 'framer-motion';
import { UilBars } from '@iconscout/react-unicons';
import { SidebarData } from '../../Data/Data';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-80%',
    },
  };

  const closeSidebar = () => {
    setExpanded(false);
  };

  return (
    <>
      <div
        className='bars'
        style={expanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className='Sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className='logo'>
          <img src={Logo} alt='semekilogo' />
        </div>
        <div className='menu'>
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                className={selected === index ? 'menuItem ' : 'menuItem'}
                key={index}
                onClick={() => {
                  setSelected(index);
                  closeSidebar(); // Close the sidebar on menu item click
                }}
                to={item.link}
              >
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          })}
          <div className='menuItem'>{/* <UilSignOutAlt /> */}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;