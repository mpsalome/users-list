import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApplicationRoutes } from './router/ApplicationRoutes';
import { useDispatch } from 'react-redux';
import { loadUsers } from './store/actions/users';
import { useEffect } from 'react';
import { UserService } from './api/UserService';

function App() {
  const dispatch = useDispatch();

  const getUsers = async () => {
    const { data } = await UserService.getUsers();

    dispatch(loadUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <Container>
      <h1>Dashboard</h1>
      <ApplicationRoutes />
    </Container>
  );
}

export default App;
