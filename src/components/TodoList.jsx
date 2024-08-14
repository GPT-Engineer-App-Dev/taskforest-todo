import React from 'react';
import { useTodo } from '../contexts/TodoContext';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const TodoList = () => {
  const { todos, dispatch } = useTodo();

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-md">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          />
          <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;