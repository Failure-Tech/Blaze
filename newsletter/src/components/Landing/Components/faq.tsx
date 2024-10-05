import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h2
                className="text-xl font-semibold flex justify-between items-center cursor-pointer"
                onClick={toggleOpen}
            >
                <span className="flex-grow">{question}</span>
                {isOpen ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
            </h2>

            {/* Smooth Animation with max-height, opacity, and padding */}
            <div
                className={`overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out 
                ${isOpen ? 'max-h-[300px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
            >
                <p className="text-gray-400">{answer}</p>
            </div>
            <hr className="border-gray-600 my-4" />
        </div>
    );
};

const Faq: React.FC = () => {
    const faqData = [
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel velit ut lacus."
        },
        {
            question: "Why do we use it?",
            answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        },
        {
            question: "Where does it come from?",
            answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
        },
        {
            question: "Where can I get some?",
            answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
        },
    ];

    return (
        <div data-theme="dark" className="min-h-screen p-8 bg-base-900 text-gray-300">
            <h1 className="text-4xl font-bold mb-8 text-white">Frequently Asked Questions</h1>
            <div className="space-y-8">
                {faqData.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;