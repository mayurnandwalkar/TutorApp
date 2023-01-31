import Footer from "./Footer"
import Header from "./Header"

const JoinClassSection = () => {
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
                                    <div class="form-group"><label>Title</label>
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
                                    <div class="form-group"><label>Description</label>
                                        <input type="text" class="form-control" placeholder="Description" name="description" value="" />
                                    </div>

                                    <div class="form-group">
                                        <label>Venue</label>
                                        <input type="text" class="form-control" placeholder="Venue" name="venue" value="" />
                                    </div>
                                    <button type="submit" disabled="">Submit</button>
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

export default JoinClassSection