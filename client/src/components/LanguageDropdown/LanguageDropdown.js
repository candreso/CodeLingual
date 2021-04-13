import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

// eslint-disable-next-line react/prop-types
const LanguageDropdown = ({ className, changeFormData, formData }) => {
  const type = className === "source" ? "sl" : "dl";

  const changeHandler = (value) => {
    changeFormData({ [type]: value });
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>
        {className === "source" ? "Source" : "Destination"}
      </InputLabel>
      <Select
        onChange={(e) => changeHandler(e.target.value)}
        label={className === "source" ? "Source" : "Destination"}
        value={formData[type]}
      >
        <MenuItem value="C">C</MenuItem>
        <MenuItem value="Javascript">Javascript</MenuItem>
        <MenuItem value="Java">Java</MenuItem>
        <MenuItem value="Python">Python</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
