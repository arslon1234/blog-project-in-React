import { Link } from 'react-router-dom'

import './register.css'
export default function Register() {
       return (
              <div className="Register">
              <span className="RegisterTitle">Register</span>
                     <form className="RegisterForm">
                            <label>UserName</label>
                            <input type="text" className="RegisterInput" placeholder="Enter your username..." />
                            <label>Email</label>
                            <input type="text" className="RegisterInput" placeholder="Enter your email..." />
                            <label>Password</label>
                            <input type="password"  className="loginInput" />
                            <button className="LoginButton">Register</button>
                     </form>
                     <Link to={'/login'}>
                     <button className="RegisterButton">Login</button>
                     </Link>
              </div>
       )
}
