import Image from "next/image"
import Footer from "./Footer"
import Header from "./Header"
import BanerImf from 'assets/images/banner-img3.png'
const JoinClassSection = () => {
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
                                    <div className="form-group"><label>Title</label>
                                        <input type="text" class="form-control" placeholder="Name" name="name" value="" />
                                    </div>
                                    <div className="form-group"><label>Gender</label>
                                        <select name="gender" id="gender" class="form-control" >
                                            <option value="" selected>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                    <div className="form-group"><label>Description</label>
                                        <input type="text" class="form-control" placeholder="Description" name="description" value="" />
                                    </div>

                                    <div className="form-group">
                                        <label>Venue</label>
                                        <input type="text" class="form-control" placeholder="Venue" name="venue" value="" />
                                    </div>
                                    <button type="submit" disabled="">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Image src={BanerImf} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default JoinClassSection