import React from 'react';
import Logo from '../media/logo.png';
import Pdp from '../media/pdp.png';
import Searchbox from './Searchbox';
import ReactStars from 'react-rating-stars-component';

const Navbar = (props) => {

    const inputTaken=(textSearch)=>{
        props.searchTxt(textSearch)
    }

    const test = (inputtest) => {
        console.log(inputtest)
    }

    return (
        <div className="nav">
            <img src={Logo} className="nav-logo" alt="logo" onClick={props.reset}/>
            <ReactStars size={24} isHalf={true} activeColor="red" onChange={props.changeStars}/>
            <div style={{display:"flex", alignItems:"center"}}>
                <Searchbox searchInput={props.searchInput} takeInput={(txt)=>inputTaken(txt)}/>
                <img src={Pdp} className="nav-avatar" alt="avatar" />
            </div>
            
        </div>
    );
};

export default Navbar;