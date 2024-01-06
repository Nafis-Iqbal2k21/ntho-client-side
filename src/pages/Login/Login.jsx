
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet";
import UseAuth from "../../hooks/useAuth";

const Login = () => {
    const {setUserId, googleLogin} = UseAuth();
    const navigate = useNavigate()

    const [phoneNumberError, setPhoneNumberError] = useState(false)

    const handleUserLogin = event =>{
        event.preventDefault();
        const form = event.target
        const phone = form.phone.value
        const division = form.division.value;

        const ValidatePhoneNumber = /^(\(?\d{3}\)?[-\s]?)?\d{4}[-\s]?\d{4}$/;
        if( !ValidatePhoneNumber.test(phone)){
            setPhoneNumberError(true)
            return
        }

        const userInfo = {phone, division}

        if(userInfo){
              googleLogin()
              .then(data =>{
               const userEmail = data?.user?.email;
               const displayName = data?.user?.displayName;
               const image = data?.user?.photoURL;
                userInfo.userEmail = userEmail;
                userInfo.displayName = displayName;
                userInfo.image = image;
                userInfo.status = "pending";
                userInfo.role = "user";


                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    navigate(`/registration`)
                    form.reset()
                })
            })
            .catch(() => {
                toast.error(`লগ ইন ব্যর্থ হয়েছে`)
            })
        }
    }

    return (
        <>
        <Helmet>
            <title>ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি | লগ ইন </title>
        </Helmet>
        <div className="hero h-[99vh] bg-gray-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0  w-96 shadow-sm bg-base-100 p-7">

            <form onSubmit={handleUserLogin}>

                <div className="w-full text-gray-900 text-center md:text-start mt-8 md:mt-0">
                    <label htmlFor="phone" className="cursor-pointer text-xl font-semibold">মোবাইল নাম্বার দিন</label>
                    <div>
                        <div className="flex mt-2 justify-center md:justify-start">
                            <div className="flex items-center px-2  bg-slate-200 border border-r-0 border-slate-300 rounded-l-md">
                                <span className="mt-1 text-slate-500">
                                    +88
                                </span>
                            </div>

                            <div className="w-full">
                                <input type="number" id="phone" name="phone" placeholder="01XXXXXXXXX" className="py-1 rounded-r-md bg-gray-50 border border-gray-300 px-2 text-lg w-full" required  />
                            </div>
                        </div>

                        <div className="mt-2">
                        {
                            phoneNumberError ?
                            <p className="text-red-600">১১ ডিজিট এর নম্বর দিন।</p>
                            :
                            <p className="text-slate-600">১১ ডিজিট এর নম্বর দিন। (In English)</p>
                        }
                        </div>

                    </div>


                    <div className="py-4">
                        <label htmlFor="division" className="cursor-pointer text-xl font-semibold">বিভাগ</label>
                        <select id="division" name="division" className="py-2 mt-2 rounded-md bg-gray-50 border border-gray-300 px-2 text-lg w-full" required >
                            <option value="" hidden="">সিলেক্ট করুন</option>
                            <option value="বরিশাল ">বরিশাল</option>
                            <option value="চট্টগ্রাম ">চট্টগ্রাম </option>
                            <option value="ঢাকা">ঢাকা</option>
                            <option value="খুলনা">খুলনা</option>
                            <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                            <option value="রাজশাহী">রাজশাহী</option>
                            <option value="সিলেট">সিলেট</option>
                            <option value="রংপুর">রংপুর</option>
                        </select>
                    </div>

                    <div  className="mt-4 w-fit mx-auto">
                        <button type="submit" className="rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2   text-white cursor-pointer flex gap-2 text-xl items-center">
                        <FaGoogle/>
                        গুগল দ্বারা লগ ইন করুন
                        </button>
                    </div>
                </div>

          </form>
            </div>
        </div>
        </div>
        <Toaster/>
        </>
    );
};

export default Login;