import { Helmet } from "react-helmet";


const ErrorMessage = () => {
    return (
        <>
        <Helmet>
            <title>ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি | Data Not Found</title>
        </Helmet>
        <div className="bg-bgBlueGray h-[70vh] flex items-center justify-center">
            <h1 className="text-5xl font-bold text-[#542CC0]">Data Not Found</h1>
        </div>
        </>
    );
};

export default ErrorMessage;