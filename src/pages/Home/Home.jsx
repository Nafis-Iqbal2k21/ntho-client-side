import { Helmet } from "react-helmet";
import EnglishOlympiad from "../../components/EnglishOlympiad/EnglishOlympiad";
import Banner from "../../components/Header/Banner";
import Testimonials from "../../components/Testimonial/Testimonials";
import TwoCards from "../../components/twoCards/twoCards";
import SponsorLogo from "../../components/SponsorLogo/SponsorLogo";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ন্যাশনাল ট্যালেন্ট হান্ট ওডিসি | হোম</title>
            </Helmet>
            <Banner/>
            <TwoCards/>
            <EnglishOlympiad/>
            {/* <Testimonials/> */}
            <SponsorLogo/>
            
        </div>
    );
};

export default Home;