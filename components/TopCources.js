import { BiBook, BiGroup } from "react-icons/bi"

const TopCources = () => {
    return (
        <>
            <div className="courses-area ptb-100">
                <div className="container">
                    <div className="section-title"><span className="sub-title">GO AT YOUR OWN PACE</span>
                        <h2>Top Selling Courses</h2>
                        <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We
                            ensure that you will never regret it!</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a class="d-block image" href="#">
                                        <img src="assets/images/video-img2.jpg" alt="The Complete Digital Marketing Course - 12 Courses in 1" /></a>
                                    <a class="fav" href="#">
                                        <i class="flaticon-heart"></i>
                                    </a>
                                    <div className="price shadow">$60</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src="assets/images/user1.jpg" class="rounded-circle" alt="EnvyTheme" />
                                        <span>EnvyTheme</span>
                                    </div>
                                    <h3 title="The Complete Digital Marketing Course - 12 Courses in 1">
                                        <a href="#">The Complete Digital...</a>
                                    </h3>
                                    <p>Grow a Business Online From Scratch
                                        Make Money as an Affiliate Marketer
                                        Land a High-Paying Job in Di...</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><BiBook /> 20 Lessons</li>
                                        <li><BiGroup /> 16 Students</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image">
                                    <a class="d-block image" href="#">
                                        <img src="assets/images/video-img1.jpg" alt="The Python Mega Course: Build 10 Real World Applications" /></a>
                                    <a class="fav" href="#"><i class="flaticon-heart"></i></a>
                                    <div className="price shadow">$15</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src="assets/images/user1.jpg" class="rounded-circle" alt="EnvyTheme" />
                                        <span>EnvyTheme</span>
                                    </div>
                                    <h3 title="The Python Mega Course: Build 10 Real World Applications"><a
                                        href="#">The Python Mega
                                        Cour...</a></h3>
                                    <p>Go from a total beginner to a confident Python programmer
                                        Create 10 real-world Python programs...</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><BiBook /> 15 Lessons</li>
                                        <li><BiGroup /> 12 Students</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-courses-box">
                                <div className="courses-image"><a class="d-block image"
                                    href="#">
                                    <img src="assets/images/success-story.jpg" alt="The Complete React Js &amp; Redux Course - Build Modern Web Apps" /></a>
                                    <a class="fav" href="#"><i class="flaticon-heart"></i></a>
                                    <div className="price shadow">$16</div>
                                </div>
                                <div className="courses-content">
                                    <div className="course-author d-flex align-items-center">
                                        <img src="assets/images/user1.jpg" class="rounded-circle" alt="EnvyTheme" />
                                        <span>EnvyTheme</span>
                                    </div>
                                    <h3 title="The Complete React Js &amp; Redux Course - Build Modern Web Apps"><a
                                        href="#">The Complete React
                                        J...</a></h3>
                                    <p>Learn the modern way of building web applications
                                        Master React&#x27;s Compositional Model
                                        Build an Instag...</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li><BiBook /> 8 Lessons</li>
                                        <li><BiGroup /> 4 Students</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="courses-info">
                                <p>Enjoy the top notch learning methods and achieve next level skills! You are the creator
                                    of your own career &amp; we will guide you through that. 
                                    <a href="#">Join Free Now.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopCources