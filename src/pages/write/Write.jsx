import './write.css'

export default function Write() {
       return (
              <div className="write">
              <img className="writeImg"
               src="https://cdn.pricearchive.org/images/aliexpress.com/32522829430/Photo-wallpaper-seamless-stereoscopic-3D-Mediterranean-landscape-murals-living-room-bedroom-sofa-TV-background-wallpaper.jpg"
                alt="" />
                   <form className="writeForm">
                     <div className="writeFormGroup">
                     <label htmlFor="fileInput"><i className=" writeIcon fa-solid fa-plus"></i></label>
                            <input type="file" id="fileInput" style={{display:"none"}} />
                            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                     </div>
                     <div className="writeFormGroup">
                            <textarea  type="text" placeholder="Tell your story..." className="writeInput writeText" ></textarea>
                     </div>
                     <button className="writeButton">Publish</button>
                   </form>
              </div>
       )
}
