import React from 'react'
import Navbar from './components/TopBar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import { Router, Link, Switch, Route } from 'react-router'
import Post from './components/postTwo/Post'
import Posts from './components/Post/Posts'
export default function App() {
       const user = false;
       return (
              <div>
                     <Navbar/>
              <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route exact path="/register" component={Register}/>
                     <Route exact path="/login" component={Login}/>
                     <Route exact path="/write" component={ Write}/>
                     <Route exact path="/settings" component={Settings}/>
                     <Route exact path="/post/:postId" component={Single}/>
                   
                     
              </Switch>
              </div>
              
       )
}
