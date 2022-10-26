import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "./card";

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
        test("Then it should display today data", () => {
            const expectedDate = new Date().toLocaleString();
            const element = screen.getByText(expectedDate);
            expect(element).toBeInTheDocument();
        });
    });
});
