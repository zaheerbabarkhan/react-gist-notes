import { Link } from "react-router-dom"
import avatar from "../../assets/avavtar-svg.svg"
import "./userinfo.scss"
const UserInfo = () => {
  return (
    <div className="info-main">
      <div className="image">
        <img src={avatar} alt="Profile Image" />
      </div>
      <div className="info">
        <div className="user-info">
            <span className="user-name"> <Link to={"/"} style={{ all: "unset"}}>John Doe</Link> </span> / 
            <span className="gist-name"> <Link to={"/"} style={{ all: "unset"}}>gist_name</Link></span>
        </div>
        <div className="gist-info">
            <div>Created 7 hours ago</div>
            <div>Git Description</div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
