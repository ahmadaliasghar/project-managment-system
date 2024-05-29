import { useState } from 'react';
import WhiteAccordion from './WhiteAccordian';

const accordionData = [
    {
        title: "Explore programs & universities",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/option.webp"
    },
    {
        title: "Send your application to us",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/option2.webp"
    },
    {
        title: "Apply for visa",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/option3.webp"
    },
    {
        title: "Book a Flight",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
        image: "/asset/option4.webp"
    }
];

export default function WhiteAccodionData() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex justify-between">
            <div className="w-[50%]">
                <div className="mt-6">
                    {accordionData.map((item, index) => (
                        <WhiteAccordion
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => handleAccordionClick(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="w-[50%]  pt-8">
                <img src={accordionData[openIndex].image} alt="Display" />
            </div>
        </div>
    );
}
