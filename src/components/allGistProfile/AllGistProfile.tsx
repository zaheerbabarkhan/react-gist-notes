import { Link, useParams } from "react-router-dom";
import avatar from "../../assets/avavtar-svg.svg"
import ButtonUI from "../../ui/button/ButtonUI";
import "./allGistProfile.scss";
import axiosInstacne from "../../api/axios";
import { useEffect, useState } from "react";

const AllGistProfile = () => {
  const { username } = useParams()

  const initialState = {
    imageURL: "",
    displayName: "",
    profileURL: ""
  }
  const [userData, setUserData] = useState(initialState)
  const getUserData = async (username: string) => {
    const response = await axiosInstacne.get(`/users/${username}`)
    if (response.status === 200) {
      setUserData({
        displayName: response.data.name ? response.data.name : response.data.login,
        imageURL: response.data.avatar_url,
        profileURL: response.data.html_url
      })
    }
  }

  useEffect(() => {
    getUserData(username as string)
  }, [])
  return (
    <div className="profile-main">
      <div className="profile-image">
        <img src={userData.imageURL ? userData.imageURL : avatar} alt="User Image" />
      </div>
      <div className="profile-name">
        {userData.displayName ? userData.displayName : ""}
      </div>
      <div>
        <Link to={userData.profileURL} target="_blank">
          <ButtonUI text="View Github Profile" className="view-profile" />
        </Link>
      </div>
    </div>
  )
}

export default AllGistProfile
