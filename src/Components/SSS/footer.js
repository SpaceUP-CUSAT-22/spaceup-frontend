import '../Footer/footer.css';
import Logo from "../../Assets/sssAssets/logo.png";

function Footer() {
    return (
        <footer
            className="text-center text-lg-start text-white bg-gradient-to-tl from-gray-800 to to-black  bg-blur-xl"
        >

            <div class="grid grid-cols-2 p-5 place-items-center w-full">
                <div class="">
                    <div class="text-left col-md-6">
                        <div id="logo">
                            <img width={200} src={Logo} className="" alt="" />
                        </div>
                        <p className='mt-2'>
                            SPACE-UP CUSAT has accessed a stellar digital congregation of so
                            tons of Instagram followers and Facebook followers. Also
                            extending to Twitter and LinkedIn audiences. By joining forces
                            with SPACE UP CUSAT your brand voice will be reaching a greater
                            audience and apprehending the minds of many.
                        </p>
                    </div>

                 
                </div>
            </div>

            <div className=''>
            
            
            
            </div>


            <div
                class="text-center p-3 bg-black"
            >
                © 2022 SPACE-UP CUSAT. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;