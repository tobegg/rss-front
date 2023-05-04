import { User } from '@/api';
import { userAPI } from '@/services/UserService';
import React, { FC } from 'react';
import UserItem from './UserItem';

const UsersContainer: FC = () => {
  // Get data via redux service
  const { data: users, error, isLoading } = userAPI.useFetchAllUsersQuery(5);
  const [createUser, {}] = userAPI.useCreateUserMutation();

  const handleCreate = async () => {
    const newUser: User = { id: 142, email: 'email', password: '123123' };
    await createUser(newUser);
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && (<p>Error</p>)}
      <h2>Get users by Redux Service</h2>
      <button onClick={handleCreate}>Add User</button>
      {users?.map(user => {
        return <UserItem key={user.id} user={user} />
      })}
    </div>
  );
};

export default UsersContainer;