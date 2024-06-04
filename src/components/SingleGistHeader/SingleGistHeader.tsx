import { PiGitForkThin } from "react-icons/pi"
import UserInfo from "../userinfo/UserInfo"
import "./singleGistHeader.scss"
import { CiStar } from "react-icons/ci"
import React, { useEffect, useState } from "react"
import axiosInstacne from "../../api/axios"
import { HeaderProps } from "../../types/props/singleGistHeader.props"
import { TbStarFilled } from "react-icons/tb"
import { RiGitForkFill } from "react-icons/ri"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"


const SingleGistHeader: React.FC<HeaderProps> = ({ userInfo, gistId }) => {
  const [forks, setForks] = useState(0)
  const [gistStarred, setGistStarred] = useState(false)
  const [gistForked, setGistForked] = useState(false)

  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

  const forkAGist = async () => {
    try {
      setGistForked(true)
      const response = await axiosInstacne.post(`/gists/${gistId}/forks`)
      if (response.status === 201) {
        setForks((preForks) => preForks + 1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const starAGist = async () => {
    try {
      setGistStarred(true)
      const response = await axiosInstacne.put(`/gists/${gistId}/star`)
      if (response.status === 204) {
      }
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

  const isGistStarred = async (id: string) => {
    const response = await axiosInstacne.get(`/gists/${id}/star`)
    if (response.status === 204) {
      setGistStarred(true)
    }
  }

  useEffect(() => {

    if (gistId) {
      getGistForks(gistId)
      isGistStarred(gistId)

    }
  })
  return (
    <div className="header-main">
      <UserInfo {...userInfo} />
      <div className="fork-star-buttons">
        <div className="fork-main">
          <div>
            <button className="fork-button" onClick={forkAGist} disabled={gistForked || !loggedIn}>
              {gistForked ? <RiGitForkFill size={30} /> : <PiGitForkThin size={30} className='fork-icon' />} Fork
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
            <button className="star-button" onClick={starAGist} disabled={gistStarred || !loggedIn}>
              {gistStarred ? <TbStarFilled size={30} /> : <CiStar size={30} />} Star
            </button>
          </div>
          <div className="star-number">
            <p>{gistStarred ? "1" : "0"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleGistHeader
