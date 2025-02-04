import { useState, useOptimistic } from 'react';
import { Container, ExampleContainer, CodeBlock } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

function UseOptimisticExample() {
  const [todos, setTodos] = useState(['Learn React', 'Learn Next.js']);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  );

  const codeExample = `
// useOptimistic lets you show optimistic UI updates before an action completes:

function TodoList() {
  const [todos, setTodos] = useState(['Buy milk', 'Write code']);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  );

  async function handleAddTodo(text) {
    // Show optimistic update immediately
    addOptimisticTodo(text);

    // Then perform the actual update
    await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ text })
    });
    
    // Update the real state after the API call
    setTodos(prev => [...prev, text]);
  }

  return (
    <div>
      {optimisticTodos.map(todo => (
        <div key={todo}>{todo}</div>
      ))}
      <button onClick={() => handleAddTodo('New Todo')}>
        Add Todo
      </button>
    </div>
  );
}

// Another example with likes:
function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (state) => state + 1
  );

  async function handleLike() {
    addOptimisticLike();
    await fetch(\`/api/posts/\${post.id}/like\`, { method: 'POST' });
    setLikes(prev => prev + 1);
  }

  return (
    <div>
      <p>{post.content}</p>
      <button onClick={handleLike}>
        Likes: {optimisticLikes}
      </button>
    </div>
  );
}`;

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
      <BackButton />
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
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default UseOptimisticExample;
