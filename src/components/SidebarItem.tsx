// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { SideNavItem } from './types';
import { useState } from 'react';

/**
 * This is one sidebar item, with the page title and its sub headers.
 * It uses the JSON Array from SidebarData.tsx. Each item has its own
 * subMenuOpen state.
**/
const SidebarItem = ({ item } : { item: SideNavItem }) => {

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const itemClicked = (hasSubMenu: boolean): void => {

    console.log(`${item.title} sub menu: ${hasSubMenu}`)
    if(hasSubMenu) {
      console.log(`sub menu for ${item.title} open`);
      setSubMenuOpen(!subMenuOpen)
    }
    
  }

  return (
    <>
    <li 
      onClick={() => itemClicked(item.submenu !== undefined && item.submenu)}
      className="pb-5 border-black"
      ><Link to={item.path}>{item.title}</Link></li>

    <div className={subMenuOpen ? "max-h-full" : "hidden"}>
      <AnimatePresence initial={false}>
        <motion.ul
          key={item.title}
          animate={
            subMenuOpen ? { height: "max-content"}
            : { height: 0}
          }

          exit={{ y: -100 , opacity: 0 }}
          transition ={{  }}
          className="flex h-0 flex-col overflow-hidden"
          >
            {subMenuOpen && item.subMenuItems && item.subMenuItems.map((subitem, sub_idx) => {
              return <>

                <li key={sub_idx} className="pl-4 pb-2 text-2xl">
                  <Link to={subitem.path}>- {subitem.title}</Link>
              </li>
              </>
            })}
        </motion.ul>
      </AnimatePresence>

    </div>
    </>
  )
}

export default SidebarItem;