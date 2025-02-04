import { useState, useOptimistic } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, BackButton, ExampleContainer } from '../styles/theme';

function UseOptimisticExample() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState(['Learn React', 'Learn Next.js']);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  );

  async function addTodo(text) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTodos((prev) => [...prev, text]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.todo.value;
    addOptimisticTodo(text);
    addTodo(text);
    e.target.reset();
  }

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
      <h1>useOptimistic Example</h1>
      <ExampleContainer>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor='todo'>New Todo: </label>
            <input
              type='text'
              id='todo'
              name='todo'
              required
              style={{
                padding: '0.5rem',
                marginLeft: '0.5rem',
                backgroundColor: '#333',
                border: '1px solid #444',
                borderRadius: '4px',
                color: 'white',
              }}
            />
          </div>
          <button
            type='submit'
            style={{
              backgroundColor: '#444',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Add Todo
          </button>
        </form>
        <ul style={{ marginTop: '1rem' }}>
          {optimisticTodos.map((todo, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {todo}
            </li>
          ))}
        </ul>
      </ExampleContainer>
    </Container>
  );
}

export default UseOptimisticExample;
