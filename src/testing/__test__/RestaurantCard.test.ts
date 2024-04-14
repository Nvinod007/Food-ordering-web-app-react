import { render, screen } from "@testing-library/react";
import MOCK_DATA from '../../mocks/resCardMock.json'
import "@testing-library/jest-dom";
import RestaurantCard from '../../componants/RestaurantCard';

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={ MOCK_DATA } />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromtedLabel()
});