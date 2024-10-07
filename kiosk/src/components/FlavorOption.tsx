import React from 'react';
import { useTheme } from '@mui/material/styles'; 
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface FlavorOptionProps {
  name: string;
  extraPrice: number;
  extraCalories: number;
  options: string[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FlavorOption: React.FC<FlavorOptionProps> = ({ name, options, selectedValue, onChange }) => {
  const theme = useTheme(); 

  return (
    <FormControl component="fieldset" sx={{ flexGrow: 1 }}>
      <FormLabel component="legend" sx={{ color: theme.palette.secondary.contrastText }}> 
        {name}
      </FormLabel>
      <RadioGroup
        value={selectedValue}
        onChange={onChange}
        aria-label={name}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={
              <Radio
                sx={{
                  color: theme.palette.secondary.contrastText, 
                  '&.Mui-checked': {
                    color: "green", 
                  },
                }}
              />
            }
            label={option}
            sx={{ color: theme.palette.secondary.contrastText }} 
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FlavorOption;
