import Key from "./Key"
import { render, screen } from "@testing-library/react";

describe("Given the Key component", () => {
  describe("When is rendered with the text '9'", () => {
    test("Then it should show a button with the text '9'", () => {      
      const text = "9";
      render(<Key className="" text={text}/>);

      const key = screen.getByRole("button", {name: "9"});
    });
  });

  describe("When is rendered with the text 'delete'", () => {
    test("Then it should show a button with the text 'delete'", () => {
      const text = "delete";

      render(<Key className="big" text={text}/>);

      const key = screen.getByRole("button", {name: "delete"});
    });
  })
});
