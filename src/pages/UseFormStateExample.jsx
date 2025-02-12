import { useFormState } from 'react-dom';
import {
  Container,
  ExampleContainer,
  CodeBlock,
  Button,
  Input,
  FormGroup,
} from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

async function formAction(prevState, formData) {
  const count = formData.get('count');
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Number(prevState || 0) + Number(count);
}

function UseFormStateExample() {
  const [state, formAction2] = useFormState(formAction, 0);
  const codeExample = `
// useFormState lets you update state based on the result of a form action:

'use client';

async function increment(previousState, formData) {
  return previousState + 1;
}

function Counter() {
  const [count, formAction] = useFormState(increment, 0);
  return (
    <form action={formAction}>
      Count: {count}
      <button type="submit">Increment</button>
    </form>
  );
}

// You can also use it with server actions:
function SearchResults() {
  const [results, formAction] = useFormState(async (prev, formData) => {
    'use server';
    const query = formData.get('query');
    const results = await searchAPI(query);
    return results;
  }, []);

  return (
    <form action={formAction}>
      <input name="query" />
      <button type="submit">Search</button>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </form>
  );
}`;

  return (
    <Container>
      <BackButton />
      <h1>useFormState Example</h1>
      <ExampleContainer>
        <p>Current count: {state}</p>
        <form action={formAction2}>
          <FormGroup>
            <label htmlFor='count'>Add number: </label>
            <Input type='number' id='count' name='count' defaultValue={1} />
          </FormGroup>
          <Button type='submit'>Add</Button>
        </form>
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default UseFormStateExample;
