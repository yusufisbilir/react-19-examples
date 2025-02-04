import { Container, ExampleContainer, CodeBlock } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

async function submitForm(formData) {
  const name = formData.get('name');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Hello, ${name}!`;
}

function FormActionExample() {
  const codeExample = `
// Form actions allow you to handle form submissions directly in your components:

'use client';

async function submitForm(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    await signIn({ email, password });
    router.push('/dashboard');
  } catch (error) {
    console.error(error);
  }
}

function LoginForm() {
  return (
    <form action={submitForm}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Log in</button>
    </form>
  );
}

// You can also use form action with server components:
export default function ServerForm() {
  async function handleSubmit(formData) {
    'use server';
    const name = formData.get('name');
    await saveToDatabase(name);
  }

  return (
    <form action={handleSubmit}>
      <input name="name" />
      <button type="submit">Save</button>
    </form>
  );
}`;

  return (
    <Container>
      <BackButton />
      <h1>Form Action Example</h1>
      <ExampleContainer>
        <form
          action={async (formData) => {
            const response = await submitForm(formData);
            alert(response);
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              id='name'
              name='name'
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
            Submit
          </button>
        </form>
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default FormActionExample;
