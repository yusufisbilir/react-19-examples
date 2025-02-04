import { useNavigate } from 'react-router-dom';
import { BackButton as StyledBackButton } from '@/styles/theme';

export function BackButton() {
  const navigate = useNavigate();
  return (
    <StyledBackButton onClick={() => navigate('/')}>
      Back to Home
    </StyledBackButton>
  );
}
