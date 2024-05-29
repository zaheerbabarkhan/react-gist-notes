import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import "./pagination.scss"
import React, { useState } from "react"

interface PaginationProps {
    currentPage: Number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, ...props }) => {
    const [inputValue, setInputValue] = useState(currentPage.toString());

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const newPage = parseInt(inputValue);
            if (!isNaN(newPage) && newPage > 0) {
                setCurrentPage(newPage);
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const incrementPage = () => {
        setCurrentPage((prevPage) => {
            setInputValue((prevPage + 1).toString())
            return prevPage + 1
        });
        
    };

    const decrementPage = () => {
        setCurrentPage((prevPage) => {
            setInputValue(prevPage > 1 ? (prevPage - 1).toString() : "1")
            return prevPage > 1 ? prevPage - 1 : 1
        });
        
    };
    return (
        <div className="pagination">
            <GoChevronLeft size={25} className="left-click" onClick={decrementPage} />
            <span className="page-number">Page 
            <input type="search" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/> 
            of {100}</span>
            <GoChevronRight size={25} className="right-click" onClick={incrementPage} />
        </div>
    )
}

export default Pagination
