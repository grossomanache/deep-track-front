import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockUseNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the LoginForm component", () => {
  describe("When instantiated", () => {
    test("Then 1 button and 1 input boxes will be rendered", () => {
      const expectedButtons = 1;
      const expectedInputBoxes = 1;
      const expectedPasswordBoxes = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const searchedButtons = screen.getAllByRole("button");
      const searchedInputBoxes = screen.getAllByRole("textbox");
      const searchedPasswordBoxes = screen.getAllByLabelText("password *");

      expect(searchedButtons).toHaveLength(expectedButtons);
      expect(searchedInputBoxes).toHaveLength(expectedInputBoxes);
      expect(searchedPasswordBoxes).toHaveLength(expectedPasswordBoxes);
    });
  });
  describe("When invoked, and the submit button is enabled and clicked on", () => {
    test("Then an action will be dispatched", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const usernameInputText = screen.getByLabelText("username *");
      const passwordInputText = screen.getByLabelText("password *");

      fireEvent.change(usernameInputText, {
        target: { value: "inputted test text" },
      });
      fireEvent.change(passwordInputText, {
        target: { value: "inputted test text" },
      });

      const submitButton = screen.getByRole("button");

      fireEvent.click(submitButton);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
