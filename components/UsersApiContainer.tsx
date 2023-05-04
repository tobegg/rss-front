import { User } from '@/api';
import { UsersApiService } from '@/services/api';
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';
import UserItem from './UserItem';

interface Props {
  users: User[];
}

const UsersApiContainer: FC<Props> = ({ users }) => {
  return (
    <div>
      <h2>Get users by API Service</h2>
      {users?.map(user => {
        return <UserItem key={user.id} user={user} />
      })}
    </div>
  );
};

export default UsersApiContainer;
