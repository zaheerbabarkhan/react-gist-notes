import { CiStar } from 'react-icons/ci'
import { PiGitForkThin } from 'react-icons/pi'
import "./sarfork.scss"

const StarFork = () => {
    return (
        <div className="star-icon">
            <PiGitForkThin size={30} />
            <CiStar size={30} />
        </div>
    )
}

export default StarFork
