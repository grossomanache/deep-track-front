import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LoginForm from "../../src/components/LoginForm/LoginForm";
import { UserState } from "../../src/redux/interfaces/UserInterfaces";
import { useAppSelector } from "../../src/redux/store/hooks";
import styles from "../../src/styles/Home.module.css";

const Login: NextPage = () => {
  const { name }: UserState = useAppSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Deep Track - Login</title>
        <meta name="description" content="Login to Deep Track app" />
        <link rel="icon" href="/weight.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Deep Track</h1>
        <LoginForm />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Login;
