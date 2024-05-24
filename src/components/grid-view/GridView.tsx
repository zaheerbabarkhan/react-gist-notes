import Card from "../card/Card"
import Pagination from "../pagination/Pagination"
import "./gridView.scss"

const GridView = () => {
  return (
    <div className="grid-main">
      <Card />
      
      <div className="pagination-main">
        <Pagination />
      </div>
    </div>
  )
}

export default GridView
