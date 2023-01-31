
const RegsiterLoginForms = () => {
    return (
        <>
            <div class="profile-authentication-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="login-form">
                                <h2>Register</h2>
                                <form>
                                    <div class="form-group"><label>Name</label><input type="text" class="form-control"
                                        placeholder="Full Name" name="name" value="" /></div>
                                    <div class="form-group"><label>Email</label><input type="email" class="form-control"
                                        placeholder="Email" name="email" value="" /></div>
                                    <div class="form-group"><label>Password</label><input type="password"
                                        class="form-control" placeholder="Password" name="password" value="" /></div>
                                    <div class="form-group"><label>Confirm Password</label><input type="password"
                                        class="form-control" placeholder="Confirm Password" name="confirmPassword"
                                        value="" /></div>
                                    <p class="description">The password should be at least eight characters long. To make it
                                        stronger, use upper and lower case letters, numbers, and symbols like ! &quot; ? $ %
                                        ^ &amp; )</p><button type="submit" disabled="">Register</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="login-form">
                                <h2>Login</h2>
                                <form>
                                    <div class="form-group"><label>Email</label><input type="email" class="form-control"
                                        placeholder="Email" name="email" value="" /></div>
                                    <div class="form-group"><label>Password</label><input type="password"
                                        class="form-control" placeholder="Password" name="password" value="" /></div>
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                            <p><input type="checkbox" id="test2" /><label for="test2">Remember me</label>
                                            </p>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap"><a
                                            class="lost-your-password" href="#">Lost your
                                            password?</a></div>
                                    </div><button type="submit" disabled="">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegsiterLoginForms