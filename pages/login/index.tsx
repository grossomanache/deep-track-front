import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import LoginForm from "../../src/components/LoginForm/LoginForm";
import { UserState } from "../../src/redux/interfaces/UserInterfaces";
import { useAppSelector } from "../../src/redux/store/hooks";
import { LoginContainer } from "../../src/styles/LoginContainer";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Deep Track - Login</title>
        <meta name="description" content="Login to Deep Track app" />
        <link rel="icon" href="/weight.ico" />
      </Head>
      <LoginContainer>
        <ToastContainer />
        <h1>Welcome to Deep Track</h1>
        <LoginForm />
      </LoginContainer>
      <footer></footer>
    </>
  );
};

export default Login;
