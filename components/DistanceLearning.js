import { useRouter  } from "next/router"
import { BiBookOpen, BiMeteor, BiRocket, BiTimeFive, BiUser } from "react-icons/bi"

const DistanceLearning = () => {
    const router = useRouter()

    const hanldeJoinClass=(e)=>{
        e.preventDefault();
        router.push("/joinclassforstudent")
    }
    return (
        <>
            <div class="about-area ptb-100 bg-f9fbff">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-image"><img src="assets/images/about-img12.png" alt="image" /></div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="about-content"><span class="sub-title">DISTANCE LEARNING</span>
                                <h2>Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the
                                    World!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <ul class="features-list">
                                    <li><span><BiMeteor/>&nbsp;Expert Instruction</span></li>
                                    <li><span><BiTimeFive/>&nbsp;Lifetime Access</span></li>
                                    <li><span><BiBookOpen/>&nbsp;Remote Learning</span></li>
                                    <li><span><BiRocket/>&nbsp;Self Development</span></li>
                                </ul>
                                <a class="default-btn" href="#" onClick={hanldeJoinClass}><BiUser />
                                &nbsp; Join Class
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bulb"><img src="assets/images/bulb.png" alt="image" /></div>
            </div>
        </>
    )
}

export default DistanceLearning