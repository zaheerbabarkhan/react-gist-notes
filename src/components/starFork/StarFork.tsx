import { CiStar } from 'react-icons/ci'
import { PiGitForkThin } from 'react-icons/pi'
import "./sarfork.scss"
import React, { useEffect, useState } from 'react'
import { RiGitForkFill } from 'react-icons/ri'
import { TbStarFilled } from 'react-icons/tb'
import axiosInstacne from '../../api/axios'

interface StarForkProps {
    gistId?: string
}
const StarFork: React.FC<StarForkProps> = ({ gistId }) => {
    const [gistStarred, setGistStarred] = useState(false)
    const [gistForked, setGistForked] = useState(false)


    const isGistStarred = async (id: string) => {
        try {
            const response = await axiosInstacne.get(`/gists/${id}/star`)
            if (response.status === 204) {
                setGistStarred(true)
            }
        } catch (error) {

        }
    }

    const starAGist = async () => {
        try {
            setGistStarred(true)
            await axiosInstacne.put(`/gists/${gistId}/star`)
        } catch (error) {
            console.log(error)
        }
    }

    const forkAGist = async () => {
        try {
            setGistForked(true)
            await axiosInstacne.post(`/gists/${gistId}/forks`)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        if (gistId) {
            isGistStarred(gistId)
        }
    })
    return (
        <div className="star-fork-icon">
            {gistForked ? <RiGitForkFill size={30} className='filled-fork-star' /> : <PiGitForkThin size={30} className='fork-icon' onClick={forkAGist} />}
            {gistStarred ? <TbStarFilled size={30} className='filled-fork-star' /> : <CiStar size={30} className='star-icon' onClick={starAGist} />}
        </div>
    )
}

export default StarFork
