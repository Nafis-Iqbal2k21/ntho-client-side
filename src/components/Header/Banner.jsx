
import money from '../../assets/images/more/money.png'
import logo from '../../assets/images/Logo/eventd.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div >


        {/* <div className="py-10  text-white bg-gradient-to-tr from-green-950 via-blue-950 to-amber-500 "> */}
        <div >

        <div className="banner flex flex-col items-center justify-center py-8 px-3  xl:px-0">

            <img className="pt-0 pb-8  w-[400px] md:w-[500px]" src={logo} alt="English Olympiad 2024 Logo" />

            {/* <div className="text-2xl sm:text-4xl text-center mt-4 grid gap-4 max-w-4xl w-full">
                <p className="w-full">আবিষ্কার, উন্মোচন, উন্নতি: ট্যালেন্ট  সফরে তোমার ওডিসি</p>
                <p className="bg-gradient-to-tr from-amber-800 via-amber-200 to-amber-500 text-black py-4 md:py-10 rounded-md shadow my-8 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
                    <span>
                        <img className="w-24" src={money} alt="Money Icon" />
                    </span>
                    জিতে নিন মোট
                    <span className="text-4xl sm:text-5xl font-semibold">৪ লক্ষ</span>
                    টাকা
                </p>
            </div>
            <div className="text-xl sm:text-3xl text-center mt-4 grid gap-4">
                <p className="text-slate-400">সেনা পাবলিক স্কুল ও কলেজে</p>
                <p className="font-semibold">এই ফেস্টটি দুই দিন ব্যাপি চলমান থাকবে</p>
            </div> */}
            {/* <div className="text-xl sm:text-3xl text-center mt-4 grid gap-4">
                <p className="text-slate-400">ময়মনসিংহ এবং বরিশাল বিভাগের অন্তর্ভুক্ত জেলা সমূহ</p>
                <p className="font-semibold">৯ই ফেব্রুয়ারি</p>
            </div>
            <div className="text-xl sm:text-3xl text-center mt-4 grid gap-4">
                <p className="text-slate-400">সিলেট এবং চট্টগ্রাম বিভাগের অন্তর্ভুক্ত জেলা সমূহ</p>
                <p className="font-semibold">১৬ই ফেব্রুয়ারি</p>
            </div>
            <div className="text-xl sm:text-3xl text-center mt-4 grid gap-4">
                <p className="text-slate-400"> ঢাকা এবং খুলনা বিভাগের অন্তর্ভুক্ত জেলা সমূহ</p>
                <p className="font-semibold">২৩ই ফেব্রুয়ারি</p>
            </div> */}
            {/* <div className="flex justify-center mt-8">
                <Link to={'login'} className="rounded-md text-center bg-green-600 shadow px-4 py-4 text-white text-4xl cursor-pointer">
                    রেজিস্ট্রেশন সম্পন্ন করুন
                </Link>
            </div> */}
        </div>

        </div>



        </div>
    );
};

export default Banner;