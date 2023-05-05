import Head from 'next/head';
import { FC, useEffect } from 'react';
import PostsContainer from '@/components/PostsContainer';
import { useRouter } from 'next/router';

const Home: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token', token);
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin UI</title>
        <meta name="description" content="Admin UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <PostsContainer />
      </main>
    </>
  )
}

export default Home;
