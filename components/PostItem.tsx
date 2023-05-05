import { Post } from '@/api';
import React, { FC } from 'react';
import Button from './Button';

interface PostItemProps {
  post: Post;
  onDelete: () => void;
  onEdit: () => void;
}

const PostItem: FC<PostItemProps> = ({ post, onDelete, onEdit }) => {
  return (
    <div className="post-item border-2 border-solid border-orange-200 bg-stone-50 drop-shadow-md mb-3 p-4 rounded">
      <div className="flex justify-between">
        <h4 className="text-lg font-semibold">{post.title}</h4>
        <p>{post.author}</p>
      </div>
      <p>{post.description}</p>

      <div className="flex justify-end mt-3 pt-3 border-t-2 border-t-solid border-t-orange-200">
        <Button label="Edit" onClick={onEdit} />
        <Button label="Remove" onClick={onDelete} className="ml-3" />
      </div>
    </div>
  );
};

export default PostItem;
