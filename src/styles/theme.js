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
