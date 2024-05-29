import { useState } from 'react';
import Accordion from '../components/Accordion';

const accordionData = [
    {
        title: "Explore programs & universities",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/image.webp"
    },
    {
        title: "Send your application to us",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/acc2.webp"
    },
    {
        title: "Apply for visa",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/acc3.webp"
    },
    {
        title: "Book a Flight",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/acc4.webp"
    }
];

export default function AccordianData() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex justify-between">
            <div className="w-[40%] pl-8">
                <h1 className="text-5xl font-semibold">How we work?</h1>
                <div className="mt-8">
                    {accordionData.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => handleAccordionClick(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="w-[60%] pt-8">
                <img src={accordionData[openIndex].image} alt="Display" />
            </div>
        </div>
    );
}
