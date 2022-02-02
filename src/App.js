import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApplicationRoutes } from './router/ApplicationRoutes';

function App() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <ApplicationRoutes />
    </Container>
  );
}

export default App;
