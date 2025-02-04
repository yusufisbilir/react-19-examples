import { useFormStatus } from 'react-dom';
import {
  Container,
  ExampleContainer,
  CodeBlock,
  Button,
  Input,
  FormGroup,
} from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}

function UseFormStatusExample() {
  const codeExample = `
// useFormStatus provides status information about a parent <form>:

'use client';

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

// Example with loading states and error handling:
function SignUpForm() {
  async function handleSubmit(formData) {
    'use server';
    await createUser(formData);
  }

  return (
    <form action={handleSubmit}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <SubmitButton />
      <LoadingSpinner /> {/* Shows only while form is submitting */}
      <ErrorBoundary>
        {/* Handle any errors that occur during submission */}
      </ErrorBoundary>
    </form>
  );
}`;

  async function formAction() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <Container>
      <BackButton />
      <h1>useFormStatus Example</h1>
      <ExampleContainer>
        <form action={formAction}>
          <FormGroup>
            <label htmlFor='message'>Message: </label>
            <Input type='text' id='message' name='message' />
          </FormGroup>
          <SubmitButton />
        </form>
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default UseFormStatusExample;
