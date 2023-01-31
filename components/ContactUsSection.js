
import { BiMap, BiPhone, BiTimeFive } from "react-icons/bi";
const ContactUsSection = () => {
    return (
        <>
            <div class="contact-area ptb-100">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="contact-info">
                                <h2>Get in Touch</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra.</p>
                                <ul>
                                    <li>
                                        <div class="icon"><BiMap /></div>
                                        <h3>Our Address</h3>
                                        <p>2750 Quadra Street Victoria Road, New York, Canada</p>
                                    </li>
                                    <li>
                                        <div class="icon"><BiPhone /></div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+44457895789">(+44) - 45789 - 5789</a></p>
                                        <p>GMail:
                                            <a href="#">
                                                <span class="__cf_email__" data-cfemail="">test@gmail.com</span>
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <div class="icon"><BiTimeFive /></div>
                                        <h3>Hours of Operation</h3>
                                        <p>Monday - Friday: 09:00 - 20:00</p>
                                        <p>Sunday &amp; Saturday: 10:30 - 22:00</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="contact-form">
                                <h2>Ready to Get Started?</h2>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form id="contactForm">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group"><input type="text" name="name" placeholder="Your Name"
                                                value="" />
                                                <div class="invalid-feedback" style={{ "display": "block" }}></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="form-group"><input type="text" name="email"
                                                placeholder="Your email address" value="" />
                                                <div class="invalid-feedback" style={{ "display": "block" }}></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6">
                                            <div class="form-group"><input type="text" name="number"
                                                placeholder="Your phone number" value="" />
                                                <div class="invalid-feedback" style={{ "display": "block" }}></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group"><input type="text" name="subject"
                                                placeholder="Your Subject" value="" />
                                                <div class="invalid-feedback" style={{ "display": "block" }}></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-group"><textarea name="text" cols="30" rows="5"
                                                placeholder="Write your message..."></textarea>
                                                <div class="invalid-feedback" style={{ "display": "block" }}></div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-sm-12"><button type="submit" class="default-btn">Send
                                            Message</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsSection