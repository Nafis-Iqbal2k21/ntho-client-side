import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useUser from "../../hooks/useUser";
import logo from '../../assets/images/Logo/logo.png'

const MyRegistrationDetails = () => {
    const myRegistrationsData = useLoaderData();
    const [userData, refetch] = useUser();
    const {division, phone} = userData;
    const { name, userEmail,
        image,   dateOfBirth, district, group, institute, category, event, amountMoney, translationID, senderNumber, receiverNumber, refer } = myRegistrationsData;



    return (
        <>
            <Helmet>
                <title>ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি | আমার রেজিস্ট্রেশন বিস্তারিত</title>
            </Helmet>

            <div className=" pb-14 px-2 lg:px-0 bg-gray-200">
                <div className="h-[200px]">
                    <img src={logo} alt="Ninish Image Not Found" className="w-[200px] text-center mx-auto" />
                </div>
                <div className="max-w-3xl px-2 lg:px-0 mx-auto bg-white rounded-b-lg shadow-md mt-5 rounded-md">


                    <div className="p-6  md:p-12 flex   justify-start flex-col md:flex-row gap-6">
                        <div >
                            <img src={image} alt="Ninish Image Not Found" className=" h-[8rem] rounded-lg" />
                        </div>
                        <div className="space-y-3 ">
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900">নামঃ <span className="text-xl text-gray-700">{name}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> ইমেইলঃ <span className="text-xl text-gray-700">{userEmail}</span> </p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> ফোন নাম্বারঃ <span className="text-xl text-gray-700">{phone}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> বিভাগঃ<span className="text-xl text-gray-700">{division}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> জন্ম তারিখঃ<span className="text-xl text-gray-700">{dateOfBirth}</span> </p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> জেলাঃ<span className="text-xl text-gray-700">{district}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900">শ্রেণিঃ<span className="text-xl text-gray-700">{group}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> শিক্ষা প্রতিষ্ঠানঃ <span className="text-xl text-gray-700">{institute}</span> </p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900">ক্যাটাগরীঃ <span className="text-xl text-gray-700">{category}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> ইভেন্টঃ <span className="text-xl text-gray-700">{event}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> টাকার পরিমানঃ <span className="text-xl text-gray-700">{amountMoney}</span> </p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> ট্রানজেকশন আইডিঃ <span className="text-xl text-gray-700">{translationID}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> সেন্ডার নম্বরঃ <span className="text-xl text-gray-700">{senderNumber}</span></p>
                            <p className="text-md font-medium flex items-center gap-1 text-gray-900"> রিসিভার নম্বরঃ <span className="text-xl text-gray-700">{receiverNumber}</span></p>
                            {
                                myRegistrationsData?.refer &&
                                <h1 className="text-md font-medium flex items-center gap-1 text-gray-900">
                                    রেফারেন্সঃ
                                    <span className="text-md text-gray-700">{refer}</span>
                                </h1>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MyRegistrationDetails;