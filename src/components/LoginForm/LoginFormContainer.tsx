import styled from "styled-components";

export const LoginFormContainer = styled.div`
  border: 2px grey solid;
  padding: 20px 30px;
  border-radius: 15px;
  background-color: white;

  form {
    div {
      &.login-form {
        &__input {
          margin: 10px 2px;
        }
      }
    }
  }
`;
