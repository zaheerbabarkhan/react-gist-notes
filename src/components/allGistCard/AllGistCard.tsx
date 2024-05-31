import { useEffect, useState } from "react"
import Card from "../card/Card"
import PageHeader from "../pageHeader/pageHeader"
import Pagination from "../pagination/Pagination"
import "./allGistCard.scss"
import axiosInstacne from "../../api/axios"
import { Gist } from "../../types/gist.types"
import { GistData } from "../../types/props/card.props"
import { useParams, useSearchParams } from "react-router-dom"

const AllGistCards = () => {
    const [gists, setGists] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 2;
    const { username } = useParams()

    const [searchParams] = useSearchParams();
    

    const getGists = async (username: string) => {
        let url = ""

        if (searchParams.get("starred")) {
            url = `/gists/starred?page=${currentPage}&per_page=${pageLimit}`
        } else {
            url = `/users/${username}/gists?page=${currentPage}&per_page=${pageLimit}`
        }
        let response = await axiosInstacne.get(url)
        if (response.status === 200) {
            setGists(response.data)
            console.log("gists reciveds", response.data.length)
        }
    }
    useEffect(() => {
        getGists(username as string)
    }, [currentPage])
    return (
        <div className="gist-cards-main">
            <PageHeader headerText="All Gists" displayViewButtons={false} className="all-gist-header" />
            <div className="gist-cards">
                {
                    gists.length === 0 ? <h2>No more gists</h2> : ""
                }
                {
                    gists.map((gist: Gist) => {
                        const gistData: GistData = {
                            userInfo: {
                                gistName: gist.id,
                                createdAt: gist.created_at,
                                description: gist.description,
                                imageURL: gist.owner.avatar_url,
                                userName: gist.owner.login
                            },
                            fileName: gist.files[Object.keys(gist.files)[0]].filename,
                            fileURL: gist.files[Object.keys(gist.files)[0]].raw_url,
                            id: gist.id
                        }
                        return <Card gistData={gistData} />
                    })
                }
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default AllGistCards
