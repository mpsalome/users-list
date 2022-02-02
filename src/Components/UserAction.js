import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserModal } from '../Components/UserModal';

export const UserAction = ({ action, userId }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = (data) => setShow(data);

  const executeAction = () => {
    switch (action.type) {
      case 'delete':
        handleShow();
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

  return (
    <>
      <Button variant={action.variant} size="md" onClick={executeAction}>
        {action.text}
      </Button>
      <UserModal show={show} func={handleClose} userId={userId}/>
    </>
  );
};
