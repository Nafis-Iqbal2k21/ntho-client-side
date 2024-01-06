import React from 'react'
import dbc from '../../assets/images/Logo/dbc.png'
import { FaRegUserCircle } from 'react-icons/fa'
import dh from '../../assets/images/Logo/dh.png'
import enf from '../../assets/images/Logo/enf.png'

function SponsorLogo() {
    return (
        <div className="bg-[#F9EBE2] py-20">
            <div className="max-w-[1200px] mx-auto px-3 xl:px-0">
                <div className="text-center">
                    <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                        <span>
                            <FaRegUserCircle />
                        </span>
                        পার্টনার
                    </p>
                    <h1 className="text-3xl sm:text-3xl font-semibold mt-2">আমাদের গর্বিত পার্টনার</h1>
                </div>

                <div className="flex flex-wrap justify-center">
                    <img src={enf} alt="" className="h-32 md:h-60" />
                    <img src={dbc} alt="" className="h-32 md:h-60" />
                    <img src={dh} alt="" className="h-32 md:h-60" />
                </div>

            </div>
        </div>
    )
}

export default SponsorLogo