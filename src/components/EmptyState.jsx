import React from 'react';
import { Paper, Typography } from '@mui/material';

const EmptyState = () => (
  <Paper variant="outlined" sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
    <Typography variant="body1">No todos yet</Typography>
    <Typography variant="body2">Add your first task above</Typography>
  </Paper>
);

export default EmptyState;


