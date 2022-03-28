import Logo from "../../Assets/sssAssets/logo.png";

function Footer() {
    return (
        <div
            class="text-center text-lg-start text-white texture-bg font-poppins"
        >
            <div class="container p-4 pb-0">
                <section class="">
                    <div class="flex flex-row">

                        <div class="mx-auto mt-3 text-left md:text-center flex-1">
                            <h6 class="text-uppercase mb-4 font-bold text-xl font-merry">Quick Links</h6>
                            <p>
                                <a href="https://drive.google.com/file/d/1h9h_KkKp7TEvZ_zZej8ruYp4pOxvY2nv/view?usp=sharing" class="text-white no-underline">Terms and Condition</a>
                            </p>
                            <p>
                                <a href="https://drive.google.com/file/d/1rtzsMz1piNPr_QpdmCIsj6u5IxI_L3My/view?usp=sharing" class="text-white no-underline">Refund Policy</a>
                            </p>
                        </div>

                        <div class="mx-auto mt-3 my-auto flex-1 hidden sm:block">
                            <img src={Logo} alt="sss logo" className="w-1/4 md:w-3/5 mx-auto" />
                        </div>

                        <div class="mx-auto mt-3 text-right md:text-center flex-1">
                            <h6 class="text-uppercase mb-4 font-bold text-xl font-merry">Organisers</h6>
                            <p className="mb-1">Mohammed Aslam</p>
                            <p className="mb-1"><a className="no-underline hover:text-gray-300" href="tel:+91 95393 33732">+91 95393 33732</a></p>
                            <p className="mb-1">R Nehha Mariam</p>
                            <p className="mb-1"><a className="no-underline hover:text-gray-300" href="tel:+91 75940 66423">+91 75940 66423</a></p>
                        </div>
                    </div>
                </section>
            </div>

            <div
                class="text-center p-3"
            >
                © 2022 |
                <strong><a class="text-white no-underline" href="https://spaceupcusat.org/"
                > spaceupcusat.org</a
                ></strong>
            </div>
        </div>
    );
}

export default Footer;