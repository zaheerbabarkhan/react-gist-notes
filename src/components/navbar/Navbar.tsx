import logo from "../../assets/logo.svg"
import "./navabar.scss"
import { IoIosSearch } from "react-icons/io"
import ButtonUI from "../../ui/button/ButtonUI"
import avatar from "../../assets/avavtar-svg.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AppDispatch, RootState } from "../../app/store"
import { useDispatch, useSelector } from "react-redux"
import { githubUserLogin, userLogout } from "../../slice/authSlice"

const Navbar = () => {
    
    const [dropdownActive, setDropdownActive] = useState(false)
    const dispatch: AppDispatch = useDispatch()
    const showDropDown = () => {
        setDropdownActive((prevState) => !prevState)
    }


    const loggedIn = useSelector((state: RootState) => state.user.loggedIn);
    const userInfo = useSelector((state: RootState) => state.user.userData);
    const loginUser = () => {
        dispatch(githubUserLogin())
    }
    const signoutUser = () => {
        setDropdownActive(false)
        dispatch(userLogout())
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
                    !loggedIn && <div className="nav-login">
                        <Link to={""}>
                            <ButtonUI text="Login" onClick={loginUser}/>
                        </Link>
                    </div>
                }

                {
                    loggedIn && <div className="user-image" onClick={showDropDown}>
                        <img src={userInfo?.imageURL ? userInfo.imageURL : avatar} alt="" />
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
                        <li> <Link to={"/"} style={{ all: "unset" }} onClick={signoutUser}>Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
