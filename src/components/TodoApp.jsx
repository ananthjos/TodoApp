import React, { useMemo, useState } from 'react';
import { Container, Stack } from '@mui/material';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useLocalStorageState } from './hooks/useLocalStorage';
import { generateId } from './id';

const LOCAL_STORAGE_KEY = 'todos.v1';

const TodoApp = () => {
  const [todos, setTodos] = useLocalStorageState(LOCAL_STORAGE_KEY, []);
  const [newTodoText, setNewTodoText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const remainingCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);

  function handleAddTodo() {
    const text = newTodoText.trim();
    if (!text) return;
    const newTodo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    setNewTodoText('');
  }

  function beginEdit(todoId, currentText) {
    setEditingId(todoId);
    setEditingText(currentText);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditingText('');
  }

  function saveEdit() {
    const text = editingText.trim();
    if (!text) return cancelEdit();
    setTodos((prev) => prev.map((t) => (t.id === editingId ? { ...t, text } : t)));
    cancelEdit();
  }

  function toggleCompleted(todoId) {
    setTodos((prev) => prev.map((t) => (t.id === todoId ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTodo(todoId) {
    setTodos((prev) => prev.filter((t) => t.id !== todoId));
  }

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 3, sm: 6 } }}>
      <Stack spacing={2}>
        <TodoHeader remainingCount={remainingCount} />
        <TodoInput value={newTodoText} onChange={setNewTodoText} onSubmit={handleAddTodo} />
        <TodoList
          todos={todos}
          editingId={editingId}
          editingText={editingText}
          onToggleCompleted={toggleCompleted}
          onBeginEdit={beginEdit}
          onDelete={deleteTodo}
          onChangeEditingText={setEditingText}
          onSaveEdit={saveEdit}
          onCancelEdit={cancelEdit}
        />
      </Stack>
    </Container>
  );
};

export default TodoApp;


