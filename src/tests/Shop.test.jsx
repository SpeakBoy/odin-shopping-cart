import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop.jsx";

describe("Shop component", () => {
    it("renders nothing if there are no products in shop", () => {
        render(<Shop products={[]} />);

        expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
    });

    it("renders correct number of products in cart", () => {
        render(<Shop products={[{ id: 1 }, { id: 2 }]} />);

        expect(screen.getAllByText(/quantity/i)).toHaveLength(2);
    });
});
