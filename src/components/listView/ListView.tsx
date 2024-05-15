import "./listView.scss"
import avatar from "../../assets/avavtar-svg.svg"
import { CiStar } from "react-icons/ci";
import { PiGitForkThin } from "react-icons/pi";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
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
                            <div className="star-icon">
                                <PiGitForkThin size={30} />
                                <CiStar size={30} />
                            </div>
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
                            <div className="star-icon">
                                <PiGitForkThin size={30} />
                                <CiStar size={30} />
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="table-foot">
                        <td colSpan={5}>
                            <div className="pagination">
                                <GoChevronLeft size={25}  className="left-click" onClick={() => console.log("left clicked")} />
                                <span className="page-number">Page <input type="search" /> of {14}</span>
                                <GoChevronRight size={25} className="right-click" onClick={() => console.log("left clicked")}/>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default ListView;
