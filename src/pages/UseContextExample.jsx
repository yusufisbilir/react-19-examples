import { createContext, use, useState } from 'react';
import { Container, ExampleContainer } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

const ThemeContext = createContext('light');

function ThemeDisplay() {
  const theme = use(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function UseContextExample() {
  const [theme, setTheme] = useState('light');

  return (
    <Container>
      <BackButton />
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
