import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import LoginForm from "../../src/components/LoginForm/LoginForm";
import { UserState } from "../../src/redux/interfaces/UserInterfaces";
import { useAppSelector } from "../../src/redux/store/hooks";
import styles from "../../src/styles/Home.module.css";
import { LoginContainer } from "./LoginContainer";

const Login: NextPage = () => {
  return (
    <LoginContainer>
      <div className={styles.container}>
        <Head>
          <title>Deep Track - Login</title>
          <meta name="description" content="Login to Deep Track app" />
          <link rel="icon" href="/weight.ico" />
        </Head>

        <main className={styles.main}>
          <ToastContainer />
          <h1 className={styles.title}>Welcome to Deep Track</h1>
          <LoginForm />
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </LoginContainer>
  );
};

export default Login;
