import React, { useState } from "react"
import "./pageHeader.scss"
import { IoIosList, IoMdGrid } from "react-icons/io"

interface PageHeaderProps {
    displayViewButtons?: boolean
    headerText: string
    className?: string
    gridView?: boolean
    setGridView?: React.Dispatch<React.SetStateAction<boolean>>
}

const PageHeader: React.FC<PageHeaderProps> = ({ displayViewButtons = true, headerText, className, gridView, setGridView = () => {} }) => {

    return (
        <div className={`page-header ${className}`}>
            <div className="page-heading">
                <p>{headerText}</p>
            </div>
            {
                displayViewButtons && <div className="view-buttons">
                    <button className={`grid-button ${gridView ? "grid-active" : ""}`} onClick={() => setGridView(true)}>
                        <IoMdGrid size={27} className="grid-icon" />
                    </button>
                    <button className={`list-button ${!gridView ? "list-active" : ""}`} onClick={() => setGridView(false)}>
                        <IoIosList size={27} className="list-icon" />
                    </button>

                </div>
            }
        </div>
    )
}

export default PageHeader
