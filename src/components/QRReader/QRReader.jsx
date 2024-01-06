import axios from 'axios';
import React, { useState } from 'react'
import QrReader from 'react-qr-reader';


function QRReader() {
    const [webcamResult, setWebcamResult] = useState();
    const [userData, setUserData] = useState(null);

    const webcamError = (error) => {
        console.log(error);
    }
    const webcamScan = async (email) => {
        if (email) {
            setWebcamResult(email);
            // Fetch data from Node.js backend using the scanned email
            try {
                const response = await axios.get(`http://localhost:5000/auth/${email}`);
                setUserData(response.data);
            } catch (error) {
                console.error(error);
                // Handle error fetching data
            }
        }
    }

    return (
        <div className="w-fit mx-auto h-[80vh]">
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">

                    <QrReader
                        delay={200}
                        onError={webcamError}
                        onScan={webcamScan}
                        legacyMode={false}
                        facingMode={'user'}
                    />




                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                        {userData && (
                            <div>
                                <h2>User Data</h2>
                                <p>Name: {userData.userData.displayName}</p>
                                {/* Display other fetched data properties */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default QRReader