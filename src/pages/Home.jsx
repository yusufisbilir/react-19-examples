import { useNavigate } from 'react-router-dom';
import { Container, Grid, FeatureCard } from '../styles/theme';
import { routes } from '../utils/routes';

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>React 19 New Features</h1>
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
