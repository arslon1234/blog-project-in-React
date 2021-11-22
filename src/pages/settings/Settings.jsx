import './setting.css'
import Sidebar from '../../components/SideBar/Sidebar'
export default function Settings() {
       return (
              <div className="setting">
                   <div className="settingWrapper">
                          <div className="settingTitle">
                                 <span className="settingUpdateTitle">Update Your Account</span>
                                 <span className="settingDelateTitle">Delate Account</span>
                          </div>
                          <form className="settingForm">
                                 <label>Profile Picture</label>
                                 <div className="settingPP">
                                        <img src="https://avatars.mds.yandex.net/i?id=632892bf59a6f7939fcaf748b2272ac1-4077743-images-thumbs&n=13" alt="" />
                                        <label htmlFor="fileInput">
                                        <i className=" settingPPIcon fa-solid fa-user"></i>
                                        </label>
                                        <input type="file" id="fileInput" style={{display:"none"}} />
                                 </div>
                                 <label>UserName</label>
                                 <input type="text" placeholder="Arslon..." />
                                 <label>Email</label>
                                 <input type="email" placeholder="arslon@email.com..." />
                                 <label>UserName</label>
                                 <input type="password" />
                                 <button className="settingSubmit">Update</button>
                          </form>
                   </div>
                     <Sidebar/>
              </div>
       )
}
