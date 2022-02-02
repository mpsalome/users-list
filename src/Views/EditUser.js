import { UserForm } from '../Components/UserForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const EditUser = () => {
  let { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.filter((el) => {
    return el.id === parseInt(id);
  });

  return (
    <>
      <UserForm user={user} action={"edit"} />
    </>
  );
};
