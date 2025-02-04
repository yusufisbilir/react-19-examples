import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, BackButton, ExampleContainer } from '../styles/theme';

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello from use hook!');
  }, 1000);
});

function UseExample() {
  const navigate = useNavigate();
  const message = use(promise);

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
      <h1>use Hook Example</h1>
      <ExampleContainer>
        <p>Message from Promise: {message}</p>
      </ExampleContainer>
    </Container>
  );
}

export default UseExample;
