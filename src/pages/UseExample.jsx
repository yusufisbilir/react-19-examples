import { use } from 'react';
import {
  Container,
  ExampleContainer,
  CodeBlock,
  UserDataContainer,
} from '@/styles/theme';
import { BackButton } from '@/components/BackButton';

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello from use hook!');
  }, 1000);
});

const fetchUserPromise = fetch(
  'https://jsonplaceholder.typicode.com/users/1'
).then((res) => res.json());

function UseExample() {
  const message = use(promise);
  const userData = use(fetchUserPromise);
  const codeExample = `
// For example, you can read a promise with use, and React will Suspend until the promise resolves:

import { use } from 'react';

function Comments({commentsPromise}) {
  // \`use\` will suspend until the promise resolves.
  const comments = use(commentsPromise);
  return comments.map(comment => 
    return <p key={comment.id}>{comment}</p>;
  );
};

function Page({commentsPromise}) {
  // When \`use\` suspends in Comments,
  // this Suspense boundary will be shown.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}

// Example of using the \`use\` hook with fetch:
const userPromise = fetch('https://api.example.com/user/1')
  .then(res => res.json());

function UserProfile() {
  const userData = use(userPromise);
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}`;

  return (
    <Container>
      <BackButton />
      <h1>use Hook Example</h1>
      <ExampleContainer>
        <p>Message from Promise: {message}</p>
        <UserDataContainer>
          <h3>Fetched User Data:</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Company: {userData.company.name}</p>
        </UserDataContainer>
        <CodeBlock>
          <code>{codeExample}</code>
        </CodeBlock>
      </ExampleContainer>
    </Container>
  );
}

export default UseExample;
