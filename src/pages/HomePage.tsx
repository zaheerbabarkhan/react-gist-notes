import GridView from "../components/grid-view/GridView"
import ListView from "../components/listView/ListView"
import PageHeader from "../components/pageHeader/pageHeader"

const HomePage = () => {
  return (
    <div className="main-div">
      <PageHeader />
      {/* <ListView /> */}
      <GridView />
    </div>
  )
}

export default HomePage
