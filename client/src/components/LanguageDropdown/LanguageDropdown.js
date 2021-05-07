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
        <MenuItem value="c">C</MenuItem>
        <MenuItem value="javascript">Javascript</MenuItem>
        <MenuItem value="java">Java</MenuItem>
        <MenuItem value="python">Python</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
