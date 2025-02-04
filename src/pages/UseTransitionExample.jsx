import { useState, useTransition } from 'react';
import { Container, ExampleContainer, CodeBlock } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

function slowOperation(text) {
  const items = [];
  for (let i = 0; i < 2000; i++) {
    items.push(`${text} ${i + 1}`);
  }
  return items;
}

function UseTransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const codeExample = `
// useTransition lets you mark UI updates as transitions to avoid blocking the UI:

function SearchResults() {
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    // Update the input immediately
    setSearchQuery(e.target.value);

    // Mark the search results update as a transition
    startTransition(() => {
      // This update is non-urgent and can be interrupted
      const searchResults = performExpensiveSearch(e.target.value);
      setResults(searchResults);
    });
  }

  return (
    <div>
      <input value={searchQuery} onChange={handleSearch} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Another example with tab switching:
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <div>
      <TabButton 
        isActive={tab === 'home'}
        onClick={() => selectTab('home')}
      >
        Home
      </TabButton>
      <TabButton 
        isActive={tab === 'posts'}
        onClick={() => selectTab('posts')}
      >
        Posts (Slow)
      </TabButton>
      {isPending && <Spinner />}
      <TabPanel tab={tab} />
    </div>
  );
}`;

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      setItems(slowOperation(value));
    });
  }

  return (
    <Container>
      <BackButton />
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
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default UseTransitionExample;
