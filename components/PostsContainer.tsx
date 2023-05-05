import { Post, ResponsePostDto, SearchPostDto, User } from '@/api';
import { AuthApiService, PostsApiService } from '@/services/api';
import React, { FC, useEffect, useRef, useState } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';
import Pagination from './Pagination';
import PostItem from './PostItem';
import Select from './Select';
import TextArea from './TextArea';

const SEARCH_LIMIT = 4;

const FILTER_OPTIONS = [
  'article',
  'empty-result',
];

const PostsContainer: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [post, updatePost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagesCount, setPagesCount] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');

  const getPosts = async () => {
    const req: SearchPostDto = {
      search: searchValue,
      limit: SEARCH_LIMIT,
      filter: filterValue,
      page: currentPage
    }
    const postList: ResponsePostDto = await PostsApiService.postsControllerFindAll({ searchPostDto: req });

    setPagesCount(Math.ceil(postList.count/5));

    //@ts-ignore
    setPosts(postList.rows);
  }

  const removePost = async(id: number) => {
    try {
      await PostsApiService.postsControllerRemove({ id: String(id) });
      await getPosts();
    } catch(e) {
      console.log(e);
    }
  }

  const onSavePost = async() => {
    setShowModal(false);
    if (!post) {
      return;
    }
    try {
      if (post.id) {
        await PostsApiService.postsControllerUpdate({ id: String(post?.id), createPostDto: post });
      } else {
        await PostsApiService.postsControllerCreate({ createPostDto: post });
      }
      await getPosts();
    } catch(e) {
      console.log(e);
    }
  }

  const onCreatePost = () => {
    updatePost({ id: 0, title: '', description: '', categories: '', author: '', image: '' });
    setShowModal(true);
  };

  const onChangePage = (val: number) => {
    setCurrentPage(val);
  }

  const onSubmitSearch = () => {
    if (currentPage === 1) {
      getPosts();
    } else {
      setCurrentPage(1);
    }
  }

  const onClearSearch = () => {
    setSearchValue('');
    setFilterValue('');
  }

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (!showModal) {
      updatePost(null);
    }
  }, [showModal]);

  useEffect(() => {
    if (!searchValue) {
      onSubmitSearch();
    }
  }, [searchValue]);

  useEffect(() => {
    getPosts();
  }, [currentPage, filterValue]);

  return (
    <div className="posts">
      <div className="flex items-end justify-between">
        <h1>Posts:</h1>
        <Button label="Create Post" onClick={onCreatePost} className="ml-3" />
      </div>
      
      <div className="flex items-end justify-between">
        <div className="flex items-end">
          <Input id="search" label="Search" value={searchValue} wrapperClassName="mt-6" onChange={(v) => setSearchValue(v)} />
          <Button label="Submit" onClick={onSubmitSearch} className="ml-3" />
          <Button label="Clear" onClick={() => onClearSearch()} className="ml-3" />
        </div>
         <Select
          id="category-select"
          options={FILTER_OPTIONS}
          value={filterValue}
          label="Filter by categories"
          onChange={setFilterValue}
        />
      </div>
      {!posts.length ? (
        <h2>Nothing found</h2>
      ) : (
        <>
          <div className="posts__list mt-6">
            {posts?.map(post => {
              return (
                <PostItem
                  key={post.id}
                  post={post}
                  onDelete={() => removePost(post.id)}
                  onEdit={() => {
                    updatePost(post);
                    setShowModal(true);
                  }}
                />
              );
            })}
          </div>
          <Pagination count={pagesCount} currentStep={currentPage} onClick={onChangePage} />
          <Modal showModal={showModal} setShowModal={setShowModal} onSave={onSavePost}>
            <form className="w-full">
              <Input
                id="post-name"
                onChange={(val) => {
                  if (post) {
                    //@ts-ignore
                    updatePost((prevPost) => ({ ...prevPost, title: val }));
                  }
                }}
                value={post?.title || ''}
                label="Post name"
              />
              <TextArea
                id="post-descr"
                onChange={(val) => {
                  if (post) {
                    //@ts-ignore
                    updatePost((prevPost) => ({ ...prevPost, description: val }));
                  }
                }}
                value={post?.description || ''}
                label="Post description"
                wrapperClassName="mt-3"
              />
            </form> 
          </Modal>
        </>
      )}
    </div>
  );
};

export default PostsContainer;