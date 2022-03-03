import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }: { data: any[] }) => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  return (
    <>
      {data.map((accordion, index) => (
        <AccordionItem
          onChange={(expanded: any) => setExpanded(expanded)}
          key={index}
          data={accordion}
          expanded={expanded}
          panel={`panel${index}`}
        />
      ))}
    </>
  );
};

export default Accordion;
