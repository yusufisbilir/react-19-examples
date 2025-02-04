import { createContext, use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, BackButton, ExampleContainer } from '../styles/theme';

const ThemeContext = createContext('light');

function ThemeDisplay() {
  const theme = use(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function UseContextExample() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
      <h1>use(context) Example</h1>
      <ExampleContainer>
        <ThemeContext.Provider value={theme}>
          <ThemeDisplay />
          <button
            onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
          >
            Toggle Theme
          </button>
        </ThemeContext.Provider>
      </ExampleContainer>
    </Container>
  );
}

export default UseContextExample;
