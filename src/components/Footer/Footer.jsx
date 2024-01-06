import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo/logo.png'
import elogo from '../../assets/images/Logo/enfinito.png'
import dh from '../../assets/images/Logo/dianahost.png'
import { IoLogoFacebook } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>

<footer className="border-t py-4 bg-white">
    <div className="max-w-[1200px] mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-start">
            <div className="companySlogan w-full justify-self-center md:justify-self-start py-3 md:py-0">
                <div className="logo mx-auto md:mx-0">
                    <img src={logo} alt="Ninish Logo" className='h-[2.90rem] w-fit mx-auto md:mx-0' />
                </div>
                <div className="slogan pt-4">
                    A Co-curricular Fest Organized By SPSC
                </div>
                <div className="slogan pt-4">
                    This Software Developed By <a href="https://www.facebook.com/hello.enfinito/" className='text-blue-400 underline'>Enfinito</a> 
                </div>
                <div className="logo mx-auto md:mx-0">
                    <img src={elogo} alt="Ninish Logo" className='h-[2.90rem] w-fit mx-auto md:mx-0' />
                </div>
                <div className="slogan pt-4">
                    This Website Hosted On <a href="https://www.dianahost.com/" className='text-blue-400 underline'>Dianahost</a>
                </div>
                <div className="logo mx-auto md:mx-0">
                    <img src={dh} alt="Ninish Logo" className='h-[2.90rem] w-fit mx-auto md:mx-0' />
                </div>
            </div>

            <div className="footerNavLinks w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                <h5 className="text-lg font-bold">প্রয়োজনীয় লিংক</h5>
                <ul className="text-center md:text-start grid gap-2 mt-2">
                    <li><Link to={'/registration'} className="hover:text-[#6d28d9]">1st National Talent Hunt Odyssey 24</Link></li>
                    <li><Link to={'/about'}  className="hover:text-[#6d28d9]">আমাদের সম্পর্কে</Link></li>
                    <li>
                        <Link to={'/acount'}  className="hover:text-[#6d28d9]">একাউন্ট এ প্রবেশ করুন</Link>
                    </li>
                </ul>
            </div>

            <div className="footerContact w-full justify-self-center md:justify-self-start border-t md:border-none py-3 md:py-0">
                <h5 className="text-lg font-bold">আমাদের যোগাযোগ মাধ্যম</h5>
                <div className="text-center md:text-start mt-2">
                    <div>
                        {/* <p>কল করুন: <a href="tel:01644042241" className="text-[#6d28d9]">01644042241</a>,
                            <a href="tel:01722842564" className="text-[#6d28d9]">01722842564</a>
                        </p> */}

                        <p>ইমেইল করুন: <a href="mailto:info@ninish.com" className="text-[#6d28d9]">spscevents24@gmail.com</a></p>
                    </div>

                    <div className=" w-fit mx-auto md:mx-0 border-t md:border-0 pt-2 mt-4 md:mt-0 text-4xl hover:text-[#6d28d9]">
                        <Link to={"https://www.facebook.com/spsc.students.club/"} >
                            <IoLogoFacebook/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <p className="text-center md:pt-8">স্বত্ব © ২০২৪ ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
    </div>
</footer>

        </div>
    );
};

export default Footer;