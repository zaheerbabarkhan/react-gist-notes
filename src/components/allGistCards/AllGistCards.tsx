import Card from "../card/Card"
import PageHeader from "../pageHeader/pageHeader"
import Pagination from "../pagination/Pagination"
import "./allGistCards.scss"

const AllGistCards = () => {
    return (
        <div className="gist-cards-main">
            <PageHeader headerText="All Gists" displayViewButtons={false} className="all-gist-header"/>
            <div className="gist-cards">
                <Card />
                <Card />
            </div>
                <Pagination />
        </div>
    )
}

export default AllGistCards
