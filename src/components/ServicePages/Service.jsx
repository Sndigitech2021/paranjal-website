
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function Service(){

    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    const cardData = [
        {
            title: "Expertise Across the Spectrum",
            description:
            "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
        },
        {
            title: "Integrated Solutions",
            description:
            "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
        },
        {
            title: "Tailored Solutions",
            description:
            "We deliver custom solutions aligned to your goals, ensuring investment in the right technology.By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
        },
        {
            title: "Reliable Connectivity",
            description:
            "By selecting a company that offers a diverse portfolio of services, you gain access to a team of experts who possess specialized knowledge in various domains. This means you don't have to engage multiple vendors for different needs, ensuring seamless integration and smoother operations."
        },
    ];
    return(
        <div>
            <h1 className="text-4xl font-bold mt-10 text-center text-[#ff7311]">
                NETWORKING SOLUTION
            </h1>
            <div className="mt-10 mb-2">
                <img className="md:ml-1 w-full" src="/images/about.PNG" alt="about us image" />
            </div>

            <div className="md:ml-28 mr-18 ml-10">
                <p className="text-lg mb-6 text-gray-700">At PROSWL Technology Private Limited, we are a dynamic team of experts dedicated to transforming businesses through comprehensive technology services. With years of experience, we have mastered the art of creating tailored solutions that cater to the unique challenges and aspirations of our clients.</p>

                
                <ul className="text-lg mb-6 ml-6 list-disc text-gray-700">
                    <li>Reliability: Our commitment to delivering reliable, secure, and efficient solutions is at the core of everything we do.</li></ul>

                <ul className="text-lg mb-6 ml-6 list-disc text-gray-700"><li>End-to-End Solutions: From design to implementation and ongoing support, we offer comprehensive services that cover the entire technology spectrum.</li></ul>
                <ul className="text-lg mb-6 ml-6 list-disc text-gray-700"><li>Partnership: When you choose [Your Company Name], you're not just a client; you're a valued partner on the journey towards technological excellence.</li></ul>
            </div>   

            <div className="bg-gray-200 mb-6 md:px-20 px-[20px]">
                <h1 className="text-5xl text-[#ff7311] pt-12 font-bold text-center">
                    HOW WE WORK
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10">
                {cardData.map((card, index) => (
                    <div
                    key={index}
                    className="p-4 rounded-lg flex flex-col justify-start h-full min-h-[200px]"
                    >
                    <h3 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                        {card.title}
                    </h3>

                    <p className="text-gray-700 text-lg text-center leading-relaxed">
                        {card.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>

            <h1 className="text-4xl font-bold mt-10 text-center text-[#ff7311]">
               TYPES OF NETWORK
            </h1>
            <div className="mt-10 md:mx-[300px] mb-20 mx-20 text-gray-700">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className="text-2xl mb-6" onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                <AccordionBody className="mb-6">
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader className="text-2xl mb-6" onClick={() => handleOpen(2)}>
                How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="mb-6">
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader className="text-2xl mb-6" onClick={() => handleOpen(3)}>
                What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody className="mb-6">
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>

            </div>

        </div>
    )
}
export default Service;