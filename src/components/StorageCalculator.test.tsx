import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { StorageCalculator } from "@/components/StorageCalculator";
import { risk, storage } from "@/locales/pt-BR";

vi.mock("@vercel/analytics", () => ({ track: vi.fn() }));

async function choosePaper(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(storage.searchLabel), "papel");
  await user.click(screen.getByRole("button", { name: "Papel" }));
}

describe("StorageCalculator", () => {
  it("should interpolate the load and classify the risk", async () => {
    const user = userEvent.setup();
    render(<StorageCalculator />);

    await choosePaper(user);
    await user.type(screen.getByLabelText(/Altura de armazenamento/), "3");
    await user.type(screen.getByLabelText(/Área de armazenamento/), "1500");
    await user.click(screen.getByRole("button", { name: storage.calculate }));

    expect(screen.getByText(storage.resultLabel)).toBeInTheDocument();
    expect(screen.getByText("11.340")).toBeInTheDocument();
    expect(screen.getAllByText(risk.high.label).length).toBeGreaterThan(0);
    expect(
      screen.getByText(storage.interpolatedNote("3,0")),
    ).toBeInTheDocument();
  });

  it("should reject a height outside the annex table", async () => {
    const user = userEvent.setup();
    render(<StorageCalculator />);

    await choosePaper(user);
    await user.type(screen.getByLabelText(/Altura de armazenamento/), "12");
    await user.type(screen.getByLabelText(/Área de armazenamento/), "100");
    await user.click(screen.getByRole("button", { name: storage.calculate }));

    const alert = screen.getByRole("alert");
    expect(within(alert).getByText(storage.errorHeight)).toBeInTheDocument();
  });

  it("should ask for a material before calculating", async () => {
    const user = userEvent.setup();
    render(<StorageCalculator />);

    await user.click(screen.getByRole("button", { name: storage.calculate }));

    expect(screen.getByRole("alert")).toHaveTextContent(storage.errorSelect);
  });
});
