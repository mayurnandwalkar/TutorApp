
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer class="footer-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                {/* <a class="logo" href="index.html"><img src="images/logo2.png" alt="logo" /></a> */}
                                <h2 className="text-white">Tutor</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                </p>
                                <ul class="social-link">
                                    <li><a href="#" class="d-block" target="_blank"><BsFacebook /></a></li>
                                    <li><a href="#" class="d-block" target="_blank"><BsTwitter /> </a></li>
                                    <li><a href="#" class="d-block" target="_blank"><BsLinkedin /></a></li>
                                    <li><a href="#" class="d-block" target="_blank"> <BsInstagram /></a></li>


                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <div class="single-footer-widget pl-5">
                                <h3>Explore</h3>
                                <ul class="footer-links-list">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Become A Teacher</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Resources</h3>
                                <ul class="footer-links-list">
                                    <li><a href="#">Student Success</a></li>
                                    <li><a href="#">Scholarships</a></li>
                                    <li><a href="#">For Business</a></li>
                                    <li><a href="#">Go Premium</a></li>
                                    <li><a href="#">Team Plans</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Address</h3>
                                <ul class="footer-contact-info">
                                    <li><i class="bx bx-map"></i>Lorem Ipsum is simply dummy text of USA </li>
                                    <li><i class="bx bx-phone-call"></i><a href="tel:+44587154756">+1 (123) 456 7890</a>
                                    </li>
                                    <li><i class="bx bx-envelope"></i>
                                        <a href="cdn-cgi/l/email-protection.html#4b232e2727240b2e2f2e263265282426">
                                            <span class="__cf_email__" data-cfemail="8ce4e9e0e0e3cce9e8e9e1f5a2efe3e1">test@gmail.com</span></a>
                                    </li>
                                    <li><i class="bx bxs-inbox"></i><a href="tel:+557854578964">+55 785 4578964</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom-area">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6">
                                <p><i class="bx bx-copyright"></i>2023 Proudly Powered by Tutor</p>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <ul>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="terms-of-service.html">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>                
            </footer>
        </>
    )
}

export default Footer