import "./pageHeader.scss"
import { IoIosList, IoMdGrid } from "react-icons/io"


const ListView = () => {
    return (
        <div className="page-header">
            <div className="page-heading">
                <p>Public Gists</p>
            </div>
            <div className="view-buttons">
                <button className="grid-view grid-active">
                    <IoMdGrid size={27} className="grid-icon"/>
                </button>
                <button className="list-view">
                    <IoIosList size={27} className="list-icon" />
                </button>

            </div>
        </div>
    )
}

export default ListView
