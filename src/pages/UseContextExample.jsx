import { createContext, use, useState } from 'react';
import { Container, ExampleContainer, CodeBlock } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

const ThemeContext = createContext('light');

function ThemeDisplay() {
  const theme = use(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function UseContextExample() {
  const [theme, setTheme] = useState('light');
  const codeExample = `
// You can also read context with use, allowing you to read Context conditionally such as after early returns:

import {use} from 'react';
import ThemeContext from './ThemeContext'

function Heading({children}) {
  if (children == null) {
    return null;
  }
  
  // This would not work with useContext
  // because of the early return.
  const theme = use(ThemeContext);
  return (
    <h1 style={{color: theme.color}}>
      {children}
    </h1>
  );
}
`;

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
      <CodeBlock>
        <code>{codeExample}</code>
      </CodeBlock>
    </Container>
  );
}

export default UseContextExample;
