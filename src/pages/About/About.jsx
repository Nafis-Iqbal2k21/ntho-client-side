import { Helmet } from "react-helmet";
import AboutNinish from "../../components/AboutNinish/AboutNinish";
import FutureWorks from "../../components/FutureWorks/FutureWorks";
import Mission from "../../components/Mission/Mission";
import PreviousWorks from "../../components/PreviousWorks/PreviousWorks";



const About = () => {
    return (
       <>
       <Helmet>
            <title>ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি | আমাদের সম্পর্কে</title>
        </Helmet>
         <div >
            <AboutNinish/>

            <div className="bg-white mb-8">
            <Mission/>
            </div>

            {/* <PreviousWorks/> */}

            <FutureWorks/>


         </div>

       </>
    );
};

export default About;