// import React from "react"
// import { RiArrowDownSFill } from "react-icons/ri";
// import { RiArrowUpSFill } from "react-icons/ri";
import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Menu',
    path: '/menu',
    submenu: false
  },

  {
    title: 'Gallery',
    path: '/gallery',
    submenu: false
  },

  {
    title: 'Contact',
    path: '/contact',
    // iconClosed: <RiArrowDownSFill />,
    // iconOpened: <RiArrowUpSFill />,
    submenu: true,
    subMenuItems: [

      { title: 'Hiring', path: '/contact/hiring'},

      { title: 'Collab', path: '/contact/collab'},

      { title: 'FAQ', path: '/contact/faq'}
    ]
  },

  {
    title: 'About Us',
    path: '/aboutus',
    // iconClosed: <RiArrowDownSFill />,
    // iconOpened: <RiArrowUpSFill />,
    submenu: true,
    subMenuItems: [
      { title: 'Our Team', path: '/aboutus/team' },
      { title: 'Our Story', path: '/aboutus/collab'},
      { title: 'Our Locations', path: '/aboutus/locations'}
    ]
  }
]