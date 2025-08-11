import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Tooltip,
  Chip,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const TodoItem = ({
  todo,
  isEditing,
  editingText,
  onToggleCompleted,
  onBeginEdit,
  onDelete,
  onChangeEditingText,
  onSaveEdit,
  onCancelEdit,
}) => {
  return (
    <ListItem
      secondaryAction={
        isEditing ? (
          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="Save">
              <IconButton color="primary" edge="end" onClick={onSaveEdit}>
                <SaveIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel">
              <IconButton edge="end" onClick={onCancelEdit}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        ) : (
          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title={todo.completed ? 'Mark as active' : 'Mark as done'}>
              <Checkbox checked={todo.completed} onChange={onToggleCompleted} edge="end" />
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton edge="end" onClick={() => onBeginEdit(todo.id, todo.text)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton edge="end" onClick={() => onDelete(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        )
      }
    >
      {isEditing ? (
        <TextField
          autoFocus
          fullWidth
          size="small"
          value={editingText}
          onChange={(e) => onChangeEditingText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSaveEdit();
            if (e.key === 'Escape') onCancelEdit();
          }}
        />
      ) : (
        <ListItemButton disableGutters onDoubleClick={() => onBeginEdit(todo.id, todo.text)}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox
              size="small"
              edge="start"
              tabIndex={-1}
              disableRipple
              checked={todo.completed}
              onChange={onToggleCompleted}
            />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              sx: {
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'text.disabled' : 'text.primary',
              },
            }}
            primary={todo.text}
            secondary={<Stack direction="row" spacing={1} alignItems="center">{todo.completed && <Chip size="small" label="Done" />}</Stack>}
          />
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default TodoItem;


