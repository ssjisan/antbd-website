import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { Menu } from "../../assets/Icons/Navbar/Icons";

export default function FaQAccordion({ questions }) {
  const [expanded, setExpanded] = useState(
    questions.length > 0 ? parseInt(questions[0].id) : 0
  );

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  };

  const AccordionSx = {
    marginBottom: "24px",
    marginTop: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(145, 142, 175, 0.40)",
    boxShadow: "none",
    position: "inherit",
    padding: "4px",
  };

  return (
    <div>
      {questions.map((question) => (
        <Accordion
          key={question.id}
          expanded={expanded === question.id}
          onChange={handleChange(question.id)}
          square={"false"}
          sx={AccordionSx}
        >
          <AccordionSummary expandIcon={<Menu />}>
            <Typography variant="h6">{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" color="text.secondary">
              {question.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

FaQAccordion.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
