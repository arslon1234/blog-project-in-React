import Headers from '../../components/Header/Headers';
import Posts from '../../components/Post/Posts';
import Sidebar from '../../components/SideBar/Sidebar';
import './home.css';
export default function Home() {
       return (
              <>
               <Headers/>
              <div className="home">
              <Posts/>
              <Sidebar/>
              </div>
              </>
       )
}
