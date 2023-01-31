import Footer from "components/Footer"
import Header from "components/Header"

const joinclassforstudent = () => {
    return (
        <>
            <Header />
            <div class="profile-authentication-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="login-form">
                                <h2>Join As Student</h2>
                                <form>
                                    <div class="form-group"><label>Name</label>
                                        <input type="text" class="form-control" placeholder="Name" name="name" value="" />
                                    </div>
                                    <div class="form-group"><label>Gender</label>
                                        <select name="gender" id="gender" class="form-control" >
                                            <option value="" selected>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" class="form-control" />
                                    </div>
                                    <div class="form-group"><label>City</label>
                                        <input type="text" class="form-control" placeholder="City" name="city" value="" />
                                    </div>
                                    <div class="form-group"><label>State</label>
                                        <input type="text" class="form-control" placeholder="State" name="state" value="" />
                                    </div>
                                    <button type="button" >Join</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <img src="assets/images/banner-img3.png" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default joinclassforstudent

