import Card from "../card/Card"
import SingleGistHeader from "../SingleGistHeader/SingleGistHeader"
import "./singleGist.scss"

const SingleGist = () => {
  return (
    <div className="single-gist-main">
      <SingleGistHeader />
      <div className="file-name">
        {`file-name.json`}
      </div>
      <div>
        <Card hoverAffect={false} userDisplay={false} className="file-view"/>
      </div>
    </div>
    
  )
}

export default SingleGist
