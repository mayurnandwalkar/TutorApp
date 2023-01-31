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
            <div class="main-banner-area">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="main-banner-content-style-two">
                                <h1>The World&#x27;s Leading Distance-Learning Provider</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                <a class="default-btn" href="#" onClick={hanldeJoinClass}><BiUser />
                                    &nbsp;Join Class For Free
                                    <span></span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="main-banner-image-style-two"><img src="assets/images/banner-img4.png" alt="image" /></div>
                        </div>
                    </div>
                </div>
                <div class="banner-shape1"><img src="assets/images/banner-shape1.png" alt="image" /></div>
                <div class="banner-shape2"><img src="assets/images/banner-shape2.png" alt="image" /></div>
                <div class="banner-shape3"><img src="assets/images/banner-shape3.png" alt="image" /></div>
                <div class="bulb"><img src="assets/images/bulb.png" alt="image" /></div>
            </div>
        </>)
}

export default HeroSection