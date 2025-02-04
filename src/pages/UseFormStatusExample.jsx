import { useFormStatus } from 'react-dom';
import { Container, ExampleContainer, CodeBlock } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      style={{
        backgroundColor: pending ? '#666' : '#444',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        color: 'white',
        cursor: pending ? 'not-allowed' : 'pointer',
      }}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
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
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor='message'>Message: </label>
            <input
              type='text'
              id='message'
              name='message'
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
