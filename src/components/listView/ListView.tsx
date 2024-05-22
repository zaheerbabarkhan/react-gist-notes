import "./listView.scss"
import avatar from "../../assets/avavtar-svg.svg"
import StarFork from "../starFork/StarFork";
import Pagination from "../pagination/Pagination";
const ListView = () => {
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
                    <tr className="table-data">
                        <td className="td-avatar">
                            <img src={avatar} alt="Profile Image" />
                            <p>John Doe</p>
                        </td>
                        <td className="td-notebook">
                            <p>
                                Notebook Name
                            </p>
                        </td>
                        <td className="td-keyword">
                            <p>
                                keyword
                            </p>
                        </td>
                        <td className="td-updated">
                            <p>Last updated few hours ago</p>
                        </td>
                        <td className="td-star">
                            <StarFork />
                        </td>
                    </tr>
                    <tr className="table-data">
                        <td className="td-avatar">
                            <img src={avatar} alt="Profile Image" />
                            <p>John Doe</p>
                        </td>
                        <td className="td-notebook">
                            <p>
                                Notebook Name
                            </p>
                        </td>
                        <td className="td-keyword">
                            <p>
                                keyword
                            </p>
                        </td>
                        <td className="td-updated">
                            <p>Last updated few hours ago</p>
                        </td>
                        <td className="td-star">
                            <StarFork />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="table-foot">
                        <td colSpan={5}>
                            <Pagination />
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default ListView;
