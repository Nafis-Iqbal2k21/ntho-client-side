import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import elogo from '../../assets/images/Logo/event.png'

function Rules() {
    const rulesRegulationInfo = [
        {
            name: 'Registration Card Policy:',
            cons: ['All attendees must present a valid ID along with their registration card for entry.', 'Registration cards are non transferable.'],
        },
        {
            name: 'Age Restrictions:',
            cons: ['There are no age restrictions. However, only registered students from class 6 to 12, HSC 23 students and teachers from their respective institutions. ']
        },
        {
            name: 'Security Measures:',
            cons: ['All attendees are subject to search upon entry', ' Prohibited items include weapons, illegal substances, outside food and beverages, and any item that may disrupt the event.']
        },
        {
            name: 'Alcohol and Substance Use:',
            cons: ['Any kind of alcoholic beverage, e-cigarettes, or cigarettes are not allowed on the premise.', ' Any form of illegal substance use is strictly prohibited. ']
        },
        {
            name: `Code of Conduct:`,
            cons: ['Any kind of inappropriate behavior will not be tolerated. If observed their respective institution’s authority will be contacted. The person(s) will be banned from all future events and not be subjected to any refund. ', ' Follow instructions from event organizers, volunteers, staff and security personnel at all times.']
        },
        {
            name: 'Environmental Responsibility: ',
            cons: ['Dispose of waste responsibly in designated bins.', 'Help keep the festival grounds clean and beautiful.' , 'If someone litters within the premises, they will be subjected to a 500 taka fine.']
        },
        {
            name: 'Pets:',
            cons: ['No pets are allowed, with the exception of service animals. ']
        },
        {
            name: 'Photography and Recording:',
            cons: ['Photography and recording for personal use are generally permitted. However, professional-grade equipment may require special permission.', ' Respect the privacy and consent of others when taking photos.']
        },
        {
            name: "Lost and Found:",
            cons: ['Report any lost items to the designated help desk', 'Found items should be turned in to festival staff. ']
        },
        {
            name: 'Emergency Procedures:',
            cons: [' Familiarize yourself with the location of emergency exits and first aid stations. ','In case of an emergency, follow instructions from event staff and emergency personnel.']
        },
        {
            name: 'Weather Conditions:',
            cons: ['The festival will take place rain or shine. Please dress accordingly for weather conditions. ']
        },
        {
            name: "Compliance with Local Laws:",
            cons: ['All attendees must comply with local laws and regulations. ']
        },
        {
            name: 'Adherence to Specific Event Policies:',
            cons: ['Some events or activities within the festival may have specific rules or guidelines. Please check signage and announcements for details.']
        },
    ]
    return (
        <>
            <div className='max-w-[1200px] mx-auto px-3 xl:px-0 py-14 '>
                <div className="text-center pb-16">
                    <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                        <span>
                            <FaRegUserCircle />
                        </span>Rules and Regulations
                    </p>
                    <h1 className="text-3xl  font-semibold mt-2">1st National Talent Hunt Odyssey Rules and Regulations</h1>
                    <p className='text-xl m-2 mx-10'>Welcome to the 1st National Talent Hunt Odyssey! To ensure a safe and enjoyable experience for everyone, please adhere to the following rules and regulations:</p>
                </div>

                <div className="bg-violet-900 text-white text-justify px-4 md:px-12 py-12 rounded-md mb-8">
                    <div className=" mx-auto mb-4">
                        <img src={elogo} className='h-[3.5rem] w-fit mx-auto' alt="Ninish Logo" />
                    </div>
                    {
                        rulesRegulationInfo.map((rule, index) => <div key={index}>
                            <p className='text-2xl m-2 font-bold'>{rule.name}</p>
                            <ul className='list-disc m-4'>
                                {
                                   rule.cons &&  rule.cons.map((rule, index) => <li key={index}>{rule}</li>)
                                }
                            </ul>

                        </div>)
                    }
                     <p className='text-xl'>By attending the 1st National Talent Hunt Odyssey, you agree to abide by these rules and regulations. Failure to comply may result in removal from the event without refund. Thank you for your cooperation, and have a fantastic time at the 1st National Talent Hunt Odyssey!
</p>

                </div>

            </div>
        </>
    )
}

export default Rules