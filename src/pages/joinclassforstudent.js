import Footer from "components/Footer"
import Header from "components/Header"
import Image from "next/image"

const joinclassNameforstudent = () => {
    return (
        <>
            <Header />
            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <h2>Join As Student</h2>
                                <form>
                                    <div className="form-group"><label>Name</label>
                                        <input type="text" className="form-control" placeholder="Name" name="name" value="" />
                                    </div>
                                    <div className="form-group"><label>Gender</label>
                                        <select name="gender" id="gender" className="form-control" >
                                            <option value="" selected>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="form-group"><label>City</label>
                                        <input type="text" className="form-control" placeholder="City" name="city" value="" />
                                    </div>
                                    <div className="form-group"><label>State</label>
                                        <input type="text" className="form-control" placeholder="State" name="state" value="" />
                                    </div>
                                    <button type="button" >Join</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Image src="assets/images/banner-img3.png" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default joinclassNameforstudent

