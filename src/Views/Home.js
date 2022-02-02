import { UserTable } from '../Components/UserTable';
import { useSelector } from 'react-redux';

export const Home = () => {
  const users = useSelector((state) => state.users.users);

  return <UserTable users={users} />;
};
