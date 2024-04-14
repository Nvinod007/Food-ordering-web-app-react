import { render, screen } from "@testing-library/react"
import Contact from '../../componants/Contact';
import '@testing-library/jest-dom';


test('Should load contact us component', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');
  // Assertion
  expect(heading).toBeInTheDocument();
})

// grouping the test casses
describe('Submmit button and text in contact component', () => {
  test('Should load button inside contact component', () => {
    render(<Contact />);
  const button = screen.getByRole('button');
    // Assertion
    expect(button).toBeInTheDocument();
  })

  // instead of test we can use it also no difference
  it('Submit text should be there inside contact component', () => {
    render(<Contact />);
  const submitText = screen.getByText("Submit");
    // Assertion
    expect(submitText).toBeInTheDocument();
  })
})

test('should load input "name" there inside contact component', () => {
  render(<Contact />);
  const ipName = screen.getByPlaceholderText("name");
  // Assertion
  expect(ipName).toBeInTheDocument();
})

it('Should load 2 input boxes', () => {
  render(<Contact />);
  // Querrying
  const IpBoxes = screen.getAllByRole('textbox');

  expect(IpBoxes.length).toBe(2)
  expect(IpBoxes.length).not.toBe(3)
})