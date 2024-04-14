import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../../componants/Header";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import appStore from '../../redux/appstore';
import { BrowserRouter } from "react-router-dom";

it('Should load  componant with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={ appStore } >
        <Header />
      < /Provider>
    < /BrowserRouter>
  )
  // const screenButton = screen.getByRole('button')
  const loginButton = screen.getByText('Log In')

  // expect(screenButton).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
})

it("Should render Header Component with a Cart items 0 ", () => {
  render(
    <BrowserRouter>
    <Provider store={ appStore } >
    <Header />
    < /Provider>
  < /BrowserRouter>
  );

  const cartItems = screen.getByText("Cart 0");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
  render(
    <BrowserRouter>
    <Provider store={ appStore } >
    <Header />
    < /Provider>
  < /BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
    <Provider store={ appStore } >
    <Header />
    < /Provider>
  < /BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Log In" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Log Out" });

  expect(logoutButton).toBeInTheDocument();
});