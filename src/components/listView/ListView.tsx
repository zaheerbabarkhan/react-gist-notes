import "./listView.scss"
import avatar from "../../assets/avavtar-svg.svg"
import StarFork from "../starFork/StarFork";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import { getGists } from "../../api/gists";
import { Gist } from "../../types/gist.types";
const ListView = () => {
    const [gists, setGists] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 7;
    useEffect(() => {
        getGists(setGists, currentPage, pageLimit)
    }, [currentPage])

    return (
        <div className="list-view">
            <table className="list-table">
                <thead>
                    <tr className="table-head">
                        <th className="th-1">Name</th>
                        <th className="th-2">Notebook Name</th>
                        <th className="th-3">Keyword</th>
                        <th className="th-4">Updated</th>
                        <th className="th-5"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gists.map((gist: Gist) => {
                            return <tr className="table-data">
                                <td className="td-avatar">
                                    <img src={gist.owner.avatar_url ? gist.owner.avatar_url : avatar} alt="Profile Image" />
                                    <p>{gist.owner.login}</p>
                                </td>
                                <td className="td-notebook">
                                    <p>
                                       {gist.files[Object.keys(gist.files)[0]].filename}
                                    </p>
                                </td>
                                <td className="td-keyword">
                                    <p>
                                        keyword
                                    </p>
                                </td>
                                <td className="td-updated">
                                    <p>Last updated {gist.updated_at.toString()}</p>
                                </td>
                                <td className="td-star">
                                    <StarFork />
                                </td>
                            </tr>
                        })
                    }


                </tbody>
                <tfoot>
                    <tr className="table-foot">
                        <td colSpan={5}>
                            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default ListView;
