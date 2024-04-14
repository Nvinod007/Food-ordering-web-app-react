import { render, screen } from "@testing-library/react";
import MOCK_DATA from '../../mocks/resCardMock.json'
import "@testing-library/jest-dom";
import RestaurantCard from '../../componants/RestaurantCard';
import { BrowserRouter as Router } from 'react-router-dom';

it("should render RestaurantCard component with props Data", () => {
  render(
    <Router>
      <RestaurantCard resData={ MOCK_DATA } />
    </Router>
  )
  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromtedLabel()
});