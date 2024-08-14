import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-grow"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTodoForm;