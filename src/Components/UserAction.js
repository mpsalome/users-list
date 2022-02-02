import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/actions/users';
import { useNavigate } from 'react-router-dom';

export const UserAction = ({ action, userId }) => {
  const navigate = useNavigate();

  const executeAction = () => {
    switch (action.type) {
      case 'delete':
        dispatch(removeUser(userId));
        break;
      case 'add': 
        navigate('/add');
        break;
      case 'edit': 
        navigate(`/edit/${userId}`);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  return (
    <Button variant={action.variant} size="md" onClick={executeAction}>
      {action.text}
    </Button>
  );
};
