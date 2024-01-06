import { useNavigate } from "react-router-dom";
import RegistrationFeeInfo from "../../Components/RegistrationFeeInfo/RegistrationFeeInfo";
import SpecialNote from "../../Components/SpecialNote/SpecialNote";
import { useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Registration = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [phoneNumberError, setPhoneNumberError] = useState(false)

    const handleRegistration = (events) => {
        events.preventDefault();
        const form = events.target;
        const name = form.name.value
        const dateOfBirth = form.dateOfBirth.value
        const district = form.district.value
        const group = form.group.value
        const institute = form.institute.value
        const category = form.category.value
        const event = form.event.value
        const amountMoney = form.amountMoney.value
        const translationID = form.translation.value
        const senderNumber = form.senderNumber.value
        const receiverNumber = form.receiverNumber.value
        const refer = form.refer.value
        console.log(user)


        const ValidatePhoneNumber = /^(\(?\d{3}\)?[-\s]?)?\d{4}[-\s]?\d{4}$/;
        if (!ValidatePhoneNumber.test(senderNumber)) {
            setPhoneNumberError(true)
            return
        }

        const registrationInfo = { name, userEmail: user.email, displayName: user.displayName, image: user.photoURL, dateOfBirth, district, group, institute, category, event, amountMoney, translationID, senderNumber, receiverNumber, refer, registrationStatus: "pending" }
        console.log(registrationInfo)



        fetch(`http://localhost:5000/registration`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationInfo)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("আপনার নিবন্ধন তথ্য সফলভাবে জমা দেওয়া হয়েছে")
                navigate('/myRegistrations')
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <>
            <Helmet>
                <title>ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি | রেজিস্ট্রেশন</title>
            </Helmet>
            <div >
                <div className="form flex justify-center  px-2 mt-5">
                    <div>
                        {/* User Account info */}
                        <form onSubmit={handleRegistration}>
                            <div className="max-w-3xl w-full"  >

                                <div>
                                    <h3 className="text-3xl pb-3 text-center font-semibold">
                                        নিচের তথ্যগুলো সঠিকভাবে পূরন করুন
                                    </h3>
                                </div>

                                {/* name */}
                                <div className="pb-10">
                                    <label htmlFor="name">নামঃ (In English)</label>
                                    <input id="name" name="name" required placeholder="নাম লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                    <p className="mt-2 font-semibold text-red-600 text-sm">এখানে প্রদত্ত নামই সার্টিফিকেটের জন্য ব্যাবহার করা
                                        হবে। একবার জমা দিলে তা আর পরিবর্তনযোগ্য নয়।</p>
                                </div>

                                {/* date Of Birth */}
                                <div className="pb-10">
                                    <label htmlFor="dateOfBirth">জন্ম তারিখঃ</label>
                                    <input id="dateOfBirth" name="dateOfBirth" required placeholder="আপনার জন্ম সাল এবং তারিখ সিলেক্ট করুন" type="date" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                </div>

                                {/* district */}
                                <div className="pb-10">
                                    <label htmlFor="district">জেলাঃ</label>
                                    <input id="district" name="district" required placeholder="আপনার জেলার নাম লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                </div>

                                {/* class */}
                                <div className="pb-10">
                                    <label htmlFor="group">শ্রেণিঃ</label>
                                    <input id="group" name="group" required placeholder="আপনার বিদ্যালয়ের শ্রেণি লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                </div>

                                {/* institute */}
                                <div className="pb-10">
                                    <label htmlFor="institute">শিক্ষা প্রতিষ্ঠানঃ</label>
                                    <input id="institute" name="institute" required placeholder="আপনার বিদ্যালয়ের নাম লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                </div>

                                {/* category */}
                                <div className="pb-10">
                                    <label htmlFor="category">গ্রুপ </label>
                                    <select id="category" name="category" className="bg-purple-100 rounded mt-3 w-full p-3" required>
                                        <option value="" hidden="">সিলেক্ট করুন</option>
                                        <option value="গ্রুপ A: নিম্ন মাধ্যমিক - (৬ষ্ঠ থেকে ৮ম শ্রেণি)">গ্রুপ A: নিম্ন মাধ্যমিক - (৬ষ্ঠ থেকে ৮ম শ্রেণি)</option>
                                        <option value="গ্রুপ B: মাধ্যমিক - (৯ম এবং ১০ম শ্রেণি)">গ্রুপ B: মাধ্যমিক - (৯ম এবং ১০ম শ্রেণি)</option>
                                        <option value="গ্রুপ C: উচ্চ মাধ্যমিক - (১১শ এবং ১২শ শ্রেণি)">গ্রুপ C: উচ্চ মাধ্যমিক - (১১শ এবং ১২শ শ্রেণি)</option>
                                    </select>
                                    <p className="mt-2 font-semibold text-red-600 text-sm">শ্রেণি অনুসারে গ্রুপ  সিলেক্ট করুন। ভুল
                                        গ্রুপ পরীক্ষা দিলে তা বাতিল বলে গন্য হবে</p>
                                </div>


                                {/* event */}
                                <div className="pb-10">
                                    <label htmlFor="event">ইভেন্টঃ</label>
                                    <select id="event" name="event" className="bg-purple-100 rounded mt-3 w-full p-3" required>
                                        <option value="" hidden="">সিলেক্ট করুন</option>
                                        <option value="Innovatia Project Display (Science,Business,IT)">Innovatia Project Display (Science,Business,IT)</option>
                                        <option value="Lens Legends Photography Exhibit (Camera & Mobile)">Lens Legends photography exhibit (Camera & Mobile)</option>
                                        <option value="Canva Quest Art Challenge">Canva Quest art challenge</option>
                                        <option value="Enigma Explorer Treasure Hunt">Enigma Explorer Treasure Hunt</option>
                                        <option value="Singing Maestro (Modern & Folk)">Singing Maestro (Modern & Folk)</option>
                                        <option value="Groove gala dance floor (Modern & Folk)">Groove gala dance floor (Modern & Folk)</option>
                                        <option value="Story Telling - Bangla">Story Telling - Bangla</option>
                                        <option value="Story Writing - Bangla">Story Writing - Bangla</option>
                                        <option value="Al-Khwarizmi Math Olympiad">Al-Khwarizmi Math Olympiad</option>
                                        <option value="Rapid Rhetoric Extempore Speech(Bangla & English)">Rapid Rhetoric Extempore Speech(Bangla & English)</option>
                                        <option value="Rubik's Cube">Rubik's Cube</option>
                                        <option value="Silver Screen Film Making">Silver Screen Film Making</option>
                                        <option value="Quizzical Conclave Quiz (Gk)">Quizzical Conclave Quiz (Gk)</option>
                                        <option value="Queen's Gambit chess">Queen's Gambit chess</option>
                                    </select>
                                </div>


                                {/* Registration form and Registration Fee Info */}
                                <div className="mt-3 mb-16 py-3 px-5 rounded-b-md bg-white">

                                    <RegistrationFeeInfo />


                                    <h4 className="text-2xl font-semibold my-1">রেজিস্ট্রেশন ফি আবেদন ফর্ম</h4>

                                    <div className="mt-4">

                                        {/* amountMoney */}
                                        <div className="pb-10">
                                            <label htmlFor="amountMoney">টাকার পরিমানঃ</label>
                                            <input id="amountMoney" name="amountMoney" required placeholder="150 BDT" type="number" className="rounded text-black mt-3 w-full p-3 bg-purple-100" value={"150"} disabled={true}/>

                                        </div>

                                        {/* translation */}
                                        <div className="pb-10">
                                            <label htmlFor="translation">ট্রানজেকশন(Trx) আইডিঃ</label>
                                            <input id="translation" name="translation" required placeholder="ট্রানজেকশন(Trx) আইডি লিখুন (AKMXXXXX0F)" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                        </div>

                                        {/* senderNumber */}
                                        <div className="pb-10">
                                            <label htmlFor="senderNumber">সেন্ডার নম্বরঃ</label>
                                            <input id="senderNumber" name="senderNumber" required placeholder="যে নম্বর থেকে রেজিস্ট্রেশন ফি পাঠিয়েছেন লিখুন(১১ ডিজিট)" type="number" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />

                                            <div className="mt-2 text-sm">
                                                {
                                                    phoneNumberError ?
                                                        <p className="text-red-600">১১ ডিজিট এর নম্বর দিন।</p>
                                                        :
                                                        <p className="text-slate-600">১১ ডিজিট এর নম্বর দিন। (In English)</p>
                                                }
                                            </div>
                                        </div>


                                        {/*receiverNumber  */}
                                        <div className="pb-10">
                                            <label htmlFor="receiverNumber">রিসিভার নম্বরঃ</label>
                                            {/* <select id="receiverNumber" name="receiverNumber" className="bg-purple-100 rounded mt-3 w-full p-3" disabled={true}>
                                                <option value="01540110050" hidden="">01540110050</option>
                                            </select> */}
                                            <input id="receiverNumber" name="receiverNumber" placeholder="01540110050" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" value={"01540110050"} disabled={true} />
                                        </div>

                                        {/* refer */}
                                        <div className="pb-10">
                                            <label htmlFor="refer">রেফারেন্সঃ (যদি থাকে)</label>
                                            <input id="refer" name="refer" placeholder="রেফারেন্স দিন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                        </div>

                                    </div>

                                    {/* form submit btn */}
                                    <div className="  py-2">
                                        <button type="submit" className="bg-gradient-to-tr shadow-md from-fuchsia-800 to-indigo-600 text-white font-bold py-3 px-7 rounded-full disabled:bg-slate-600">
                                            জমা দিন
                                        </button>
                                    </div>

                                    {/* Special Note */}
                                    <div className="py-8">
                                        <SpecialNote />
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;