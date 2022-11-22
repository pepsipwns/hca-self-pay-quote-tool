import { useAppContext } from "../../context/AppContext";
import SpacingContainer from "../Containers/SpacingContainer";
import Tick from "../../public/icons/tick.svg";
import Link from "next/link";
import React from "react";

type ProgressBarStep = {
  id: string;
  label: string;
  url: string;
  status: string;
};

interface ProgressBarProps {
  steps: ProgressBarStep[];
}

const getIconStyle = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-hca-blue-600 text-white";
    case "inactive":
      return "bg-white text-hca-grey-500";
    case "active":
      return "bg-hca-grey-500 text-white";
  }
};

const ProgressBar = (props: ProgressBarProps) => {
  const { steps } = props;
  const { currentStep } = useAppContext();

  for (let i = 0; i < steps.length; i++) {
    if (i < currentStep - 1) {
      steps[i].status = "completed";
    } else if (i === currentStep - 1) {
      steps[i].status = "active";
    } else {
      steps[i].status = "inactive";
    }
  }

  return (
    <div className="bg-hca-blue-200 py-2">
      <SpacingContainer>
        <div className="flex flex-col lg:flex-row justify-between relative">
          {steps.map((step, index) => {
            return (
              <React.Fragment key={`step-${index}`}>
                <div
                  aria-label={step.label}
                  className={`flex flex-row items-center z-10 bg-hca-blue-200 pr-2 pb-1 lg:pb-0 ${
                    index === 0 ? "" : "lg:pl-2 pt-1 lg:pt-0"
                  }`}
                >
                  {step.status === "completed" ? (
                    <Link
                      href={step.url}
                      className={`w-4 min-w-4 h-4 rounded-full flex items-center justify-center z-1 
                      ${getIconStyle(step.status)}`}
                    >
                      <Tick />
                    </Link>
                  ) : (
                    <div
                      className={`w-4 min-w-4 h-4 rounded-full flex items-center justify-center z-1 
                      ${getIconStyle(step.status)}`}
                    >
                      {index + 1}
                    </div>
                  )}
                  <div className="pl-2 z-10 whitespace-nowrap">
                    {step.label}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`border-l lg:border-b h-3 ml-4 lg:h-0 ${
                      step.status === "inactive" ||
                      step.status === "active"
                        ? "border-dashed"
                        : "border-solid"
                    } border-black self-center w-full`}
                  ></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </SpacingContainer>
    </div>
  );
};

ProgressBar.defaultProps = {};

export default ProgressBar;
