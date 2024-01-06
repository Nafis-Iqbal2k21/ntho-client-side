import { CgDanger } from "react-icons/cg";
import { Link } from "react-router-dom";

const RegistrationFeeInfo = () => {
    return (
        <>

            <div>
                <h3 className="text-3xl font-semibold">কুইজ এর রেজিস্ট্রেশন অবস্থাঃ</h3>
                <div className="flex text-lg py-4 items-center gap-3 my-1">
                    <span className="text-4xl text-yellow-500">
                        <CgDanger />
                    </span>
                    <p>
                        আপনি এখনো রেজিস্ট্রেশন ফি দেন নি। অনলাইন কুইজে অংশ নিতে হলে রেজিস্ট্রেশন ফি দিতে হবে।
                    </p>
                </div>

                <h4 className="text-2xl font-semibold">রেজিস্ট্রেশন ফি দেয়ার জন্যঃ</h4>
                <p className="py-2">নিমক্ত যেকোন একটি নম্বরে <span className="font-bold">১৫০ টাকা</span> রেজিস্ট্রেশন ফি পাঠিয়ে দিনঃ</p>
                {/* <div className="grid gap-2 text-xl py-4 bg-slate-900 text-white px-4 rounded-md text-center">
                    পেমেন্ট করতে ক্লিক করুন
                    <Link to={'https://shop.bkash.com/enfinito01540110050/paymentlink/default-payment'} className="rounded-md mt-4 text-center sm:mt-0 bg-green-600 px-4 py-2 text-white md:text-2xl flex items-center gap-1 max-w-fit sm:w-full sm:mx-0 mx-auto" >পেমেন্ট </Link>
                </div> */}
                <div className="rounded-md bg-gradient-to-tr from-slate-900 to-sky-800 text-white mb-4 p-6 block sm:flex justify-between items-center">
                    <div className="ctaText text-center sm:text-start">
                        <h1 className="text-lg sm:text-3xl font-bold">
                        পেমেন্ট করতে ক্লিক করুন
                        </h1>
                    </div>
                    <div>
                        <Link className="rounded-md mt-4 text-center sm:mt-0 bg-green-600 px-4 py-2 text-white md:text-2xl flex items-center gap-1 max-w-fit sm:w-full mx-auto sm:mx-0"to={'https://shop.bkash.com/enfinito01540110050/paymentlink/default-payment'} >
                            পেমেন্ট  করুন
                        </Link>
                    </div>
                </div>


                <div className="py-2">
                    <p>টাকা পাঠানো হয়ে গেলে ট্রানজেকশন(Trx) আইডি এবং যে নম্বর থেকে রেজিস্ট্রেশন ফি পাঠিয়েছেন সেই তথ্য দিন
                    </p>
                </div>

            </div>

        </>
    );
};

export default RegistrationFeeInfo;