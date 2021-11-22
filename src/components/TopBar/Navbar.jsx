import './navbar.css'
import { Link } from 'react-router-dom'
import navbarImages from '../assets/images/logo1.jfif'
const Navbar = () => {
       const user = true;
       return (
              <div className="top">
                    <div className="topLeft">
                    <i class=" topIcon fa-brands fa-twitter-square"></i>
                    <i class=" topIcon fa-brands fa-facebook-square"></i>
                    <i class=" topIcon fa-brands fa-pinterest"></i>
                    <i class=" topIcon fa-brands fa-instagram-square"></i>
                    </div>
                    <div className="topCenter">
                           <ul className="topList">
                            <li className="topListItem">
                                   <Link to={'/'} className="link">HOME</Link>
                            </li>
                            <li className="topListItem">
                                   <Link to={'/post/:postId'} className="link" >ABOUT</Link>
                            </li>
                            <li className="topListItem">
                            <Link to={'/settings'} className="link">CONTACT</Link>
                            </li>
                            <li className="topListItem">
                            <Link to={'/write'} className="link">WRITE</Link>
                            </li>
                            <li className="topListItem">
                            <Link to={'/login'} className="link">Log Out</Link>
                                   
                            </li>
                           </ul>
                    </div>
                    <div className="topRight">
                           <img className="topImage" src={navbarImages} alt="navbar" />
                           <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
                    </div>
              </div>
       )
}

export default Navbar
