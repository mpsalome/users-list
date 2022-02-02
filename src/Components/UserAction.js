import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/actions/users';

export const UserAction = ({ action, userId }) => {
  const executeAction = () => {
    switch (action.type) {
      case 'delete':
        dispatch(removeUser(userId));
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
