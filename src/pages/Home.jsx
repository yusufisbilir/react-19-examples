import { useNavigate } from 'react-router-dom';
import { Container, Grid, FeatureCard, Header, Logo } from '../styles/theme';
import { routes } from '../utils/routes';
import ReactIcon from '@/assets/react.svg';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Logo src={ReactIcon} loading='lazy' alt='React Logo' />
        <h1>React 19 New Features</h1>
      </Header>
      <Grid>
        {routes.map((feature) => (
          <FeatureCard
            key={feature.path}
            onClick={() => navigate(feature.path)}
          >
            {feature.name}
          </FeatureCard>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
