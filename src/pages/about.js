import Footer from "components/Footer"
import Header from "components/Header"
const about = () => {
    return (
        <>
            <Header />
            <div className="about-area-two ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="about-content-box"><span className="sub-title">Learning From Tutor</span>
                                <h2>Build Your Project Management Skills Online, Anytime</h2>
                                <p>Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a
                                    new skill quickly like, project team leadership or agile? Browse our most popular online
                                    courses.</p>
                                <p><strong>Grow your knowledge and your opportunities with thought leadership, training and
                                    tools.</strong></p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-video-box">
                                <div className="image">
                                    <img src="assets/images/about-img5.jpg" alt="image" />
                                </div>
                                <div className="shape10"><img src="assets/images/shape9.png" alt="image" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape3"><img src="assets/images/shape3.png" alt="image" /></div>
                <div className="shape4"><img src="assets/images/shape4.png" alt="image" /></div>
                <div className="shape2"><img src="assets/images/shape2.png" alt="image" /></div>
            </div>
            <div className="get-instant-courses-area-two bg-f9fbff">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="get-instant-courses-content-style-two"><span className="sub-title">GET INSTANT ACCESS TO
                                THE FREE</span>
                                <h2>Self Development Course</h2>
                                <p>With The Open University you can study whenever and wherever you choose. We have students
                                    in over 128 countries, and a global reputation as a pioneer in the field of flexible
                                    learning. Our flexible teaching also means, if you travel often or need to relocate, you
                                    can continue to study wherever you go.</p><a className="default-btn"
                                        href="#"><i className="flaticon-user"></i>Start For Free<span></span></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="get-instant-courses-image-style-two"><img src="assets/images/setting.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bulb">
                    <img src="assets/images/bulb2.png" alt="image" />
                </div>
            </div>
            <div className="ptb-100">
                <div className="premium-access-area">
                    <div className="container">
                        <div className="premium-access-content">
                            <span className="sub-title">Go at your own pace</span>
                            <h2>Give their limitless potential unlimited access</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.</p>
                            <a className="default-btn" href="#">
                                Give Premium Access</a>
                        </div>
                    </div>
                    <div className="shape3"><img src="assets/images/shape3.png" alt="image" /></div>
                    <div className="shape4"><img src="assets/images/shape4.png" alt="image" /></div>
                    <div className="shape8"><img src="assets/images/shape7.png" alt="image" /></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default about