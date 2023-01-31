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
            <div id="navbar" class="navbar-area">
                <div class="edemy-nav">
                    <div class="container-fluid">
                        <div class="navbar navbar-expand-lg navbar-light">
                            <Link href={"/"} class="navbar-brand">
                                <h2><b>Tutors</b></h2>
                            </Link>
                            <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar top-bar"></span>
                                <span class="icon-bar middle-bar"></span>
                                <span class="icon-bar bottom-bar"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <form class="search-box">
                                </form>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link href={"/"} class="nav-link active">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href={"/about"} class="nav-link">About Us</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href={"/blogs"} class="nav-link">Blogs</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href={"/contact"} class="nav-link">Contact Us</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" href={""}>Schduler</Link>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <Link href={"/joinasteacher"} class="nav-link">Create Class</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link href={"/joinclassforstudent"} class="nav-link">Join Class</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="others-option d-flex align-items-center">
                                    <div class="option-item">
                                        <a class="default-btn" href="#" onClick={handleLogRefButton}>Login/Register</a>
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