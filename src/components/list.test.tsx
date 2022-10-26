import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { List } from "./list";

describe("Given Card component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(<List />);
        });
        test("Then it should display 5 card names", () => {
            const element = screen.getByText(
                /Joffrey, Jamie, Daenerys, Tyrion, Bronn/i
            );
            expect(element).toBeInTheDocument();
        });
    });
});
