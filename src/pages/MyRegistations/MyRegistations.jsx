import { useLoaderData } from "react-router-dom";
import MyRegistration from "./MyRegistration";
import { Helmet } from "react-helmet";
import useMyRegistrations from "../../hooks/useMyRegistrations";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import QRCodeGenerator from "../../components/QRCodeGenerator/QRCodeGenerator";
import PDFDownload from "../../components/PDFDownLoad/PDFDownload";

const MyRegistations = () => {
    const [userData] = useUser();
    const [myRegistrations, refetch] = useMyRegistrations();
    console.log(myRegistrations[0]);

    return (
        <>
            <Helmet>
                <title>ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি | আমার রেজিস্ট্রেশন</title>
            </Helmet>

            <div className=" py-24 bg-gray-200 ">
                <div className="max-w-[1200px] mx-auto px-2 lg:px-0  ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">

                        {
                            myRegistrations?.map(myRegistration => <MyRegistration key={myRegistration._id} myRegistration={myRegistration} />)
                        }
                        <div className={` ${userData.status == "pending" ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`} disabled={userData.status == "pending" ? true : false}>
                            {
                                userData.status == "approved" ? <PDFDownload userData={userData} myRegistrationsData={myRegistrations} /> : <h1 className="rounded-2xl text-center bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2   text-white cursor-pointer text-2xl font-semibold">প্রবেশপত্র ডাউনলোড  <br /> আপনি ২১ তারিখে প্রবেশপত্র ডাউনলোড করতে পারবেন | অবশ্যই প্রবেশপত্র ডাউনলোড করে প্রিন্ট করে আনতে হবে
                                </h1>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default MyRegistations;