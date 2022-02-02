import Table from 'react-bootstrap/Table';
import { UserLine } from '../Components/UserLine';

export const UserTable = ({ users }) => {
  return (
    <>
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
