import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../components/Cart.jsx";

describe("Cart component", () => {
    it("renders correct message if there are no products in cart", () => {
        render(<Cart products={[]} />);

        expect(screen.getByRole("paragraph").textContent).toBe(
            "Nothing in the cart yet! Get shopping!",
        );
    });

    it("renders correct number of products in cart", () => {
        const { container } = render(<Cart products={[{}, {}, {}]} />);

        const productDivs = container.querySelectorAll("div.product");

        expect(productDivs).toHaveLength(3);
    });
});
