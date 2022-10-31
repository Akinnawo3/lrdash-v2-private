import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "../../../contexts/AuthContext";
import LoadingContextProvider from "../../../contexts/LoadingContext";
import { TestRenderTemplate } from "../../../TestRenderTemplate";
import Signin from "../Signin";

describe("Signin Component tests", () => {
  it("Signin component should be rendered", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
  });
  it("Phone number and email input should be initially empty", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
    const telephoneInputEl = screen.getByPlaceholderText(/Enter phone number/i);
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i);
    expect(telephoneInputEl).toHaveTextContent("");
    expect(passwordInputEl).toHaveTextContent("");
  });
  it("submit button shoulkd be initially disables", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeDisabled();
  });
  it("submit button should not be disabled when there is content in the phone number and password inputs", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
    const telephoneInputEl = screen.getByPlaceholderText(/Enter phone number/i);
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i);
    const buttonEl = screen.getByRole("button");
    fireEvent.change(telephoneInputEl, { target: { value: "08166551790" } });
    fireEvent.change(passwordInputEl, { target: { value: "Password" } });

    expect(buttonEl).not.toBeDisabled();
  });

  it("content of the button should be loading when its loading", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
    const telephoneInputEl = screen.getByPlaceholderText(/Enter phone number/i);
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i);
    const buttonEl = screen.getByRole("button");

    fireEvent.change(telephoneInputEl, { target: { value: "08166551790" } });
    fireEvent.change(passwordInputEl, { target: { value: "Password" } });

    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/loading.../i);
  });
});
