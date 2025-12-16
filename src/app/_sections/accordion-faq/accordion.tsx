"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import * as React from "react";
import type { FaqQuestion } from "../faq";

export function Accordion({
  items,
}: {
  items: readonly FaqQuestion[];
}) {
  const [activeItems, setActiveItems] = React.useState<string[]>([]);

  return (
    <AccordionPrimitive.Root
      className="flex w-full flex-col items-stretch gap-3 sm:gap-4"
      type="multiple"
      value={activeItems}
      onValueChange={(activeItems) => setActiveItems(activeItems)}
    >
      {items.map((item) => (
        <AccordionItem
          key={item._title}
          {...item}
          isActive={activeItems.includes(item._title)}
        />
      ))}
    </AccordionPrimitive.Root>
  );
}

function AccordionItem({
  _title,
  answer,
  isActive,
}: FaqQuestion & { isActive: boolean }) {
  return (
    <AccordionPrimitive.Item 
      className="flex flex-col border-2 border-white/20 rounded-xl bg-slate-800/60 backdrop-blur-sm px-5 sm:px-6 py-4 sm:py-5 hover:bg-slate-800/80 hover:border-orange-400/50 transition-all shadow-lg" 
      value={_title}
    >
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
          className="ring-orange-500 flex w-full items-start gap-3 sm:gap-4 py-2 text-base sm:text-lg md:text-xl leading-relaxed font-bold outline-hidden focus-visible:ring-2 text-white hover:text-orange-300 transition-colors"
        >
          {isActive ? (
            <MinusCircledIcon className="my-1.5 size-5 sm:size-6 shrink-0 text-orange-400" />
          ) : (
            <PlusCircledIcon className="my-1.5 size-5 sm:size-6 shrink-0 text-orange-400" />
          )}

          <span className="text-start">{_title}</span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="text-slate-100 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown transform overflow-hidden pl-8 sm:pl-10 pt-3 leading-relaxed text-sm sm:text-base md:text-lg">
        <div className="pb-2">{answer}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
