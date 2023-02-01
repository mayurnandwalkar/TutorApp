import { useRouter } from "next/router"
import { BiUser } from "react-icons/bi"
const HeroSection = () => {
    const router = useRouter()

    const hanldeJoinClass = (e) => {
        e.preventDefault();
        router.push("/joinclassforstudent")
    }
    return (
        <>
            <div className="main-banner-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content-style-two">
                                <h1>The World&#x27;s Leading Distance-Learning Provider</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                <a class="default-btn" href="#" onClick={hanldeJoinClass}><BiUser />
                                    &nbsp;Join Class For Free
                                    <span></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-image-style-two"><img src="assets/images/banner-img4.png" alt="image" /></div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape1"><img src="assets/images/banner-shape1.png" alt="image" /></div>
                <div className="banner-shape2"><img src="assets/images/banner-shape2.png" alt="image" /></div>
                <div className="banner-shape3"><img src="assets/images/banner-shape3.png" alt="image" /></div>
                <div className="bulb"><img src="assets/images/bulb.png" alt="image" /></div>
            </div>
        </>)
}

export default HeroSection