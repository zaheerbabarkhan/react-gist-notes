import { CiStar } from 'react-icons/ci'
import { PiGitForkThin } from 'react-icons/pi'
import "./sarfork.scss"

const StarFork = () => {
    return (
        <div className="star-fork-icon">
            <PiGitForkThin size={30} className='fork-icon'/>
            <CiStar size={30} className='star-icon'/>
        </div>
    )
}

export default StarFork
