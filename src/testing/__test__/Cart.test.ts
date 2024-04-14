import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../../componants/RestaurantMenu";
import Header from "../../componants/Header";
import Cart from "../../componants/Cart";
import MOCK_DATA_NAME from "../../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../redux/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
      <Provider store={ appStore } >
      <Header />
      < RestaurantMenu />
      <Cart />
      < /Provider>
    < /BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

//   expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // I will 14 length array of addBtns
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart 1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart 2")).toBeInTheDocument();

  // below i have food items 16 because
  // actual 14 and then i am clicking add+ by fireEvent twice 
  // actial biriyani items 14 and 2 cart items 2 = 16 food items
  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // clearing the cart so i will get my original item number that is 14
  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  expect(
    screen.getByText("Cart is empty! Add items to cart")
  ).toBeInTheDocument();
});