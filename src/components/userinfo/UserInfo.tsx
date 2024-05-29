import { Link } from "react-router-dom"
import avatar from "../../assets/avavtar-svg.svg"
import "./userinfo.scss"
import React from "react"
import { UserInfoProps } from "../../types/props/userinfo.props"


const UserInfo: React.FC<UserInfoProps> = ({createdAt, description, gistName, userName, imageURL}) => {
  return (
    <div className="info-main">
      <div className="image">
        <img src={imageURL ? imageURL : avatar} alt="Profile Image" />
      </div>
      <div className="info">
        <div className="user-info">
            <span className="user-name"> <Link to={"/"} style={{ all: "unset"}}>{userName}</Link> </span> / 
            <span className="gist-name"> <Link to={"/"} style={{ all: "unset"}}>{gistName.substring(0,10)}</Link></span>
        </div>
        <div className="gist-info">
            <div>Created At {createdAt.toString()}</div>
            <div>{description ? description.substring(0, 10) : "No Description available"}</div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
