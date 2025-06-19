
import React, { useState } from 'react';

function Contact(){
    const [open, setOpen] = useState(false);
    const days = [
        { day: 'Monday', time: '10:00 am – 07:00 pm' },
        { day: 'Tuesday', time: '10:00 am – 07:00 pm' },
        { day: 'Wednesday', time: '10:00 am – 07:00 pm' },
        { day: 'Thursday', time: '10:00 am – 07:00 pm' },
        { day: 'Friday', time: '10:00 am – 07:00 pm' },
        { day: 'Saturday', time: '10:00 am – 05:00 pm' },
        { day: 'Sunday', time: 'Closed' },
    ];

    const today = new Date().getDay(); 
    const todayData = days[(today + 6) % 7]; 

    return(
        
        <div className="flex flex-wrap">
      
        <div className="w-full md:w-1/3 mb-6 md:mx-28 mx-4 mt-10 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-[#ff7311] mb-4">CONTACT US</h2>
            <p className="text-gray-700 mb-4 mt-10">
            Tell us a little about your requirements and we will get back to you with some ideas as soon as possible.
            </p>
            
            <p className="text-gray-900 text-2xl mb-4 mt-10">Proswl Technology Private Limited</p>

            <p className="text-gray-700 mb-4 mt-6">Proswl Technology Private Limited, Delhi - Jaipur Expressway, Udyog Vihar, Sector 18, Gurugram, Haryana, India</p>

            <p><span className="text-gray-700 text-lg mb-4 mt-10">Email:</span>
                <span className="text-lg text-[#ff7311] mb-4 ml-2">xyz@gmail.com</span>
            </p>

            <p className="mb-4 mt-6"><span className="text-gray-700 text-lg mb-4 mt-10">Phone:</span>
                <span className="text-lg text-[#ff7311] mb-4 ml-2">0124-427-1015</span>
            </p>

            <p className="text-gray-900 text-2xl mb-4 mt-10">Hours</p>
            <p className="text-gray-700 mt-6">Monday - Saturday: 9:00 am - 7:00 pm </p>
            <p className="text-gray-700 mb-4">Sunday: Closed</p>


            <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-1 focus:outline-none"
            >
                <span className="text-gray-600">Open today</span>
                <span className="text-orange-600 font-semibold">{todayData.time}</span>
                <svg
                className={`w-4 h-4 ml-1 text-orange-600 transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                />
                </svg>
            </button>

            {open && (
                <div className="absolute mt-2 mb-6 w-64 bg-white border border-gray-200 rounded-md shadow-md z-10">
                <ul className="py-2">
                    {days.map((item, index) => (
                    <li
                        key={index}
                        className={`flex justify-between px-4 py-1 text-sm ${
                        item.day === todayData.day ? 'font-semibold text-orange-600' : ''
                        }`}
                    >
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                    </li>
                    ))}
                </ul>
                </div>
            )}

            
        </div>

        <div className={` order-1 md:order-2 w-full md:w-1/2 transition-all duration-500 ${open ? 'h-[800px]' : 'h-[600px]'}`}>
            <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4086748234693!2d77.08652477546943!3d28.6161432846841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1930f531d5ed%3A0x3113bbffb69a1877!2sSarhol%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1718611112222"
            className="w-full h-full border-0 rounded shadow-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

    </div>
    )
}
export default Contact;