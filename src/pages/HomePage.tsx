import { useState } from "react"
import GridView from "../components/grid-view/GridView"
import ListView from "../components/listView/ListView"
import PageHeader from "../components/pageHeader/pageHeader"

const HomePage = () => {
  const [gridView, setGridView] = useState(true)
  
  return (
    <div className="main-div">
      <PageHeader headerText="Public Gists" gridView={gridView} setGridView={setGridView}/>
      {
        gridView ? <GridView /> : <ListView />
      }
    </div>
  )
}

export default HomePage
