import React from 'react';
import Logo from '../media/logo.png';
import Pdp from '../media/pdp.png';
import Searchbox from './Searchbox';
import {Link} from 'react-router-dom';

const Navbar = (props) => {



    return (
        <div className="nav">
            <Link to="/"><img src={Logo} className="nav-logo" alt="logo" onClick={props.reset}/></Link>
            <div style={{display:"flex", alignItems:"center"}}>
                <Searchbox/>
                <img src={Pdp} className="nav-avatar" alt="avatar" />
            </div>
            
        </div>
    );
};

export default Navbar;