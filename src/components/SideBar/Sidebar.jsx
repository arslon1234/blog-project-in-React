import './sidebar.css'

export default function Sidebar() {
       return (
              <div className="sidebar">
                    <div className="sidebarItem">
                           <span className="sidebarTitle">ABOUT ME</span>
                           <img src="https://i.pinimg.com/474x/c9/a9/58/c9a958acd19b9e12cd897a239a2cf297.jpg" alt="img" />
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo, minima recusandae</p>
                    </div>
                    <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                           <li className="sidebarListItem">Life</li>
                           <li className="sidebarListItem">Music</li>
                           <li className="sidebarListItem">Sport</li>
                           <li className="sidebarListItem">Tech</li>
                           <li className="sidebarListItem">Cinema</li>
                           <li className="sidebarListItem">Style</li>
                    </ul>
                    </div>
                    <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                    <i class=" sidebarIcon fa-brands fa-twitter-square"></i>
                    <i class=" sidebarIcon fa-brands fa-facebook-square"></i>
                    <i class=" sidebarIcon fa-brands fa-pinterest"></i>
                    <i class=" sidebarIcon fa-brands fa-instagram-square"></i>
                    </div>
                    </div>
              </div>
       )
}
