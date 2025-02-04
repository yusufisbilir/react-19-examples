import { useState, useTransition } from 'react';
import {
  Container,
  ExampleContainer,
  CodeBlock,
  Input,
  FormGroup,
  ScrollableList,
  ListItem,
} from '@/styles/theme';
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
        <FormGroup>
          <label htmlFor='search'>Search: </label>
          <Input type='text' id='search' value={text} onChange={handleChange} />
        </FormGroup>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          <ScrollableList>
            {items.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </ScrollableList>
        )}
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default UseTransitionExample;
