import '../Footer/footer.css';
import Logo from "../../Assets/sssAssets/logo.png";

function Footer() {
    return (
        <footer
            className="text-center text-lg-start  text-white bg-gradient-to-tl from-gray-800 to to-black  bg-blur-xl"
        >
            <div className='flex flex-col justify-center items-between md:flex-row '>
            <div class="flex items-center w-full ">
               
                <div id="logo">
                <img width={250} src={Logo} className="" alt="" />
            </div>
                    <div class="text-left p-3 w-full md:w-1/3">
                   
                        <p> SPACE-UP CUSAT has accessed a stellar digital congregation of so
                        tons of Instagram followers and Facebook followers. Also
                        extending to Twitter and LinkedIn audiences. By joining forces
                        with SPACE UP CUSAT your brand voice will be reaching a greater
                        audience and apprehending the minds of many.</p>
                    </div>


                  
            </div>

            <h1 className='text-lg ml-4 text-left font-bold text-white mt-4'>Organisers</h1>
            <div className='flex justify-between text-white text-md text-left p-4'>
            
            <p>Aslam + 01 234 567 88 (Organizer)</p>
            <p>Aslam + 01 234 567 88 (Co-Organizer)</p>
    
    
    
    
            </div>
            </div>
         


            <div class="text-center p-1"
            >
                © 2022 SPACE-UP CUSAT. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;