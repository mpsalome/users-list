import Table from 'react-bootstrap/Table';
import { UserLine } from '../Components/UserLine';
import { UserAction } from './UserAction';
import { CustomAlert } from '../Components/CustomAlert';

export const UserTable = ({ users }) => {
  return (
    <>
      <div className="wrapper tableTitle">
        <h2>User list</h2>
        <UserAction
          action={{ type: 'add', text: 'Add new', variant: 'primary' }}
        />
      </div>
      <div className="wrapper">
        {users.length === 0 ? (
          <CustomAlert
            title={'Oh snap!'}
            variant={'danger'}
            message={`Looks like all users were deleted. Why don't you try adding a new one?`}
          />
        ) : (
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
        )}
      </div>
    </>
  );
};
