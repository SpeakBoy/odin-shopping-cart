import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar.jsx";
import { MemoryRouter } from "react-router";

describe("Navbar component", () => {
    it("renders three links", () => {
        render(
            <MemoryRouter>
                <Navbar numItemsInCart={0} />
            </MemoryRouter>,
        );

        const links = screen.getAllByRole("link");

        expect(links).toHaveLength(3);
    });

    it("renders number of items in cart", () => {
        render(
            <MemoryRouter>
                <Navbar numItemsInCart={25} />
            </MemoryRouter>,
        );

        const cartLink = screen.getByRole("link", { name: /cart/i });

        expect(cartLink.textContent).toContain(25);
    });
});
