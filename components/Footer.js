
import Link from 'next/link';
import { BiCopyright, BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer class="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
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
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Explore</h3>
                                <ul class="footer-links-list">
                                    <li><Link href={"/"}>Home</Link></li>
                                    <li><Link href={"/about"}>About</Link></li>
                                    <li><Link href={"/blogs"}>Blogs</Link></li>
                                    <li><Link href={"/joinasteacher"}>Create Class</Link></li>
                                    <li><Link href={"/joinclassforstudent"}>Join Class </Link></li>

                                    <li><Link href={"/contact"}>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Resources</h3>
                                <ul class="footer-links-list">
                                    <li><Link href={"/joinasteacher"}>Create Class</Link></li>
                                    <li><Link href={"/joinclassforstudent"}>Join Class </Link></li>
                                    <li><Link href={"/blogs"}>Blogs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                <ul class="footer-contact-info">
                                    <li><BiMap />&nbsp;&nbsp;Lorem Ipsum is simply dummy text of USA </li>
                                    <li><BiEnvelope />&nbsp;&nbsp;<a href="#"><span className="__cf_email__" data-cfemail="">test@gmail.com</span></a></li>
                                    <li><BiPhone />&nbsp;&nbsp;<a href="tel:+557854578964">+55 785 4578964</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p><BiCopyright />2023 Proudly Powered by Tutor</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        </>
    )
}

export default Footer