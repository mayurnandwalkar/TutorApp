import Image from "next/image"
import { useRouter  } from "next/router"
import { BiBookOpen, BiMeteor, BiRocket, BiTimeFive, BiUser } from "react-icons/bi"
import BulbImg from 'assets/images/bulb.png'



const DistanceLearning = () => {
    const router = useRouter()

    const hanldeJoinclass=(e)=>{
        e.preventDefault();
        router.push("/joinclassforstudent")
    }
    return (
        <>
            <div className="about-area ptb-100 bg-f9fbff">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image"><Image src={AboutImg12} alt="image" /></div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content"><span className="sub-title">DISTANCE LEARNING</span>
                                <h2>Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the
                                    World!</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <ul className="features-list">
                                    <li><span><BiMeteor/>&nbsp;Expert Instruction</span></li>
                                    <li><span><BiTimeFive/>&nbsp;Lifetime Access</span></li>
                                    <li><span><BiBookOpen/>&nbsp;Remote Learning</span></li>
                                    <li><span><BiRocket/>&nbsp;Self Development</span></li>
                                </ul>
                                <a className="default-btn" href="#" onClick={hanldeJoinclass}><BiUser />
                                &nbsp; Join class
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bulb"><Image src={BulbImg} alt="image" /></div>
            </div>
        </>
    )
}

export default DistanceLearning