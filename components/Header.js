import Link from 'next/link';
import { useRouter } from 'next/router'
import { BiSearch } from "react-icons/bi";



const Header = () => {
    const router = useRouter()

    const handleLogRefButton = (e) => {
        e.preventDefault();
        console.log("handleLogRefButton")
        router.push('/authentication')
    }
    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="edemy-nav">
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light">
                            <Link href={"/"} className="navbar-brand">
                                <h2><b>Tutors</b></h2>
                            </Link>
                            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <form className="search-box">
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href={"/"} className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={"/about"} className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={"/blogs"} className="nav-link">Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href={"/contact"} className="nav-link">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href={""}>Schduler</Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href={"/joinasteacher"} className="nav-link">Create className</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href={"/joinclassforstudent"} className="nav-link">Join Class</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <a className="default-btn" href="#" onClick={handleLogRefButton}>Login/Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header