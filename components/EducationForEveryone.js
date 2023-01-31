import { BiBrain, BiCheckShield, BiWorld } from "react-icons/bi"


const EducationForEveryone = () => {
    return (
        <>
            <div class="features-area pt-100 pb-70 bg-fff8f8">
                <div class="container">
                    <div class="section-title"><span class="sub-title">EDUCATION FOR EVERYONE</span>
                        <h2>Online Coaching Lessons For Remote Learning​</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="features-box">
                                <div class="icon">
                                    <BiBrain />
                                </div>
                                <h3>Learn the Latest Skills</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <a class="link-btn" href="#">Start Now!</a>
                                <div class="back-icon">
                                    <BiBrain />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="features-box">
                                <div class="icon">
                                    <BiCheckShield />
                                </div>
                                <h3>Learn from Industry Experts</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <a class="link-btn" href="#">Start Now!</a>
                                <div class="back-icon">
                                    <BiCheckShield />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="features-box">
                                <div class="icon">
                                    <BiWorld />
                                </div>
                                <h3>Learn From Anywhere</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <a class="link-btn" href="#">Start Now!</a>
                                <div class="back-icon">
                                    <BiWorld />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationForEveryone