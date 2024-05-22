import { PiGitForkThin } from "react-icons/pi"
import UserInfo from "../userinfo/UserInfo"
import "./singleGistHeader.scss"
import { CiStar } from "react-icons/ci"

const SingleGistHeader = () => {
  return (
    <div className="header-main">
      <UserInfo />
      <div className="fork-star-buttons">
        <div className="fork-main">
          <div>
            <button className="fork-button">
              <PiGitForkThin size={30} /> Fork
            </button>
          </div>
          <div className="fork-number">
            <p>5</p>
          </div>
        </div>
        <div className="star-main">
          <div>
            <button className="star-button">
              <CiStar size={30} /> Star
            </button>
          </div>
          <div className="star-number">
            <p>288</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleGistHeader
