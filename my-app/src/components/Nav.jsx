import {Link} from 'react-router-dom';

const Nav = () => {
    return (
   

<header>
<div class="topbar">
        <div class="topbar-left">
            <i class="logo fas fa-igloo"></i>
            <h1>VossFitness</h1>
        </div>
        <div class="topbar-center">
            <div class="topbar-search">
                <i class="search-icon fas fa-search"></i>
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
        <div class="topbar-right">
            <div class="line-container">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
            </div>
        </div>
    </div>
    <div class="menu">
        <div class="menu-top">
            <div class="menu-search">
                <i class="search-icon fas fa-search"></i>
                <input type="text" placeholder="Search"/>
            </div>
        </div>
        <div class="menu-center">
            <div class="menu-item">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </div>
            <div class="menu-item">
                <i class="fas fa-paper-plane"></i>
                <span>Pages</span>
            </div>
            <div class="menu-item">
                <i class="fas fa-user-friends"></i>
                <span>Groups</span>
            </div>
            <div class="menu-item">
                <i class="fas fa-users"></i>
                <span>People</span>
            </div>
            <div class="menu-item">
                <i class="fas fa-bullhorn"></i>
                <span>Updates</span>
            </div>
        </div>
        <div class="menu-bottom">
            <div class="menu-bottom-user">
                <img src="https://images.pexels.com/photos/5944321/pexels-photo-5944321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""/>
                <span>John Doe</span>
            </div>
            <i class="far fa-question-circle"></i>
        </div>
    </div>
</header>
    
  
     
   )
  }
  export default Nav;
