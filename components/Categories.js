import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";

const Categories = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <Box>
        <Paper
          sx={{
            display: { md: "block", xs: "none" },
          }}
        >
          <Typography variant="h5" sx={{ p: 1.5 }}>
            Categories
          </Typography>
          <Divider />
          <Box>
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <Typography sx={{ cursor: "pointer", p: 1.5 }}>
                  {category.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* mobile version */}
      <Accordion
        sx={{ display: { xs: "block", md: "none" } }}
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h5">Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <Typography sx={{ cursor: "pointer", p: 1.5 }}>
                {category.name}
                <ListItem divider></ListItem>
              </Typography>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Categories;
