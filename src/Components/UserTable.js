import Table from 'react-bootstrap/Table';
import { UserLine } from '../Components/UserLine';
import { UserAction } from './UserAction';

export const UserTable = ({ users }) => {
  return (
    <>
     <div className="wrapper">
        <h2>User list</h2>
        <UserAction action={ {type: 'add', text: 'Add new', variant: 'primary'} } />
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
