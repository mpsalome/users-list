import { UserAction } from './UserAction';

export const UserLine = ({ user }) => {
  const actions = {
    edit: { type: 'edit', text: 'edit', variant: 'warning' },
    delete: { type: 'delete', text: 'delete', variant: 'danger' },
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
      <td>
        <UserAction action={actions.edit} userId={user.id}/>
      </td>
      <td>
        <UserAction action={actions.delete} userId={user.id}/>
      </td>
    </tr>
  );
};
