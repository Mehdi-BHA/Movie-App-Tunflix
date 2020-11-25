import React from 'react';
import Logo from '../media/logo.png';
import Pdp from '../media/pdp.png';
import Searchbox from './Searchbox';

const Navbar = () => {
    return (
        <div className="nav">
            <img src={Logo} className="nav-logo" alt="logo" />
            <div style={{display:"flex", alignItems:"center"}}>
                <Searchbox />
                <img src={Pdp} className="nav-avatar" alt="avatar" />
            </div>
            
        </div>
    );
};

export default Navbar;