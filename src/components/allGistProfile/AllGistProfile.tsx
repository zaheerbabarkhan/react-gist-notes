import avatar from "../../assets/avavtar-svg.svg"
import ButtonUI from "../../ui/button/ButtonUI";
import "./allGistProfile.scss";

const AllGistProfile = () => {
  return (
    <div className="profile-main">
      <div className="profile-image">
        <img src={avatar} alt="User Image" />
      </div>
      <div className="profile-name">
        John Doe
      </div>
      <div>
        <ButtonUI text="View Github Profile" className="view-profile"/>
      </div>
    </div>
  )
}

export default AllGistProfile
