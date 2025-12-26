'use client'
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto ">
      {items.map((item, index) => (
        <div key={index} className="p-3 bg-gray-200 mt-4 rounded-md">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left font-medium text-black bg-gray-200 p-3 focus:outline-none"
          >
            <span>{item.title}</span>
            <span
              className={`transform transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-black text-left px-3 mt-2">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
