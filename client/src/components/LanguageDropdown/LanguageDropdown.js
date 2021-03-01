import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const LanguageDropdown = ({ className }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>
        {className === "source" ? "Source" : "Destination"}
      </InputLabel>
      <Select label={className === "source" ? "Source" : "Destination"}>
        <MenuItem value="C">C</MenuItem>
        <MenuItem value="Javascript">Javascript</MenuItem>
        <MenuItem value="Java">Java</MenuItem>
        <MenuItem value="Python">Python</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
