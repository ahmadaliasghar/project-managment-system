import { useState } from 'react';
import Accordion from '../components/Accordion';
import AccFeedback from './AccFeedback';

const accordionData = [
    {
        title: "Explore programs & universities",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
    },
    {
        title: "Send your application to us",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
    },
    {
        title: "Apply for visa",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
    },
    {
        title: "Book a Flight",
        content: "Explore our comprehensive database of Universities and programs ranging from recognized universities to specialized courses around the world to find the right fit for your academic journey.",
    }
];

export default function Feedback() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex justify-center">
            <div className="w-[80%] pl-8">
                <h1 className="text-5xl text-center font-semibold">Frequently asked Questions</h1>
                <div className="mt-8">
                    {accordionData.map((item, index) => (
                        <AccFeedback
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            className="border border-1"
                            onClick={() => handleAccordionClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
