import "./card.scss"
import jsonFile from "../../../package.json";
import JSONPretty from 'react-json-prettify';
import { github } from "react-json-prettify/dist/themes"
import UserInfo from "../userinfo/UserInfo";
import StarFork from "../starFork/StarFork";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="card-main">
      <div className="card-file">
        <div className="card-hover">
          <div className="hover-content">
            <span className="hover-view">View</span>
            <span className="hover-filename">{`filename111.json`}</span>
          </div>
        </div>
        <JSONPretty id="json-pretty" json={jsonFile} theme={github} className="margin-0" />
      </div>
      <div className="card-info">
        <UserInfo />
        <div className="star-fork-main">
          <StarFork />
        </div>
      </div>
    </div>
  )
}

export default Card
