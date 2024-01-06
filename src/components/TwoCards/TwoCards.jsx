import React from 'react'
import date from '../../assets/images/more/date.png'
import veneu from '../../assets/images/more/veneu.png'

function TwoCards() {
    return (
        <>
            <div className=' md:flex justify-between mx-10'>
                <div className="card card-compact  shadow-sm m-5 p-5 bg-[#fff1e5]">
                    <figure><img src={date} alt="Shoes" /></figure>
                    
                </div>
                <div className="card card-compact   shadow-sm m-5 p-5 bg-[#fff1e5]">
                    <figure><img src={veneu} alt="Shoes" /></figure>    
                </div>
            </div>
        </>
    )
}

export default TwoCards