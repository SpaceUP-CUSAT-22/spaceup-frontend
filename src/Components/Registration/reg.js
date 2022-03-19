import "../Login/login.css";
import { Link } from "react-router-dom";


const Reg = () => {
  return (
    <>
    
      <div classNameName="parent">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Registration</h2>
                
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h3 className="mb-4 text-center">General Information </h3>

                  <form action="#" className="signin-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Second Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Institution / Company" 
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        BOOK SEAT
                      </button>

                     
                     
                    </div>
                    
                    <div className="form-group d-md-flex">
                      <div className="w-50">
                          
                      </div>
                    </div>
                  </form>

                  
               
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Reg;
