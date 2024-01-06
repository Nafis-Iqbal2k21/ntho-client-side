import logo from '../../assets/images/Logo/logo.png'
import { FaRegUserCircle } from "react-icons/fa";

const AboutNinish = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-3 xl:px-0 py-14 '>
            <div className="text-center pb-16">
                    <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                        <span>
                            <FaRegUserCircle/>
                        </span>
                        ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-2">আমাদের সম্পর্কে</h1>
                </div>

                <div className="bg-violet-900 text-white text-justify px-4 md:px-12 py-12 rounded-md mb-8">
                    <div className=" mx-auto mb-4">
                        <img src={logo} className='h-[3.5rem] w-fit mx-auto' alt="Ninish Logo" />
                    </div>
                    <p className="text-lg">
                    নতুন বছরের শুভেচ্ছা! "সেনা পাবলিক স্কুল ও কলেজ", ২০২৩ শিক্ষাবর্ষে "জাতীয় শিক্ষা সপ্তাহ" কর্তৃক স্বীকৃত বাংলাদেশের শ্রেষ্ঠ শিক্ষাপ্রতিষ্ঠান। তারই ধারাবাহিকতা বজায় রাখতে ২০২৪ শিক্ষাবর্ষের জানুয়ারি মাসে আমরা প্রথমবারের মতো আয়োজন করতে যাচ্ছি -"1st National Talent Hunt Odyssey-24"! এই ফেস্টটি ২৬ জানুয়ারি ২০২৪ থেকে ২৭ জানুয়ারি ২০২৪ দুই দিন ব্যাপি চলমান থাকবে। আমাদের এই ফেস্টে থাকছে বিভিন্ন ধরনের প্রতিযোগিতা, বিনোদনমূলক কার্যক্রম ও জমকালো সাংস্কৃতিক অনুষ্ঠান। যার দ্বারা শিক্ষার্থীরা একদিকে যেমন নতুন অভিজ্ঞতা লাভ করবে, ঠিক তেমনই তাদের সৃজনশীল প্রতিভা প্রকাশের সুযোগ পাবে। সারা দেশের বিভিন্ন প্রান্ত থেকে শিক্ষার্থীরা এই ফেস্টটিতে অংশগ্রহণ করতে পারবে। এই ফেস্টের আয়োজনে থাকছে "SPSC Students' Club"। যেকোনো মেধাবী শিক্ষার্থীর সুপ্ত প্রতিভা ও দক্ষতা প্রকাশের সুযোগ করে দিচ্ছি আমরা।


                    </p>

                </div>
        </div>
    );
};

export default AboutNinish;