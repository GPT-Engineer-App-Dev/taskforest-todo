import React from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import { TodoProvider } from '../contexts/TodoContext';

const Index = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Todo App</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <AddTodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Index;