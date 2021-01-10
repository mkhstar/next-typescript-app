import Head from 'next/head';
import { FC } from 'react';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <h1 className="text-gray-400">The Next Typescript App</h1>
    </div>
  );
};

export default Home;
