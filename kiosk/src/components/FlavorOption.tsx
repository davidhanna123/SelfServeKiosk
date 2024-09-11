import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface FlavorOptionProps {
  name: string;
  extraPrice: number;
  extraCalories: number;
  options: string[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//maybe add extra calorie stuff later
const FlavorOption: React.FC<FlavorOptionProps> = ({ name, options, selectedValue, onChange }) => {
  return (
    <FormControl component="fieldset" style={{ flexGrow: 1 }}>
      <FormLabel component="legend">{name}</FormLabel>
      <RadioGroup
        value={selectedValue}
        onChange={onChange}
        aria-label={name}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FlavorOption;
