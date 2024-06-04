import React, { useEffect, useState } from "react"
import Card from "../card/Card"
import Pagination from "../pagination/Pagination"
import "./gridView.scss"
import { GistData } from "../../types/props/card.props"
import { Gist } from "../../types/gist.types"
import { getGists } from "../../api/gists"
import { GridListViewProps } from "../../types/props/girdListView.props"

const GridView: React.FC<GridListViewProps> = ({ gists, currentPage, setCurrentPage}) => {
  
  return (
    <div className="grid-main">
      {
        gists.map((gist: Gist) => {
          const gistData: GistData = {
            userInfo: {
              gistName: gist.id,
              createdAt: gist.created_at,
              description: gist.description,
              imageURL: gist.owner.avatar_url,
              userName: gist.owner.login
            },
            fileName: gist.files[Object.keys(gist.files)[0]].filename,
            fileURL: gist.files[Object.keys(gist.files)[0]].raw_url,
            id: gist.id
          }
          return <Card gistData={gistData} />
        })
      }

      <div className="pagination-main">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default GridView
