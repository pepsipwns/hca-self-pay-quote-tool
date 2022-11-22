import { ReactNode } from "react";

interface SpacingContainerProps {
  children: ReactNode;
}

const SpacingContainer = (props: SpacingContainerProps) => {
  const { children } = props;
  return <div className="px-3 md:px-6 lg:px-60">{children}</div>;
};

SpacingContainer.defaultProps = {};

export default SpacingContainer;
