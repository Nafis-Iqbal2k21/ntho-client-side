// React component to display the QR code
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from '../../hooks/useUser';


const QRCodeGenerator = ({ userId }) => {
    const [qrCode, setQRCode] = useState('');
    const [userData, refetch] = useUser();
    useEffect(() => {
        // Fetch QR code from the server
        const fetchQRCode = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/qrCode/${userData._id}`);
                setQRCode(response.data);
            } catch (error) {
                console.error('Error fetching QR code:', error);
            }
        };

        if (userData._id) {
            fetchQRCode();
        }
    }, [userData._id]);

    return (
        <div>
            {qrCode && <img src={qrCode} alt="QR Code" />}
        </div>
    );
};

export default QRCodeGenerator;
