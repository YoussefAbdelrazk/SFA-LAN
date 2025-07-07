"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { useState } from "react";

export function AccordionDemo() {
  const [open, setOpen] = useState<string | null>("item-1");

  const handleOpen = (value: string) => {
    setOpen(open === value ? null : value);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-5xl mx-auto  rounded-2xl shadow-2xl p-6 backdrop-blur-md border "
      defaultValue="item-1"
      value={open || undefined}
      onValueChange={handleOpen}
    >
      <AccordionItem
        value="item-1"
        className={`mb-4 rounded-xl border  transition-all duration-300 shadow-lg ${
          open === "item-1" ? "  scale-[1.02]" : ""
        }`}
      >
        <AccordionTrigger
          className={`flex w-full items-center justify-between px-6 py-4 text-lg font-bold bg-gradient-to-r text-[#344054]  transition-colors duration-300   ${
            open === "item-1" ? "bg-[#E2DCF0]" : " bg-[#3E1492] text-white"
          }`}
        >
         Alright, but what exactly do you do?
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 bg-[#E2DCF0] text-[#344054]  rounded-b-xl text-base font-medium backdrop-blur-sm">
        As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className={`mb-4 rounded-xl border  transition-all duration-300 shadow-lg ${
          open === "item-2" ? "  scale-[1.02]" : ""
        }`}
      >
        <AccordionTrigger
          className={`flex w-full items-center justify-between px-6 py-4 text-lg font-bold bg-gradient-to-r text-[#344054]  transition-colors duration-300   ${
            open === "item-2" ? "bg-[#E2DCF0]" : " bg-[#3E1492] text-white"
          }`}
        >
          I dont need a brand strategist but I need help
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 bg-[#E2DCF0] text-[#344054]  rounded-b-xl text-base font-medium backdrop-blur-sm">
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
          <br />
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className={`mb-4 rounded-xl border  transition-all duration-300 shadow-lg ${
          open === "item-3" ? "  scale-[1.02]" : ""
        }`}
      >
        <AccordionTrigger
          className={`flex w-full items-center justify-between px-6 py-4 text-lg font-bold bg-gradient-to-r text-[#344054]  transition-colors duration-300   ${
            open === "item-3" ? "bg-[#E2DCF0]" : " bg-[#3E1492] text-white"
          }`}
        >
          Are your rates competitive?
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 bg-[#E2DCF0] text-[#344054]  rounded-b-xl text-base font-medium backdrop-blur-sm">
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
          <br />
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className={`mb-4 rounded-xl border  transition-all duration-300 shadow-lg ${
          open === "item-4" ? "  scale-[1.02]" : ""
        }`}
      >
        <AccordionTrigger
          className={`flex w-full items-center justify-between px-6 py-4 text-lg font-bold bg-gradient-to-r text-[#344054]  transition-colors duration-300   ${
            open === "item-4" ? "bg-[#E2DCF0]" : " bg-[#3E1492] text-white"
          }`}
        >
          Why do you have a monthly project cap?
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 bg-[#E2DCF0] text-[#344054]  rounded-b-xl text-base font-medium backdrop-blur-sm">
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
          <br />
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
