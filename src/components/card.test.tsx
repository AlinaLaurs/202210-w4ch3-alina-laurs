import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Given Card component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(<Card />);
        });
        test("Then it should display the character name", () => {
            const element = screen.getByText(/Daenerys/i);
            expect(element).toBeInTheDocument();
        });
    });
});
