import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SpecificLoadCalculator } from "@/components/SpecificLoadCalculator";
import { risk, specific } from "@/locales/pt-BR";

vi.mock("@vercel/analytics", () => ({ track: vi.fn() }));

describe("SpecificLoadCalculator", () => {
  it("should compute the load and risk from a material and area", async () => {
    const user = userEvent.setup();
    render(<SpecificLoadCalculator />);

    await user.type(screen.getByLabelText(specific.addMaterialLabel), "papel");
    await user.click(screen.getByRole("button", { name: /Papel/i }));

    await user.type(screen.getByLabelText(/Massa/i), "60000");
    await user.type(
      screen.getByPlaceholderText(specific.areaPlaceholder),
      "1500",
    );
    await user.click(screen.getByRole("button", { name: specific.calculate }));

    expect(screen.getByText(specific.resultTitle)).toBeInTheDocument();
    expect(screen.getByText("680")).toBeInTheDocument();
    expect(screen.getAllByText(risk.medium.label).length).toBeGreaterThan(0);
  });

  it("should show an error when the area is missing", async () => {
    const user = userEvent.setup();
    render(<SpecificLoadCalculator />);

    await user.type(screen.getByLabelText(specific.addMaterialLabel), "papel");
    await user.click(screen.getByRole("button", { name: /Papel/i }));
    await user.type(screen.getByLabelText(/Massa/i), "1000");
    await user.click(screen.getByRole("button", { name: specific.calculate }));

    const alert = screen.getByRole("alert");
    expect(within(alert).getByText(specific.errorArea)).toBeInTheDocument();
  });
});
