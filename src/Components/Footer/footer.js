import './footer.css';
import logo from "../../Assets/space_up-logo.png";

function Footer() {
    return (
        <footer
            class="text-center text-lg-start text-white"
        >

                <div class="container py-5">
                    <div class="row">
                        <div class="text-left col-md-6">
                            <div id="logo">
                                <img width={200} src={logo} className="" alt="" />
                            </div>
                            <p className='mt-2'>
                                SPACE-UP CUSAT has accessed a stellar digital congregation of so
                                tons of Instagram followers and Facebook followers. Also
                                extending to Twitter and LinkedIn audiences. By joining forces
                                with SPACE UP CUSAT your brand voice will be reaching a greater
                                audience and apprehending the minds of many.
                            </p>
                        </div>

                        <div class="mx-auto footer-contact text-md-right col-md-6">
                            <h2 class="text-white">Contact</h2>
                            <p>Organiser</p>
                            <p><a href="tel:+4733378901">+ 01 234 567 88</a></p>
                            <p>Co Organiser</p>
                            <p><a href="tel:+4733378901">+ 01 234 567 89</a></p>
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