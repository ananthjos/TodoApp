import React from 'react';
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const TodoInput = ({ value, onChange, onSubmit, placeholder = 'Add a new task...' }) => {
  const canSubmit = Boolean(value.trim());

  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSubmit();
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title="Add">
              <span>
                <IconButton color="primary" onClick={onSubmit} disabled={!canSubmit} size="small">
                  <AddIcon />
                </IconButton>
              </span>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TodoInput;


