import Footer from "components/Footer"
import Header from "components/Header"


const joinasteacher = () => {
    return (
        <>
            <Header />
            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <img src="assets/images/strategy.png" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <h2>Create A className</h2>
                                <form>
                                    <div className="form-group"><label>Title</label>
                                        <input type="text" className="form-control" placeholder="Title" name="name" value="" />
                                    </div>
                                    <div className="form-group"><label>Topic</label>
                                        <select name="topic" id="topic" className="form-control" >
                                            <option value="" selected>Select Topic</option>
                                            <option value="React js">React js</option>
                                            <option value="Wordpress">Wordpress</option>
                                            <option value="Next Js">Next Js</option>
                                        </select>
                                    </div>
                                    <div className="form-group"><label>Description</label>
                                        <input type="text" className="form-control" placeholder="Description" name="description" value="" />
                                    </div>
                                    <div className="form-group"><label>Date And Time</label>
                                        <input type="datetime-local" className="form-control" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Venue</label>
                                        <input type="text" className="form-control" placeholder="Venue" name="venue" value="" />
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