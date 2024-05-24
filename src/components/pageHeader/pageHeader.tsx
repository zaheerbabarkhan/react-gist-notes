import React, { useState } from "react"
import "./pageHeader.scss"
import { IoIosList, IoMdGrid } from "react-icons/io"

interface PageHeaderProps {
    displayViewButtons?: boolean
    headerText: string
    className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ displayViewButtons = true, headerText, className }) => {
    const [gridActive, setGridActive] = useState(false);
    const [listActive, setListActive] = useState(true);
    const activateAlternateView = () => {
        setListActive((prevState) => !prevState);
        setGridActive((prevState) => !prevState);
    }
    return (
        <div className={`page-header ${className}`}>
            <div className="page-heading">
                <p>{headerText}</p>
            </div>
            {
                displayViewButtons && <div className="view-buttons">
                    <button className={`grid-button ${gridActive ? "grid-active" : ""}`} onClick={activateAlternateView}>
                        <IoMdGrid size={27} className="grid-icon" />
                    </button>
                    <button className={`list-button ${listActive ? "list-active" : ""}`} onClick={activateAlternateView}>
                        <IoIosList size={27} className="list-icon" />
                    </button>

                </div>
            }
        </div>
    )
}

export default PageHeader
