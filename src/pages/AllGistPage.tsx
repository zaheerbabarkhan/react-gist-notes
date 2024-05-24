import AllGistCards from "../components/allGistCards/AllGistCards"
import AllGistProfile from "../components/allGistProfile/AllGistProfile"
import "./allGistPage.scss"

const AllGistPage = () => {
  return (
    <div className="all-gist-main">
      <AllGistProfile />
      <AllGistCards />
    </div>
  )
}

export default AllGistPage
