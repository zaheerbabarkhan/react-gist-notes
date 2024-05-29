import "./card.scss"
import JSONPretty from 'react-json-prettify';
import { github } from "react-json-prettify/dist/themes"
import UserInfo from "../userinfo/UserInfo";
import StarFork from "../starFork/StarFork";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CardProps } from "../../types/props/card.props";


const Card: React.FC<CardProps> = ({ userDisplay = true, hoverAffect = true, className, gistData }) => {

  const [fileContent, setFileContent] = useState<string>("");

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(gistData.fileURL);
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error("Failed to fetch file content:", error);
      }
    };

    fetchFileContent();
  }, [gistData.fileURL]);
  return (
    <div className={`card-main ${className}`}>
      <div className="card-file">
        {hoverAffect && <div className="card-hover">
          <div className="hover-content">
            <span className="hover-view">View</span>
            <span className="hover-filename">{gistData.fileName}</span>
          </div>
        </div>}
        <Link to={`/gists/${gistData.id}`} style={{ all: "unset" }}>
          <JSONPretty id="json-pretty" json={fileContent} theme={github} className="margin-0" />
        </Link>
      </div>
      {
        userDisplay && <div className="card-info">
          <UserInfo {...gistData.userInfo}/>
          <div className="star-fork-main">
            <div className="relative">
              <StarFork />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Card
