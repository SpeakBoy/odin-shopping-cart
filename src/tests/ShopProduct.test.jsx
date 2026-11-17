import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopProduct from "../components/ShopProduct.jsx";

describe("ShopProduct component", () => {
    it("renders correct heading", () => {
        render(<ShopProduct product={{ title: "Very sick product!" }} />);
        expect(screen.getByRole("heading").textContent).toMatch("Very sick product!");
    });

    it("has correct image source", () => {
        render(<ShopProduct product={{ image: "test.png" }} />);
        expect(screen.getByRole("img").getAttribute("src")).toMatch("test.png");
    });

    it("minimum quantity value is 1", async () => {
        const user = userEvent.setup();

        render(<ShopProduct product={{}} />);
        const input = screen.getByRole("spinbutton");

        await user.clear(input);
        await user.type(input, "0");

        expect(input).toBeInvalid();

        await user.clear(input);
        await user.type(input, "1");

        expect(input).toBeValid();
    });
});
