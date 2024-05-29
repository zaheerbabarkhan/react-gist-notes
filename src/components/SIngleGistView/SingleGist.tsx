import { useEffect, useState } from "react"
import Card from "../card/Card"
import SingleGistHeader from "../SingleGistHeader/SingleGistHeader"
import "./singleGist.scss"
import axiosInstacne from "../../api/axios"
import { useParams } from "react-router-dom"
import { GistData } from "../../types/props/card.props"
import { Gist } from "../../types/gist.types"

const SingleGist = () => {
  const { id } = useParams();
  const initialGistData: GistData = {
    userInfo: {
      gistName: '',
      createdAt: new Date,
      description: '',
      imageURL: '',
      userName: ''
    },
    fileName: '',
    fileURL: '',
    id: ''
  };
  const [gistData, setGistData] = useState(initialGistData)

  useEffect(() => {
    const getGistData = async (id: string) => {
      const response = await axiosInstacne.get(`gists/${id}`)
      if (response.status === 200) {
        const data = response.data as Gist
        setGistData({
          userInfo: {
            gistName: data.id,
            createdAt: data.created_at,
            description: data.description,
            imageURL: data.owner.avatar_url,
            userName: data.owner.login
          },
          fileName: data.files[Object.keys(data.files)[0]].filename,
          fileURL: data.files[Object.keys(data.files)[0]].raw_url,
          id: data.id
        } as GistData)

      }

    }
    getGistData(String(id))
  }, [])

  return (
    <div className="single-gist-main">

      <SingleGistHeader userInfo={gistData.userInfo} gistId={gistData.id} />
      <div className="file-name">
        {gistData.fileName}
      </div>
      <div>
        <Card hoverAffect={false} userDisplay={false} className="file-view" gistData={gistData} />
      </div>
    </div>

  )
}

export default SingleGist
