import React from 'react';

const Footer = () => {
    const date = new Date();
    let currentYear = date.getFullYear();
    return ( <footer className="footer">
        <p> copyright: { currentYear } </p> 
        </footer>
    );
}

export default Footer;