import React from 'react';
import { Box, Typography } from '@mui/material';

const TodoHeader = ({ remainingCount }) => (
  <Box>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Todos
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {remainingCount} remaining
    </Typography>
  </Box>
);

export default TodoHeader;


