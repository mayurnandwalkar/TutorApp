import Footer from "components/Footer"
import Header from "components/Header"


const joinasteacher = () => {
    return (
        <>
            <Header />
            <div class="profile-authentication-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <img src="assets/images/strategy.png" />
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="login-form">
                                <h2>Create A Class</h2>
                                <form>
                                    <div class="form-group"><label>Title</label>
                                        <input type="text" class="form-control" placeholder="Title" name="name" value="" />
                                    </div>
                                    <div class="form-group"><label>Topic</label>
                                        <select name="topic" id="topic" class="form-control" >
                                            <option value="" selected>Select Topic</option>
                                            <option value="React js">React js</option>
                                            <option value="Wordpress">Wordpress</option>
                                            <option value="Next Js">Next Js</option>
                                        </select>
                                    </div>
                                    <div class="form-group"><label>Description</label>
                                        <input type="text" class="form-control" placeholder="Description" name="description" value="" />
                                    </div>
                                    <div class="form-group"><label>Date And Time</label>
                                        <input type="datetime-local" class="form-control" value="" />
                                    </div>
                                    <div class="form-group">
                                        <label>Venue</label>
                                        <input type="text" class="form-control" placeholder="Venue" name="venue" value="" />
                                    </div>
                                    <button type="submit" disabled="">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default joinasteacher