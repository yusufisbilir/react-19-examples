import {
  Container,
  ExampleContainer,
  CodeBlock,
  Button,
  Input,
  FormGroup,
} from '@/styles/theme';
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
          <FormGroup>
            <label htmlFor='name'>Name: </label>
            <Input type='text' id='name' name='name' required />
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </form>
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default FormActionExample;
