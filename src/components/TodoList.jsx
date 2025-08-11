import React from 'react';
import { Box, Divider, List, Paper } from '@mui/material';
import EmptyState from './EmptyState';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  editingId,
  editingText,
  onToggleCompleted,
  onBeginEdit,
  onDelete,
  onChangeEditingText,
  onSaveEdit,
  onCancelEdit,
}) => {
  return (
    <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
      <List disablePadding>
        {todos.length === 0 && (
          <Box sx={{ p: 2 }}>
            <EmptyState />
          </Box>
        )}

        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            {index > 0 && <Divider component="li" />}
            <TodoItem
              todo={todo}
              isEditing={editingId === todo.id}
              editingText={editingText}
              onToggleCompleted={() => onToggleCompleted(todo.id)}
              onBeginEdit={onBeginEdit}
              onDelete={onDelete}
              onChangeEditingText={onChangeEditingText}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
            />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;


