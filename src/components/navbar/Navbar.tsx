import logo from "../../assets/logo.svg"
import "./navabar.scss"
import { IoIosSearch } from "react-icons/io"
import ButtonUI from "../../ui/button/ButtonUI"
import avatar from "../../assets/avavtar-svg.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const isLoggedIn = true;
    const [dropdownActive, setDropdownActive] = useState(false)

    const showDropDown = () => {
        console.log("image clicked")
        console.log("state before", dropdownActive)
        setDropdownActive((prevState) => !prevState)
        console.log("state after", dropdownActive)
    }
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
                {
                    !isLoggedIn && <div className="nav-login">
                        <Link to={""}>
                            <ButtonUI text="Login" />
                        </Link>
                    </div>
                }

                {
                    isLoggedIn && <div className="user-image" onClick={showDropDown}>
                        <img src={avatar} alt="" />
                    </div>
                }
                <div className={`dropdown-main ${dropdownActive ? "active" : "inactive"}`}>
                    <ul>
                        <li> <Link to={""} style={{ all: "unset" }}>
                            <div className="signed">
                                Signed in as
                            </div>
                            <div>
                                {`John Doe`}
                            </div>
                        </Link></li>
                        <hr className="dropdown-breaks" />
                        <li> <Link to={""} style={{ all: "unset" }}>Your gists</Link></li>
                        <li> <Link to={""} style={{ all: "unset" }}>Starred gists</Link></li>
                        <li> <Link to={""} style={{ all: "unset" }}>Your Github Profile</Link></li>
                        <hr className="dropdown-breaks" />
                        <li> <Link to="https://support.github.com/" target="blank" style={{ all: "unset" }}>Help</Link></li>
                        <li> <Link to={""} style={{ all: "unset" }}>Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
