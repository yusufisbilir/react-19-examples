import { Container, ExampleContainer } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

async function submitForm(formData) {
  const name = formData.get('name');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Hello, ${name}!`;
}

function FormActionExample() {
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
      </ExampleContainer>
    </Container>
  );
}

export default FormActionExample;
