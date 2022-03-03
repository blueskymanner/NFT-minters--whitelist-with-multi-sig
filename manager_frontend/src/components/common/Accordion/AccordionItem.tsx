import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Box from "../Box";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid #4821C8",
  "&:last-child": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  backgroundColor: "transparent",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  paddingLeft: 0,
  paddingRight: 0,
  alignItems: "center",
  marginLeft: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
}));

const AccordionItem = ({
  data,
  onChange,
  expanded,
  panel,
}: {
  panel: string;
  data: any;
  onChange: (expanded: any) => void;
  expanded?: string | boolean;
}) => {
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      onChange(newExpanded ? panel : false);
    };

  return (
    <Accordion expanded={panel === expanded} onChange={handleChange(panel)}>
      <AccordionSummary
        aria-controls={`${panel}d-content`}
        id={`${panel}d-header`}
      >
        <Box cssClasses={["py-lg-4 py-2"]}>
          <FiberManualRecordIcon sx={{ color: "white", fontSize: "0.5em" }} />
          <h3 className="text-white ms-1 ms-md-3 d-inline">{data.title}</h3>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-sm text-white ps-1 ps-md-4">{data.description}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
