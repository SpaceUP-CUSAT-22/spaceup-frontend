import "./login.css";

const Login = () => {
  return (
    <>
      <div classNameName="parent">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Login</h2>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h3 className="mb-4 text-center">Have an account?</h3>



                  <form action="#" className="signin-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50">
                        <label className="checkbox-wrap checkbox-primary">
                          Remember Me
                          <input type="checkbox" checked />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      
                    </div>
                  </form>





                  <p className="w-100 text-center">
                    &mdash; Or Sign In With &mdash;
                  </p>
                  <div className="social d-flex text-center">
                    <a href="/" className="px-2 py-2 mr-md-1 rounded">
                      <span className="ion-logo-facebook mr-2"></span> Facebook
                    </a>
                    <a href="/" className="px-2 py-2 ml-md-1 rounded">
                      <span className="ion-logo-twitter mr-2"></span> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
