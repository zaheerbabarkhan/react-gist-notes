import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "./navabar.scss"
import { IoIosSearch } from "react-icons/io"
import ButtonUI from "../../ui/button/ButtonUI"

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" className="nav-link">
                <img src={logo} />
            </Link>


            <div className="nav-right">
                <div className="nav-search">
                    <IoIosSearch className="search-icon" />
                    <input type="search" placeholder="Search gists" className="search-bar" />
                </div>
                <div className="nav-login">
                    <Link to={""}>
                        <ButtonUI text="Login" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
