import React from 'react';
import FooterColumn from './FooterComponents/FooterColumn';

interface Column {
    title: { label: string; url: string };
    list?: { label: string; url: string }[];
}


const footerData: Column[] = [
    {
        title: { label: 'Menu', url: '/menu' },
        list: [
            { label: 'Featured', url: '/menu#FEATURED' },
            { label: 'Bingsoo', url: '/menu#BINGSOO' },
            { label: 'Drinks', url: '/menu#DRINKS' },
            { label: 'Taiyaki', url: '/menu#TAIYAKI' }
        ]
    },
    {
        title: { label: 'Gallery', url: '/Gallery' },
        list: [
            { label: 'Gallery 1', url: '/' },
            { label: 'Gallery 2', url: '/' },
            { label: 'Gallery 3', url: '/' }
        ]
    },
    {
        title: { label: 'Contact', url: '/contact' },
        list: [
            { label: 'Apply Now', url: '/' },
            { label: 'Collaboration', url: '/' },
            { label: 'FAQ', url: '/' }
        ]
        
    },
    {
        title: { label: 'About Us', url: '/aboutus' },
        list: [
            { label: 'Our Team', url: '/' },
            { label: 'Our Story', url: '/' },
            { label: 'Our Locations', url: '/' }
        ]
        
    }
];

const Footer: React.FC = () => {
    return (
        <div className="bg-dark-blue text-text-color-2 w-full h-auto py-10 px-5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
                {footerData.map((column) => (
                    <FooterColumn key={column.title.label} columns={[column]} />
                ))}
            </div>
            <div className="text-center text-white mt-5 font-thin">
                © 2024 Snowy Village. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;