
function Home(){

    const cardData = [
    {
        title: "Expertise Across the Spectrum",
        image: "/images/temp.jpg",
        description:
        "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Integrated Solutions",
        image: "/images/temp.jpg",
        description:
        "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Tailored Solutions",
        image: "/images/temp.jpg",
        description:
        "We deliver custom solutions aligned to your goals, ensuring investment in the right technology.By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Reliable Connectivity",
        image: "/images/temp.jpg",
        description:
        "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Smart Surveillance",
        image: "/images/temp.jpg",
        description:
        "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Technical Support",
        image: "/images/temp.jpg",
        description:
        "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Server Room Setup",
        image: "/images/temp.jpg",
        description:
        "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Cloud Solutions",
        image: "/images/welcome.PNG",
        description:
        "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    },
    {
        title: "Cybersecurity",
        image: "/images/welcome.PNG",
        description:
        "Protect your digital assets with advanced cybersecurity services and monitoring.By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
    }
    ];

    return(
        <div>
            <div className="top">
                <img style={{marginBottom:"40px"}} src="/images/herosection.PNG" />
            </div>

            {/* mid part */}
            <h1 className="text-5xl font-bold text-center text-[#ff7311]">
                WELCOME
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-center justify-center px-4 md:px-20 py-10 gap-10">
            
            <div className="md:w-1/3 w-full flex justify-center">
                <img src="/images/welcome.PNG" alt="Welcome" className="w-[90%] max-w-md md:max-w-full" />
            </div>

            <div className="md:w-3/4 w-full text-lg text-gray-600">
                <p>
                Welcome to <strong className="text-gray-700">PROSWL Technology Private Limited</strong>, your one-stop destination for comprehensive
                technology solutions. With a commitment to innovation and excellence, we specialise in a wide array of services that encompass
                every aspect of modern computing and networking. From designing cutting-edge networks to providing robust security solutions,
                seamless video conferencing to state-of-the-art server room setups, our expertise spans the entirety of the technology landscape.
                Whether you're seeking reliable internet connectivity, advanced surveillance solutions, or top-notch technical support, we are
                dedicated to transforming your technological aspirations into reality. At <strong className="text-gray-700">PROSWL Technology Private Limited</strong>,
                we don't just offer services; we provide solutions that empower your business to thrive in a digitally interconnected world.
                </p>
            </div>
            </div>


            {/* bottom part of home page */}
            <div className="bg-[#ff7311] mb-6">
                <h1 className="text-5xl pt-12 font-bold text-center text-black">
                    WHY US
                </h1>

                <div className="flex flex-col md:flex-row justify-center px-4 md:px-20 py-10 gap-10">
                <div className="md:w-3/4 w-full text-lg text-black font-normal">
                    <p className="pt-2">
                        Choosing a company that offers a comprehensive range of services in computing, network solutions, and technology infrastructure is a decision that significantly impacts the efficiency, security, and success of your business. Here's why opting for such a company is a strategic choice:
                    </p>
                </div>

                <div className="md:w-1/3 w-full flex justify-center">
                    <img src="/images/why-us.PNG" alt="Welcome" className="w-[90%] max-w-md md:max-w-full" />
                </div>

                </div>
            </div>   


            {/* cards of home page */}
            <div className="mx-2 md:mx-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-10">
                {cardData.map((card, index) => (
                    <div
                    key={index}
                    className="bg-white p-4 rounded-lg flex flex-col justify-start h-full min-h-[480px]"
                    >
                    <h3 className="text-4xl h-[80px] font-semibold text-[#ff7311] mb-4 text-left">
                        {card.title}
                    </h3>

                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-[160px] object-cover mb-4"
                    />

                    <p className="text-gray-700 text-lg text-left leading-relaxed">
                        {card.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>  

            <div className="overflow-hidden whitespace-nowrap border-b-2 border-orange-600 bg-gray-100">
            <div className="animate-marquee pt-6 h-[100px] inline-block text-[#ff7311] font-semibold text-3xl px-4">
                <span className="mx-6">LinkedIn</span>
                <span className="mx-6">YouTube</span>
                <span className="mx-6">Facebook</span>
                <span className="mx-6">Instagram</span>
                <span className="mx-6">LinkedIn</span>
                <span className="mx-6">YouTube</span>
                <span className="mx-6">Facebook</span>
            </div>
            </div>

        </div>
    )
}

export default Home;