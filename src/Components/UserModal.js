import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removeUser } from '../store/actions/users';
import { useDispatch } from 'react-redux';

export const UserModal = ({ show, userId, func }) => {
  const dispatch = useDispatch();
  const handleClose = () => func(false);
  const handleDelete = () => {
    dispatch(removeUser(userId));
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};
