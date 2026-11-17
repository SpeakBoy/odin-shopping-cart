import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartProduct from "../components/CartProduct.jsx";

describe("CartProduct component", () => {
    it("renders correct heading", () => {
        render(<CartProduct product={{ title: "Very cool item!" }} />);
        expect(screen.getByRole("heading").textContent).toMatch("Very cool item!");
    });

    it("has correct image source", () => {
        render(<CartProduct product={{ image: "test.png" }} />);
        expect(screen.getByRole("img").getAttribute("src")).toMatch("test.png");
    });

    it("renders correct quantity", () => {
        render(<CartProduct product={{ quantity: 25 }} />);
        expect(screen.getByRole("paragraph").textContent).toContain(25);
    });

    it("decrementProduct decrements the quantity when clicked", async () => {
        const product = { quantity: 3 };

        const decrement = vi.fn((_) => {
            product.quantity -= 1;
        });
        const user = userEvent.setup();

        const { rerender } = render(<CartProduct product={product} decrementProduct={decrement} />);

        const decrementButton = screen.getByRole("button", { name: "Decrement" });

        await user.click(decrementButton);

        rerender(<CartProduct product={product} decrementProduct={decrement} />);

        expect(screen.getByRole("paragraph").textContent).toContain(2);
    });

    it("incrementProduct increments the quantity when clicked", async () => {
        const product = { quantity: 3 };

        const increment = vi.fn((_) => {
            product.quantity += 1;
        });
        const user = userEvent.setup();

        const { rerender } = render(<CartProduct product={product} incrementProduct={increment} />);

        const incrementButton = screen.getByRole("button", { name: "Increment" });

        await user.click(incrementButton);

        rerender(<CartProduct product={product} incrementProduct={increment} />);

        expect(screen.getByRole("paragraph").textContent).toContain(4);
    });
});
