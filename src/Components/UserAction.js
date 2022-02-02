import Button from 'react-bootstrap/Button';

export const UserAction = ({ action, userId }) => {

  return (
    <Button variant={action.variant} size="md" >
      {action.text}
    </Button>
  );
};
