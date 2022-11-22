import { render } from "@testing-library/react";
import { AppProvider, useAppContext } from "../../context/AppContext";
import {
  salesTeamSteps,
  salesTeamStepsStep2Active,
} from "../../utils/stepsConstants";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("Progress Bar contains correct labels", async () => {
    const { getByText } = render(
      <ProgressBar steps={salesTeamSteps} />
    );

    expect(getByText("Personal Information")).toBeVisible();
    expect(getByText("Treatments & Diagnostics")).toBeVisible();
    expect(getByText("Summary")).toBeVisible();
    expect(getByText("1")).toBeVisible();
    expect(getByText("2")).toBeVisible();
    expect(getByText("3")).toBeVisible();
  });
});
