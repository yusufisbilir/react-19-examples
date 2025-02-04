import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background-color: #0a0a0a;
    color: #fff;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

export const FeatureCard = styled.button`
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 2rem;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 200px;
  width: 100%;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
`;

export const BackButton = styled.button`
  background-color: #333;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #444;
  }
`;

export const ExampleContainer = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  animation: spin 10s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CodeBlock = styled.pre`
  background-color: #111;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 1rem 0;
  border: 1px solid #333;

  code {
    color: #e6e6e6;
  }

  .keyword {
    color: #c678dd;
  }

  .function {
    color: #61afef;
  }

  .string {
    color: #98c379;
  }

  .comment {
    color: #5c6370;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-left: 0.5rem;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 4px;
  color: white;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? '#666' : '#444')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled) {
    background-color: #555;
  }
`;

export const List = styled.ul`
  margin-top: 1rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const ScrollableList = styled.ul`
  height: 200px;
  overflow-y: auto;
  padding: 1rem;
  background-color: #222;
  border-radius: 4px;
`;

export const UserDataContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #2a2a2a;
  border-radius: 8px;
`;
