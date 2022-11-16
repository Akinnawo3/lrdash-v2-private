import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "../../../contexts/AuthContext";
import LoadingContextProvider from "../../../contexts/LoadingContext";
import { TestRenderTemplate } from "../../../TestRenderTemplate";
import Signin from "../Signin";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    post: () => ({
      data: {
        status: "success",
        data: {},
      },
    }),
  },
}));

describe("Signin Component tests", () => {
  it("Signin component should be rendered", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
  });
  it("Phone number and password input should be initially empty", () => {
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

  it("Password input should initially be of type password", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i);
    expect(passwordInputEl).toHaveAttribute("type", "password");
  });

  it("Password input should be of type text when the peep icon is clicked", () => {
    render(
      <TestRenderTemplate>
        <Signin />
      </TestRenderTemplate>
    );
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i);
    const passwordPeepEl = screen.getByTestId(/password-peep/i);
    expect(passwordInputEl).toHaveAttribute("type", "password");
    fireEvent.click(passwordPeepEl);
    expect(passwordInputEl).toHaveAttribute("type", "text");
    fireEvent.click(passwordPeepEl);
    expect(passwordInputEl).toHaveAttribute("type", "password");
  });

  it("submit button shoulkd be initially disabled", () => {
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
  it("loading should not be rendered after fetching", async () => {
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
    await waitFor(() => expect(buttonEl).toHaveTextContent(/loading.../i));
  });
});
