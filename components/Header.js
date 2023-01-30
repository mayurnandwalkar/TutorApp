import { useRouter } from 'next/router'



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
                            <a class="navbar-brand" href="index.html">
                                <h2><b>Tutors</b></h2>
                            </a>
                            <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar top-bar"></span>
                                <span class="icon-bar middle-bar"></span>
                                <span class="icon-bar bottom-bar"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <form class="search-box">
                                    <input type="text" class="input-search" placeholder="Search for anything" name="search" value="" />
                                    <button type="submit">

                                    </button>
                                </form>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">About Us</a>
                                    </li>
                                    <li class="nav-item megamenu">
                                        <a class="nav-link" href="index.html">Courses</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="authentication.html">Become A Teacher</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="authentication.html">Contact Us</a>
                                    </li>
                                </ul>
                                <div class="others-option d-flex align-items-center">
                                    <div class="option-item">
                                        <a class="default-btn" href="#" onClick={handleLogRefButton}>
                                            Login/Register<span></span>
                                        </a>
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