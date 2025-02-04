import { useState, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, BackButton, ExampleContainer } from '../styles/theme';

function slowOperation(text) {
  const items = [];
  for (let i = 0; i < 2000; i++) {
    items.push(`${text} ${i + 1}`);
  }
  return items;
}

function UseTransitionExample() {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      setItems(slowOperation(value));
    });
  }

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
      <h1>useTransition Example</h1>
      <ExampleContainer>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='search'>Search: </label>
          <input
            type='text'
            id='search'
            value={text}
            onChange={handleChange}
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
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <ul
            style={{
              height: '200px',
              overflowY: 'auto',
              padding: '1rem',
              backgroundColor: '#222',
              borderRadius: '4px',
            }}
          >
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </ExampleContainer>
    </Container>
  );
}

export default UseTransitionExample;
