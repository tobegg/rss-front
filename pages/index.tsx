import Head from 'next/head'
import { PostsApiService } from '@/services/api';
import { FC, useEffect, useState } from 'react';
import { Post } from '@/api';
import Image from 'next/image';

const Home: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const postList = await PostsApiService.postsControllerFindAll();
    setPosts(postList);
  }

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <Head>
        <title>Admin UI</title>
        <meta name="description" content="Admin UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Posts:</h1>
        <div>
          {posts.map(item => (
            <div key={item.id} className="post">
              {item.image && (
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt={item.title}
                />
              )}
              <div className="post__description">
                <h4>{item.author}</h4>
                <div>{item.title}</div>
                <div>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home;
