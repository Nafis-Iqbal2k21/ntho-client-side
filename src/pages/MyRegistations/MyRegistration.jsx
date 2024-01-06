import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo/event.png'

const MyRegistration = ({ myRegistration }) => {
    const { _id, image, event, registrationStatus } = myRegistration;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm border border-orange-500 mx-auto">
                <figure className='p-4'><img src={logo} alt="Shoes" className='h-28' /></figure>
                <div className="card-body">
                    <div className="card-title">
                        <h1 className='text-gray-700 text-xl font-bold'>আপনি {event} এর জন্য নিবন্ধন করেছেন</h1>
                    </div>
                    <div className={`badge border  p-5 ${registrationStatus == 'approved' ? "border-green-500" : "border-orange-500"}`}>{registrationStatus == "approved" ? "আপনার রেজিস্ট্রেশনটি সফল হয়েছে" : "আপনার রেজিস্ট্রেশনটি প্রক্রিয়াধীন আছে"}</div>
                    <Link to={`/myRegistrationDetails/${_id}`} className="w-fit cursor-pointer rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2 text-white">
                        আরো জানুন
                    </Link>
                </div>
            </div>

        </div>
    );
};

MyRegistration.propTypes = {
    myRegistration: PropTypes.object
};

export default MyRegistration;