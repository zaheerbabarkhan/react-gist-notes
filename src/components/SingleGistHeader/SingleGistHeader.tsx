import { PiGitForkThin } from "react-icons/pi"
import UserInfo from "../userinfo/UserInfo"
import "./singleGistHeader.scss"
import { CiStar } from "react-icons/ci"
import React, { useEffect, useState } from "react"
import axiosInstacne from "../../api/axios"
import { HeaderProps } from "../../types/props/singleGistHeader.props"


const SingleGistHeader: React.FC<HeaderProps> = ({ userInfo, gistId }) => {
  const [forks, setForks] = useState(null)

  const forkAGist = async () => {
    try {
      const response = await axiosInstacne.post(`/gists/${gistId}/forks`)
      if (response.status === 201) {
        await getGistForks(gistId)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const starAGist = async () => {
    try {
      console.log("this is gist id", gistId)

      const response = await axiosInstacne.put(`/gists/${gistId}/star`)
      console.log(response.status)
    } catch (error) {
      console.log(error)
    }
  }

  const getGistForks = async (id: string) => {
    try {
      const response = await axiosInstacne.get(`/gists/${id}/forks`)
      setForks(response.data.length)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    if (gistId) {
      getGistForks(gistId)
    }
  })
  return (
    <div className="header-main">
      <UserInfo {...userInfo} />
      <div className="fork-star-buttons">
        <div className="fork-main">
          <div>
            <button className="fork-button" onClick={forkAGist}>
              <PiGitForkThin size={30} /> Fork
            </button>
          </div>
          <div className="fork-number">
            <p>{
              gistId ? forks : ""
            }</p>
          </div>
        </div>
        <div className="star-main">
          <div>
            <button className="star-button" onClick={starAGist}>
              <CiStar size={30} /> Star
            </button>
          </div>
          <div className="star-number">
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleGistHeader
