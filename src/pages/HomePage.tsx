import { useEffect, useState } from "react"
import GridView from "../components/grid-view/GridView"
import ListView from "../components/listView/ListView"
import PageHeader from "../components/pageHeader/pageHeader"
import { getGists } from "../api/gists"

const HomePage = () => {
  const [gridView, setGridView] = useState(false)
  const [gists, setGists] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 6;
  const [dataLoaded, setDataLoaded] = useState(false)
  useEffect(() => {

   const getGistsData = async (setGists: React.Dispatch<React.SetStateAction<never[]>>, currentPage: number, pageLimit: number) => {
    await getGists(setGists, currentPage, pageLimit)
    setDataLoaded(true)
   }
   getGistsData(setGists, currentPage, pageLimit)

  }, [currentPage])
  return (
    <div className="main-div">
      <PageHeader headerText="Public Gists" gridView={gridView} setGridView={setGridView} />
      {
        !dataLoaded ? <h3>Loading</h3> : gridView ? <GridView gists={gists} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : <ListView gists={gists} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      }
    </div>
  )
}

export default HomePage
