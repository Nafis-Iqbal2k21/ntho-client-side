import { SiCrunchyroll } from "react-icons/si";
const Mission = () => {
    const missionInfo =[
        {
         nameBangla: 'সমস্যা মোকাবেলার সক্ষমতা অর্জন ',
         nameEnglish: 'Acquiring problem solving skills'
        },
        {
         nameBangla: 'সৃজনশীল ও ভাষাগত  দক্ষতা বৃদ্ধি',
         nameEnglish: 'Increase creative and linguistic skills'
        },
        {
         nameBangla: 'চিন্তাভাবনা ও বুদ্ধিমত্তার বিকাশ',
         nameEnglish: 'Development of thinking and intelligence'
        },
        {
         nameBangla: 'সম্প্রেষণ উন্নতি ও নেতৃত্ব',
         nameEnglish: 'Communication Enhancement & Leadership'
        },
        {
         nameBangla: 'সাংস্কৃতিক বিনিময় ',
         nameEnglish: 'Cultural exchange'
        },
        {
         nameBangla: 'অনন্য ও শক্তিশালী শেখার সুযোগ ',
         nameEnglish: 'Unique and powerful learning opportunities'
        },
        {
         nameBangla: 'দলগত কাজের দক্ষতা বৃদ্ধি',
         nameEnglish: 'Enhance teamwork skills'
        },
        {
         nameBangla: 'স্মার্ট সিটিজেন',
         nameEnglish: 'Smart Citizen'
        },
    ]
    return (
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0">

            <div className="text-center py-16">
                <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                    <span>
                        <SiCrunchyroll />
                    </span>
                    মিশন
                </p>
                <h1 className="text-4xl sm:text-5xl font-semibold mt-2">আমাদের মিশন</h1>
            </div>
            <div className="pb-8">
               <p className="text-lg italic text-center">
                    আগামীর ভবিষ্যৎকে সঠিকভাবে মূল্যায়নের জন্য আমরা সবার জন্য সমান এবং সহজভাবে সহ-শি ক্ষা চর্চার
                    পরিবেশ তৈরি করি। স্মার্ট বাংলাদেশ গঠনে আগামীর ভবিষ্যৎ কে নিরলস প্রচেষ্টা ও উদ্ভাবনের মাধ্যমে
                    সহ-শিক্ষা কার্যক্রমের প্রতি আগ্রহ গড়ে তুলে , গুণগত শিক্ষার সকল প্রতি বন্ধকতা ভেঙে, একটি সহজ
                    অনলাইন ভিত্তিক সহ-শিক্ষার ইকোসিস্টেম গড়ে তুলে আগামীর স্মার্ট সিটিজেন এবং স্মার্ট কমিউনিটি কে
                    পুরো বিশ্বের সামনে আমরা তুলে ধরতে চাই
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 py-8 text-lg gap-4">
                    {
                        missionInfo.map((mission,idx) => <div key={idx}
                        className="text-center bg-gradient-to-tr from-green-950 to-green-700 text-white p-4 rounded-md"
                        >
                            <p>{mission.nameBangla}</p>
                            <p>{mission.nameEnglish}</p>
                        </div> )
                    }
                </div>


            </div>


        </div>
    );
};

export default Mission;