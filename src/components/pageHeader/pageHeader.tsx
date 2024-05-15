import { useState } from "react"
import "./pageHeader.scss"
import { IoIosList, IoMdGrid } from "react-icons/io"


const PageHeader = () => {
    const [gridActive, setGridActive] = useState(false);
    const [listActive, setListActive] = useState(true);
    const activateAlternateView = () => {
        setListActive((prevState) => !prevState);
        setGridActive((prevState) => !prevState);
    }
    return (
        <div className="page-header">
            <div className="page-heading">
                <p>Public Gists</p>
            </div>
            <div className="view-buttons">
                <button className={`grid-button ${gridActive ? "grid-active": ""}`} onClick={activateAlternateView}>
                    <IoMdGrid size={27} className="grid-icon" />
                </button>
                <button className={`list-button ${listActive ? "list-active" : ""}`} onClick={activateAlternateView}>
                    <IoIosList size={27} className="list-icon" />
                </button>

            </div>
        </div>
    )
}

export default PageHeader
