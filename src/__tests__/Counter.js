import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import Counter from "../Counter";
import CounterReducer from "../CounterReducer";

describe("Counter", () => {
  it("does weird things", () => {
    render(<button>Edit</button>);
    expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
  });

  it('displays a count of zero at the start and an "edit" button', () => {
    const store = createStore(combineReducers({ counter: CounterReducer }));
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    screen.logTestingPlaygroundURL();

    expect(screen.getByText("The count is: 0")).toBeInTheDocument();
    // expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  describe('when clicking on "edit" button', () => {
    it('replaces the "edit" button by "plus", "minus", and "save" buttons', () => {
      // TODO
    });

    it('increments the count by one when clicking on the "plus" button', () => {
      // TODO
    });

    it('decrements the count by one when clicking on the "minus" button', () => {
      // TODO
    });

    it('replaces the "plus", "minus", and "save" buttons by "edit" button when clicking on the "save" button', () => {
      // TODO
    });
  });
});
