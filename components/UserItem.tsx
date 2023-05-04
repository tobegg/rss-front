import { User } from '@/api';
import React, { FC } from 'react';

interface UserItemProps {
  user: User;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      {user.id}: {user.email}
    </div>
  );
};

export default UserItem;
