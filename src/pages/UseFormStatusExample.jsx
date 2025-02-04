import { useFormStatus } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Container, BackButton, ExampleContainer } from '../styles/theme';

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
  const navigate = useNavigate();

  async function formAction() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
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
      </ExampleContainer>
    </Container>
  );
}

export default UseFormStatusExample;
