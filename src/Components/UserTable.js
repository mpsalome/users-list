import Table from 'react-bootstrap/Table';
import { UserLine } from '../Components/UserLine';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

export const UserTable = ({ users }) => {
  return (
    <>
     <div className="wrapper">
        <h2>User list</h2>
        <LinkContainer to="/add">
          <Button variant="primary" size="md">
            Add new
          </Button>
        </LinkContainer>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserLine key={user.id} user={user} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
