import logo from '@/assets/images/logo.png'

const Footer = () => {
    return (
        <>
            <div className=' bg-blue-500 bg-opacity-75 py-8 pb-16'>
                <div className='container mx-auto  md:flex md:justify-around'>
                    <div className=''>
                        <div className='flex md:block justify-center '>
                            <img src={logo} alt='logo' className=" w-40" />
                        </div>
                        <div className='text-center md:text-left'>
                            DIGICom Enteprise spécialisé dans <br />
                            la conception de solution numerique.
                        </div>
                    </div>

                    <div className='mt-9 md:mt-0'>
                        <div className='text-2xl text-center md:text-left'>
                            Contact
                        </div>
                        <div className='text-center md:mt-5 md:text-lg md:ml-6 md:text-left'>
                            +255 0707070707<br />
                            +255 0505050505<br />
                            +255 0101010101<br />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
