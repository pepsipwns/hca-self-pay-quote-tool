import { ReactNode } from "react";
import { salesTeamSteps } from "../../utils/stepsConstants";
import ProgressBar from "../ProgressBar/ProgressBar";
import SpacingContainer from "./SpacingContainer";

interface PageContainerProps {
  title: string;
  children: ReactNode;
}

const PageContainer = (props: PageContainerProps) => {
  const { title, children } = props;
  return (
    <>
      <ProgressBar steps={salesTeamSteps} />
      <SpacingContainer>
        <h4 className="mt-4 lg:mt-10 mb-2">{title}</h4>
        {children}
      </SpacingContainer>
    </>
  );
};

PageContainer.defaultProps = {};

export default PageContainer;
