import { use } from 'react';
import { Container, ExampleContainer } from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello from use hook!');
  }, 1000);
});

function UseExample() {
  const message = use(promise);

  return (
    <Container>
      <BackButton />
      <h1>use Hook Example</h1>
      <ExampleContainer>
        <p>Message from Promise: {message}</p>
      </ExampleContainer>
    </Container>
  );
}

export default UseExample;
