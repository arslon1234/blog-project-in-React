import './login.css'
import { Link } from 'react-router-dom'
export default function Login() {
       return (
              <div className="login">
              <span className="LoginTitle">Login</span>
                     <form className="loginForm">
                            <label>Email</label>
                            <input type="text" className="loginInput" placeholder="Enter your email..." />
                            <label>Password</label>
                            <input type="password"  className="loginInput" />
                            <button className="loginButton">Login</button>
                     </form>
                     <Link to={'/register'}>
                     <button className="loginRegisterButton">Register</button>
                     </Link>
              </div>
       )
}
