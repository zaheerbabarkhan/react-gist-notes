import "./card.scss"
import jsonFile from "../../../package-lock.json";
import JSONPretty from 'react-json-prettify';
import { github } from "react-json-prettify/dist/themes"
import UserInfo from "../userinfo/UserInfo";
import StarFork from "../starFork/StarFork";
import { Link } from "react-router-dom";
import React from "react";

interface CardProps {
  userDisplay?: boolean
  hoverAffect?: boolean
  className?: string
}
const Card: React.FC<CardProps> = ({ userDisplay = true, hoverAffect = true, className }) => {
  return (
    <div className={`card-main ${className}`}>
      <div className="card-file">
        { hoverAffect && <div className="card-hover">
          <div className="hover-content">
            <span className="hover-view">View</span>
            <span className="hover-filename">{`filename111.json`}</span>
          </div>
        </div>}
        <Link to={"/"} style={{ all: "unset" }}>
          <JSONPretty id="json-pretty" json={jsonFile} theme={github} className="margin-0" />
        </Link>
      </div>
      {
        userDisplay && <div className="card-info">
          <UserInfo />
          <div className="star-fork-main">
            <StarFork />
          </div>
        </div>
      }
    </div>
  )
}

export default Card
