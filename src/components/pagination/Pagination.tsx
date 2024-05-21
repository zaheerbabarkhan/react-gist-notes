import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import "./pagination.scss"

const Pagination = () => {
    return (
        <div className="pagination">
            <GoChevronLeft size={25} className="left-click" onClick={() => console.log("left clicked")} />
            <span className="page-number">Page <input type="search" /> of {14}</span>
            <GoChevronRight size={25} className="right-click" onClick={() => console.log("left clicked")} />
        </div>
    )
}

export default Pagination
