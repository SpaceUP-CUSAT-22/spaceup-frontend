import './footer.css';
import logo from "../../Assets/space_up-logo.png";

function Footer() {
    return (
        <footer
            class="text-center text-lg-start text-white"
        >

<div className='container '>
<div class="row">
                    <div class="text-left col-md-3 pt-4">
                        <div id="logo">
                            <img width={200} src={logo} className="" alt="" />
                        </div>
                      
                    </div>

    <div className='col-md-3 pt-5'>
    
        </div>
        <div className='col-md-6'>
        <h2 class="text-white ">Contact</h2>
        <div className='contact-data d-flex justify-content-around'>
                            <div className='contact-item'>
                                <h5>Aslam</h5>
                                <p className='m-1'>Organiser</p>
                                <p><a href="tel:+4733378901">+ 01 234 567 88</a></p>
                            </div>
                            <div className='contact-item'>
                                <h5>Aslam</h5>
                                <p className='m-1'>Co Organiser</p>
                                <p><a href="tel:+4733378901">+ 01 234 567 89</a></p>
                            </div>
                        </div>

        </div>
    </div>

                    </div>
                    

            <div
                class="text-center p-3 bg-dark-blue"
            >
                © 2022 SPACE-UP CUSAT. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;