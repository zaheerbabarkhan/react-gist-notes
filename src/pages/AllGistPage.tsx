import React from "react"
import AllGistCard from "../components/allGistCard/AllGistCard"
import AllGistProfile from "../components/allGistProfile/AllGistProfile"
import "./allGistPage.scss"

const AllGistPage = () => {
  return (
    <div className="all-gist-main">
      <AllGistProfile />
      <AllGistCard />
    </div>
  )
}

export default AllGistPage
