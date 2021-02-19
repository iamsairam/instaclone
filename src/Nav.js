import React from 'react';
import Logo from "./insta.png";
import Home from './Home.svg'
import Share from './send.svg'
import Fav from './heart.svg';
import Explore from './explore.svg'
import user from './user.svg'
function Nav(props) {
    return (
        <div>
            <div className="nav-bar">
            <img src={Logo} className='loco-icon' />
            <input className='' value='search' disabled style={{width:'150px !important',height:'35px',textAlign:'center'}}/>
            <div>
                 <img src={Home} className='Home'/>
                 <img src={Share} className='Home'/>
                 <img src={Explore} className='Home Explore'/>
                 <img src={Fav} className='Home'/>
                 <img src={user} className='Home'/>
            </div>   
           </div>
        </div>
    );
}

export default Nav;