import { UserForm } from '../Components/UserForm';

export const NewUser = () => {
  return (
    <>
      <div className="wrapper">
        <h2>Add User</h2>
      </div>
      <UserForm action={'add'} />
    </>
  );
};
