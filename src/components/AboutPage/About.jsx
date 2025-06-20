
function About(){
    return(
        <div>
            <div className="mt-4 mb-4">
                <img className="mx-auto max-w-full md:h-[70vh] h-full object-contain" src="/images/about-us.PNG" alt="about us image" />
            </div>

            <div className="bg-gray-100 py-10 px-4 md:px-[180px]">
                <h1 className="text-5xl font-bold text-center text-blue-500 mb-10">ABOUT US</h1>

                <p className="text-lg mb-6">Welcome to PROSWL Technology Private Limited, where technology meets innovation to empower your business. With an unwavering commitment to delivering cutting-edge solutions, we are your trusted partner for all your computing, networking, and technology needs.</p>


                <p className="text-lg mb-6">At PROSWL Technology Private Limited, we are a dynamic team of experts dedicated to transforming businesses through comprehensive technology services. With years of experience, we have mastered the art of creating tailored solutions that cater to the unique challenges and aspirations of our clients.</p>

                <p className="text-lg mb-6">At PROSWL Technology Private Limited, we go beyond providing services; we deliver transformative solutions that shape the future of your business. Our team's dedication to innovation, expertise, and customer satisfaction drives us to consistently exceed expectations.</p>

                <ul className="text-lg mb-6 ml-6 list-disc">
                    <li>Expert Team: Our skilled professionals bring years of industry experience and a passion for innovation to every project.</li>
                </ul>

                <ul className="text-lg mb-6 ml-6 list-disc">
                    <li>Customised Approach: We believe every business is unique, and we tailor our solutions to match your specific requirements.</li></ul>

                <ul className="text-lg mb-6 ml-6 list-disc">
                    <li>Reliability: Our commitment to delivering reliable, secure, and efficient solutions is at the core of everything we do.</li></ul>

                <ul className="text-lg mb-6 ml-6 list-disc"><li>End-to-End Solutions: From design to implementation and ongoing support, we offer comprehensive services that cover the entire technology spectrum.</li></ul>
                <ul className="text-lg mb-6 ml-6 list-disc"><li>Partnership: When you choose [Your Company Name], you're not just a client; you're a valued partner on the journey towards technological excellence.</li></ul>

                <p className="text-lg mb-6">We offer a wide range of solutions related to computing, network designing, internet leased lines, Wi-Fi solutions, UTM & firewall, SD-WAN services, video surveillance, CCTV solutions with AI, server room setup, active switching, passive cabling, rack and enclosures, access control, video conferencing solutions, and technical support.</p>

                <p className="text-lg mb-6">Unlock the potential of technology with PROSWL Technology Private Limited,. Let's collaborate and build a future where innovation and business success go hand in hand. </p>

                <p className="text-lg mb-6">Contact us today to embark on a transformative technology journey.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10 py-10 px-4 md:mx-28">
                <div className="bg-white p-4 rounded-lg flex flex-col justify-start h-full min-h-[480px]">
                    <h1 className="text-4xl h-[50px] font-semibold text-blue-500 mb-4 text-left">Our Mission</h1>
                    <img src="/images/mission.jpg" className="w-full object-cover mb-4" />
                    <p className="text-lg mb-6 text-gray-700">At PROSWL Technology Private Limited, our mission is to empower businesses with comprehensive IT solutions that safeguard your digital assets and physical environments. We are dedicated to being a trusted partner in the interconnected landscape, delivering innovative technologies and expertise that ensure uninterrupted operations, protection against cyber threats, and optimised network performance. Through our relentless pursuit of excellence, we aim to fortify our clients' security posture and contribute to a safer, more connected world.</p>
                </div>
                <div className="bg-white p-4 rounded-lg flex flex-col justify-start h-full min-h-[480px]">
                    <h1 className="text-4xl h-[50px] font-semibold text-blue-500 mb-4 text-left">Our Vission</h1>
                    <img src="/images/vision.jpg" className="w-full object-cover mb-4" />
                    <p className="text-lg mb-6 text-gray-700">Our vision is to be a trailblazing force in the realm of system integration, recognised globally for our unwavering commitment to securing digital ecosystems and physical spaces. We envision a future where businesses seamlessly navigate the challenges of the digital age, leveraging cutting-edge IT solutions. By fostering innovation, collaboration, and adaptability, we aspire to set new industry standards and empower organizations to thrive in a rapidly evolving technological landscape.</p>
                </div>
            </div>
        </div>
    )
}

export default About;