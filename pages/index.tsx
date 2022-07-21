import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../src/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deep Track</title>
        <meta name="description" content="Track all of your lead measures" />
        <link rel="icon" href="/weight.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Deep Track</h1>

        <p className={styles.description}>
          Page under
          <code className={styles.code}>construction</code>
        </p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
