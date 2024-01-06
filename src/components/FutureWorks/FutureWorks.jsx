import { FaRegFlag } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { FaSmileWink } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { Link } from "react-router-dom";

const FutureWorks = () => {
    const futureWorksInfo = [
        {
            name: 'Innovatia Project Display (Science,Business,IT)',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            team: 'দলগত / একক',
            con: 'দলগত হলে দলের সকলকে আলাদা  আলাদা রেজিষ্ট্রেশন করতে হবে',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            imogi: `${<FaFaceSmile />}`,
            color: 'from-slate-950 to-slate-700',
        },
        {
            name: 'Lens Legends Photography exhibition (Camera & Mobile)',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            con: 'বিঃদ্রঃ ছবি গুলো অবশ্যই ২০ জানুয়ারি ২০২৪ তারিখের মধ্যে spscevents24@gmail.com মেইলে প্রেরণ করতে হবে এবং মেইলে রেজিস্টার ফোন নাম্বার ও ডিভাইসের নাম উল্লেখ করতে হবে। উক্ত তারিখের পূর্বে প্রেরণ না করলে এবং উল্লেখিত তথ্য প্রদান না করলে ছবিটি বাতিলবলেগণ্যহবে। ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileWink />}`,
            color: 'from-slate-950 to-cyan-700'
        },
        {
            name: 'Canva Quest Art Challenge',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-violet-700'
        },
        {
            name: 'Enigma Explorer Treasure Hunt',
            movie: ["Harry Potter", "Marvel", "Titanic", "Disney", "Pixar"],
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            team: 'দলগত প্রতিযোগিতা',
            con: 'সর্বোচ্চ সদস্য ২ জন',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-cyan-700'
        },
        {
            name: `Groove gala dance floor (Modern & Folk)`,
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-slate-700'
        },
        {
            name: 'Story Telling - Bangla',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-cyan-700'
        },
        {
            name: 'Story Writing - Bangla',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-cyan-700'
        },
        {
            name: 'Al-Khwarizmi Math Olympiad',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-slate-700'
        },
        {
            name: "Rubik's Cube",
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            team: 'একক প্রতিযোগিতা',
            con: 'বিঃদ্রঃ নিজেদের কিউব আনতে হবে',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-slate-700'
        },
        {
            name: 'Silver screen Film making',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            team: 'একক প্রতিযোগিতা',
            con3: 'ভিডিও দৈর্ঘ্যঃ সর্বোচ্চ ২.৫মিনিট',
            con: 'বিঃদ্রঃ ভিডিও গুলো অবশ্যই ২০ জানুয়ারি ২০২৪ তারিখের মধ্যে spscevents24@gmail.com মেইলে প্রেরণ করতে হবে এবং মেইলে রেজিস্টার ফোন নাম্বার উল্লেখ করতে হবে। উক্ত তারিখের পূর্বে প্রেরণ না করলে এবং উল্লেখিত তথ্য প্রদান না করলে ভিডিওটি বাতিল বলে গণ্য হবে',
            con2: 'একজন অংশগ্রহণকারী সর্বোচ্চ একটি ভিডিও দিতে পারবেন। একাধিক দিলে বাতিল করা হবে',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-violet-700'
        },
        {
            name: 'Quizzical Conclave quiz (Gk)',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'দলগত প্রতিযোগিতা',
            con: 'সর্বোচ্চ সদস্য 3 জন',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-violet-700'
        },
        {
            name: "Queen's Gambit chess",
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-violet-700'
        },
        {
            name: 'Singing Maestro (Modern & Folk)',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-slate-700'
        },
        {
            name: 'Rapid Rhetoric Extempore Speech (Bangla & English)',
            place: 'সেনা পাবলিক স্কুল ও কলেজ',
            date: '২৬ ও ২৭ জানুয়ারি ২০২৪',
            team: 'একক প্রতিযোগিতা',
            imogi: `${<FaSmileBeam />}`,
            color: 'from-slate-950 to-cyan-700'
        },
    ]

    return (
        <>
            <div className="px-3  xl:px-0 pb-20 bg-slate-300 mb-4">

                <div className="text-center py-16">
                    <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                        <span>
                            <FaRegFlag />
                        </span>
                        আয়োজন
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-2">আমাদের কার্যক্রম সমূহ</h1>
                </div>

                <div className="max-w-[1200px] mx-auto">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {
                            futureWorksInfo.map((futureWorks, idx) =>

                                <div key={idx}
                                    className={`
                        bg-gradient-to-tr text-white  rounded-md px-10 py-6 flex flex-col
                        ${futureWorks.color}
                        `}>
                                    <div className="text-center flex flex-col justify-center align-center  ">
                                        <h3 className=" text-3xl font-semibold text-violet-400 capitalize">
                                            {futureWorks.name}
                                        </h3>

                                        <div className="flex flex-wrap flex-col justify-center  gap-12 mt-4">
                                            {
                                                futureWorks.movie && <div className="text-center flex gap-1">
                                                    Movie List :

                                                    {
                                                        futureWorks.movie.map((movie, index) => <p>{index + 1}) {movie}</p>)
                                                    }

                                                </div>
                                            }
                                            <div className="grid  text-lg">
                                                <p className="text-xl font-bold">স্থান</p>
                                                <p>{futureWorks.place}</p>
                                            </div>
                                            <div className="grid  text-lg">
                                                <p className="text-xl font-bold">{futureWorks.team}</p>
                                                <p className="font-bold">{futureWorks.con3}</p>
                                                <p>{futureWorks.con}</p>
                                                <p>{futureWorks.con2}</p>
                                            </div>
                                            <div className="grid  text-lg">
                                                <p className="text-xl font-bold">সময়</p>
                                                <p>{futureWorks.date}</p>
                                            </div>
                                            <div className="grid  text-lg">
                                                <Link to={`/eventDetail`} className="rounded-md mx-auto  bg-green-500 px-4 py-2 text-white text-lg cursor-pointer mt-2">নিয়মাবলি দেখুন</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>

            </div>

        </>
    );
};

export default FutureWorks;